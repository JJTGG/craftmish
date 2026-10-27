import { sql } from "drizzle-orm";
import {
  check,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  unique,
  uuid
} from "drizzle-orm/pg-core";

type JsonRecord = Record<string, unknown>;

const timestampColumn = (name: string) =>
  timestamp(name, {
    withTimezone: true,
    mode: "date"
  });

export const learningProgressState = pgEnum(
  "learning_progress_state",
  ["in_progress", "completed", "demonstrated", "review_needed"]
);

export const practiceAttemptStatus = pgEnum(
  "practice_attempt_status",
  ["completed", "failed", "timed_out", "abandoned"]
);

export const practiceVerificationLevel = pgEnum(
  "practice_verification_level",
  ["client_reported", "server_evaluated", "human_reviewed"]
);

export const competencyEvidenceSource = pgEnum(
  "competency_evidence_source",
  [
    "self_reported",
    "client_run",
    "server_assessment",
    "project_review",
    "external_review"
  ]
);

export const competencyEvidenceStatus = pgEnum(
  "competency_evidence_status",
  ["unverified", "verified", "rejected"]
);

export const enrollmentStatus = pgEnum(
  "enrollment_status",
  ["enrolled", "completed", "withdrawn"]
);

export const credentialType = pgEnum(
  "credential_type",
  ["programme_completion", "competency", "project"]
);

export const certificateStatus = pgEnum(
  "certificate_status",
  ["issued", "revoked"]
);

export const certificateEventType = pgEnum(
  "certificate_event_type",
  ["issued", "revoked", "reinstated"]
);

export const learnerProfiles = pgTable(
  "learner_profiles",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    authUserId: text("auth_user_id").notNull(),
    displayName: text("display_name").notNull(),
    createdAt: timestampColumn("created_at").notNull().defaultNow(),
    updatedAt: timestampColumn("updated_at").notNull().defaultNow()
  },
  (table) => [
    unique("learner_profiles_auth_user_id_key").on(table.authUserId),
    check(
      "learner_profiles_display_name_nonempty",
      sql`length(trim(${table.displayName})) > 0`
    )
  ]
);

export const learningProgress = pgTable(
  "learning_progress",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    learnerId: uuid("learner_id")
      .notNull()
      .references(() => learnerProfiles.id, { onDelete: "cascade" }),
    contentId: text("content_id").notNull(),
    contentVersion: integer("content_version").notNull().default(1),
    state: learningProgressState("state")
      .notNull()
      .default("in_progress"),
    firstStartedAt: timestampColumn("first_started_at")
      .notNull()
      .defaultNow(),
    lastActivityAt: timestampColumn("last_activity_at")
      .notNull()
      .defaultNow(),
    completedAt: timestampColumn("completed_at")
  },
  (table) => [
    check(
      "learning_progress_version_positive",
      sql`${table.contentVersion} > 0`
    ),
    check(
      "learning_progress_completed_consistent",
      sql`(
        (${table.state} IN ('completed', 'demonstrated')
          AND ${table.completedAt} IS NOT NULL)
        OR ${table.state} IN ('in_progress', 'review_needed')
      )`
    ),
    unique("learning_progress_unique_content").on(
      table.learnerId,
      table.contentId,
      table.contentVersion
    ),
    index("learning_progress_by_learner_updated").on(
      table.learnerId,
      table.lastActivityAt.desc()
    )
  ]
);

export const practiceAttempts = pgTable(
  "practice_attempts",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    learnerId: uuid("learner_id")
      .notNull()
      .references(() => learnerProfiles.id, { onDelete: "cascade" }),
    activityId: text("activity_id").notNull(),
    activityVersion: integer("activity_version").notNull().default(1),
    status: practiceAttemptStatus("status")
      .notNull()
      .default("completed"),
    verificationLevel: practiceVerificationLevel("verification_level")
      .notNull()
      .default("client_reported"),
    codeSnapshot: jsonb("code_snapshot")
      .$type<JsonRecord>()
      .notNull()
      .default(sql`'{}'::jsonb`),
    resultSnapshot: jsonb("result_snapshot")
      .$type<JsonRecord>()
      .notNull()
      .default(sql`'{}'::jsonb`),
    passedChecks: integer("passed_checks").notNull().default(0),
    totalChecks: integer("total_checks").notNull().default(0),
    startedAt: timestampColumn("started_at"),
    submittedAt: timestampColumn("submitted_at").notNull().defaultNow(),
    evaluatedAt: timestampColumn("evaluated_at"),
    createdAt: timestampColumn("created_at").notNull().defaultNow()
  },
  (table) => [
    check(
      "practice_attempts_version_positive",
      sql`${table.activityVersion} > 0`
    ),
    check(
      "practice_attempts_checks_nonnegative",
      sql`(
        ${table.passedChecks} >= 0
        AND ${table.totalChecks} >= 0
        AND ${table.passedChecks} <= ${table.totalChecks}
      )`
    ),
    index("practice_attempts_by_learner_activity_date").on(
      table.learnerId,
      table.activityId,
      table.submittedAt.desc()
    )
  ]
);

