CREATE TYPE public.learning_progress_state AS ENUM ('in_progress', 'completed', 'demonstrated', 'review_needed');
--> statement-breakpoint
CREATE TYPE public.practice_attempt_status AS ENUM ('completed', 'failed', 'timed_out', 'abandoned');
--> statement-breakpoint
CREATE TYPE public.practice_verification_level AS ENUM ('client_reported', 'server_evaluated', 'human_reviewed');
--> statement-breakpoint
CREATE TYPE public.competency_evidence_source AS ENUM ('self_reported', 'client_run', 'server_assessment', 'project_review', 'external_review');
--> statement-breakpoint
CREATE TYPE public.competency_evidence_status AS ENUM ('unverified', 'verified', 'rejected');
--> statement-breakpoint
CREATE TYPE public.enrollment_status AS ENUM ('enrolled', 'completed', 'withdrawn');
--> statement-breakpoint
CREATE TYPE public.credential_type AS ENUM ('programme_completion', 'competency', 'project');
--> statement-breakpoint
CREATE TYPE public.certificate_status AS ENUM ('issued', 'revoked');
--> statement-breakpoint
CREATE TYPE public.certificate_event_type AS ENUM ('issued', 'revoked', 'reinstated');
--> statement-breakpoint
CREATE TABLE public.learner_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_user_id text NOT NULL UNIQUE,
  display_name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT learner_profiles_display_name_nonempty CHECK (length(trim(display_name)) > 0)
);
--> statement-breakpoint
CREATE TABLE public.learning_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  learner_id uuid NOT NULL REFERENCES public.learner_profiles(id) ON DELETE CASCADE,
  content_id text NOT NULL,
  content_version integer NOT NULL DEFAULT 1,
  state public.learning_progress_state NOT NULL DEFAULT 'in_progress',
  first_started_at timestamptz NOT NULL DEFAULT now(),
  last_activity_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz,
  CONSTRAINT learning_progress_version_positive CHECK (content_version > 0),
  CONSTRAINT learning_progress_completed_consistent CHECK (
    (state IN ('completed', 'demonstrated') AND completed_at IS NOT NULL)
    OR (state IN ('in_progress', 'review_needed'))
  ),
  CONSTRAINT learning_progress_unique_content UNIQUE (learner_id, content_id, content_version)
);
--> statement-breakpoint
CREATE TABLE public.practice_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  learner_id uuid NOT NULL REFERENCES public.learner_profiles(id) ON DELETE CASCADE,
  activity_id text NOT NULL,
  activity_version integer NOT NULL DEFAULT 1,
  status public.practice_attempt_status NOT NULL DEFAULT 'completed',
  verification_level public.practice_verification_level NOT NULL DEFAULT 'client_reported',
  code_snapshot jsonb NOT NULL DEFAULT '{}'::jsonb,
  result_snapshot jsonb NOT NULL DEFAULT '{}'::jsonb,
  passed_checks integer NOT NULL DEFAULT 0,
  total_checks integer NOT NULL DEFAULT 0,
  started_at timestamptz,
  submitted_at timestamptz NOT NULL DEFAULT now(),
  evaluated_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT practice_attempts_version_positive CHECK (activity_version > 0),
  CONSTRAINT practice_attempts_checks_nonnegative CHECK (
    passed_checks >= 0 AND total_checks >= 0 AND passed_checks <= total_checks
  )
);
--> statement-breakpoint
CREATE TABLE public.competency_evidence (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  learner_id uuid NOT NULL REFERENCES public.learner_profiles(id) ON DELETE CASCADE,
  competency_id text NOT NULL,
  source public.competency_evidence_source NOT NULL,
  status public.competency_evidence_status NOT NULL DEFAULT 'unverified',
  source_attempt_id uuid REFERENCES public.practice_attempts(id) ON DELETE SET NULL,
  evidence_snapshot jsonb NOT NULL DEFAULT '{}'::jsonb,
  assessed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE public.program_enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  learner_id uuid NOT NULL REFERENCES public.learner_profiles(id) ON DELETE CASCADE,
  program_id text NOT NULL,
  program_version integer NOT NULL DEFAULT 1,
  status public.enrollment_status NOT NULL DEFAULT 'enrolled',
  enrolled_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz,
  CONSTRAINT program_enrollments_version_positive CHECK (program_version > 0),
  CONSTRAINT program_enrollments_completed_consistent CHECK (
    (status = 'completed' AND completed_at IS NOT NULL)
    OR (status <> 'completed')
  ),
  CONSTRAINT program_enrollments_unique UNIQUE (learner_id, program_id, program_version)
);
--> statement-breakpoint
CREATE TABLE public.certificates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  credential_id uuid NOT NULL DEFAULT gen_random_uuid() UNIQUE,
  learner_id uuid NOT NULL REFERENCES public.learner_profiles(id) ON DELETE RESTRICT,
  type public.credential_type NOT NULL,
  achievement_key text NOT NULL,
  achievement_title text NOT NULL,
  recipient_name_snapshot text NOT NULL,
  program_id text,
  program_version integer,
  status public.certificate_status NOT NULL DEFAULT 'issued',
  evidence_snapshot jsonb NOT NULL DEFAULT '{}'::jsonb,
  issued_at timestamptz NOT NULL DEFAULT now(),
  revoked_at timestamptz,
  revoked_reason text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT certificates_title_nonempty CHECK (length(trim(achievement_title)) > 0),
  CONSTRAINT certificates_recipient_nonempty CHECK (length(trim(recipient_name_snapshot)) > 0),
  CONSTRAINT certificates_program_version_positive CHECK (program_version IS NULL OR program_version > 0),
  CONSTRAINT certificates_revocation_consistent CHECK (
    (status = 'revoked' AND revoked_at IS NOT NULL)
    OR (status = 'issued' AND revoked_at IS NULL)
  )
);
--> statement-breakpoint
CREATE TABLE public.certificate_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  certificate_id uuid NOT NULL REFERENCES public.certificates(id) ON DELETE RESTRICT,
  event_type public.certificate_event_type NOT NULL,
  actor_auth_user_id text,
  details jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
--> statement-breakpoint
CREATE INDEX learning_progress_by_learner_updated ON public.learning_progress (learner_id, last_activity_at DESC);
--> statement-breakpoint
CREATE INDEX practice_attempts_by_learner_activity_date ON public.practice_attempts (learner_id, activity_id, submitted_at DESC);
--> statement-breakpoint
CREATE INDEX competency_evidence_by_learner_competency ON public.competency_evidence (learner_id, competency_id, created_at DESC);
--> statement-breakpoint
CREATE INDEX program_enrollments_by_learner_status ON public.program_enrollments (learner_id, status);
--> statement-breakpoint
CREATE INDEX certificates_by_learner_issued ON public.certificates (learner_id, issued_at DESC);
--> statement-breakpoint
CREATE INDEX certificate_events_by_certificate_date ON public.certificate_events (certificate_id, created_at ASC);