export const competencyEvidence = pgTable(
  "competency_evidence",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    learnerId: uuid("learner_id")
      .notNull()
      .references(() => learnerProfiles.id, { onDelete: "cascade" }),
    competencyId: text("competency_id").notNull(),
    source: competencyEvidenceSource("source").notNull(),
    status: competencyEvidenceStatus("status")
      .notNull()
      .default("unverified"),
    sourceAttemptId: uuid("source_attempt_id").references(
      () => practiceAttempts.id,
      { onDelete: "set null" }
    ),
    evidenceSnapshot: jsonb("evidence_snapshot")
      .$type<JsonRecord>()
      .notNull()
      .default(sql`'{}'::jsonb`),
    assessedAt: timestampColumn("assessed_at"),
    createdAt: timestampColumn("created_at").notNull().defaultNow()
  },
  (table) => [
    index("competency_evidence_by_learner_competency").on(
      table.learnerId,
      table.competencyId,
      table.createdAt.desc()
    )
  ]
);

export const programEnrollments = pgTable(
  "program_enrollments",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    learnerId: uuid("learner_id")
      .notNull()
      .references(() => learnerProfiles.id, { onDelete: "cascade" }),
    programId: text("program_id").notNull(),
    programVersion: integer("program_version").notNull().default(1),
    status: enrollmentStatus("status").notNull().default("enrolled"),
    enrolledAt: timestampColumn("enrolled_at").notNull().defaultNow(),
    completedAt: timestampColumn("completed_at")
  },
  (table) => [
    check(
      "program_enrollments_version_positive",
      sql`${table.programVersion} > 0`
    ),
    check(
      "program_enrollments_completed_consistent",
      sql`(
        (${table.status} = 'completed' AND ${table.completedAt} IS NOT NULL)
        OR ${table.status} <> 'completed'
      )`
    ),
    unique("program_enrollments_unique").on(
      table.learnerId,
      table.programId,
      table.programVersion
    ),
    index("program_enrollments_by_learner_status").on(
      table.learnerId,
      table.status
    )
  ]
);

export const certificates = pgTable(
  "certificates",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    credentialId: uuid("credential_id").notNull().defaultRandom(),
    learnerId: uuid("learner_id")
      .notNull()
      .references(() => learnerProfiles.id, { onDelete: "restrict" }),
    type: credentialType("type").notNull(),
    achievementKey: text("achievement_key").notNull(),
    achievementTitle: text("achievement_title").notNull(),
    recipientNameSnapshot: text("recipient_name_snapshot").notNull(),
    programId: text("program_id"),
    programVersion: integer("program_version"),
    status: certificateStatus("status").notNull().default("issued"),
    evidenceSnapshot: jsonb("evidence_snapshot")
      .$type<JsonRecord>()
      .notNull()
      .default(sql`'{}'::jsonb`),
    issuedAt: timestampColumn("issued_at").notNull().defaultNow(),
    revokedAt: timestampColumn("revoked_at"),
    revokedReason: text("revoked_reason"),
    createdAt: timestampColumn("created_at").notNull().defaultNow()
  },
  (table) => [
    unique("certificates_credential_id_key").on(table.credentialId),
    check(
      "certificates_title_nonempty",
      sql`length(trim(${table.achievementTitle})) > 0`
    ),
    check(
      "certificates_recipient_nonempty",
      sql`length(trim(${table.recipientNameSnapshot})) > 0`
    ),
    check(
      "certificates_program_version_positive",
      sql`${table.programVersion} IS NULL OR ${table.programVersion} > 0`
    ),
    check(
      "certificates_revocation_consistent",
      sql`(
        (${table.status} = 'revoked' AND ${table.revokedAt} IS NOT NULL)
        OR (${table.status} = 'issued' AND ${table.revokedAt} IS NULL)
      )`
    ),
    index("certificates_by_learner_issued").on(
      table.learnerId,
      table.issuedAt.desc()
    )
  ]
);

export const certificateEvents = pgTable(
  "certificate_events",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    certificateId: uuid("certificate_id")
      .notNull()
      .references(() => certificates.id, { onDelete: "restrict" }),
    eventType: certificateEventType("event_type").notNull(),
    actorAuthUserId: text("actor_auth_user_id"),
    details: jsonb("details")
      .$type<JsonRecord>()
      .notNull()
      .default(sql`'{}'::jsonb`),
    createdAt: timestampColumn("created_at").notNull().defaultNow()
  },
  (table) => [
    index("certificate_events_by_certificate_date").on(
      table.certificateId,
      table.createdAt
    )
  ]
);