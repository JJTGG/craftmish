import Link from "next/link";

const learnGroups = [
  {
    title: "Version control fundamentals",
    topics: [
      "What version control is",
      "Why version control matters",
      "Repositories",
      "Local vs remote repositories",
      "Snapshots and history",
      "Working trees"
    ]
  },
  {
    title: "Git basics",
    topics: [
      "Installing Git",
      "Git configuration",
      "Initializing a repository",
      "Cloning repositories",
      "Checking repository status",
      "Reading Git output"
    ]
  },
  {
    title: "Commits",
    topics: [
      "What a commit represents",
      "Staging changes",
      "Creating commits",
      "Writing useful commit messages",
      "Viewing commit history",
      "Inspecting previous commits"
    ]
  },
  {
    title: "Branches",
    topics: [
      "Why branches exist",
      "Creating branches",
      "Switching branches",
      "Tracking branch state",
      "Merging branches",
      "Resolving merge conflicts"
    ]
  },
  {
    title: "Remote repositories",
    topics: [
      "Remote repositories",
      "Adding a remote",
      "Fetching changes",
      "Pulling changes",
      "Pushing changes",
      "Understanding local and remote state"
    ]
  },
  {
    title: "GitHub fundamentals",
    topics: [
      "What GitHub is",
      "Repositories on GitHub",
      "README files",
      "Issues",
      "Pull requests",
      "Discussions",
      "Releases"
    ]
  },
  {
    title: "Collaboration",
    topics: [
      "Forks",
      "Pull request workflow",
      "Code review",
      "Review comments",
      "Working with contributors",
      "Resolving conflicts during collaboration"
    ]
  },
  {
    title: "Undoing & recovering changes",
    topics: [
      "Discarding working-tree changes",
      "Unstaging changes",
      "Amending commits",
      "Reverting commits",
      "Resetting commits",
      "Recovering lost references",
      "Understanding when each approach is appropriate"
    ]
  },
  {
    title: "Git history & inspection",
    topics: [
      "Reading commit history",
      "Comparing changes",
      "Inspecting files from previous commits",
      "Finding when a change was introduced",
      "Blame and line history",
      "Understanding repository evolution"
    ]
  },
  {
    title: "Open source workflow",
    topics: [
      "Finding projects to contribute to",
      "Reading contribution guidelines",
      "Understanding issues and feature requests",
      "Making focused changes",
      "Opening pull requests",
      "Responding to review",
      "Working within project conventions"
    ]
  }
];

const practice = [
  "Create a Git repository and make a sequence of meaningful commits.",
  "Create a branch, make a change, and merge it back into the main branch.",
  "Clone an existing repository and inspect its history.",
  "Push a local repository to GitHub.",
  "Create an issue describing a small improvement.",
  "Open a pull request from a branch or fork.",
  "Create and resolve a merge conflict.",
  "Use Git history to identify when a change was introduced.",
  "Undo a change using an appropriate Git operation.",
  "Read an open-source repository's README and contribution guidelines before making a change."
];

const prove = [
  "Create a small project repository with a clear README.",
  "Use a meaningful branch for a feature or improvement.",
  "Make focused commits that describe the changes accurately.",
  "Push the repository to GitHub.",
  "Create an issue and connect your work to it.",
  "Open a pull request containing the change.",
  "Review the change and address at least one piece of feedback.",
  "Resolve a merge conflict and leave the repository in a clean state."
];

export default function GitGithubPage() {
  return (
    <main className="roadmap-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/roadmaps">Roadmaps</Link>
        <span aria-hidden="true">/</span>
        <Link href="/roadmaps/coding-programming">
          Coding / Programming
        </Link>
        <span aria-hidden="true">/</span>
        <span>Git &amp; GitHub</span>
      </nav>

      <header className="roadmap-header">
        <p className="eyebrow">05 / 08</p>

        <h1>Git &amp; GitHub</h1>

        <p className="roadmap-summary">
          Learn to track software changes, work safely with history, and
          collaborate on projects through Git and GitHub.
        </p>
      </header>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Goal</p>
          <h2>Work with code as a versioned, collaborative system.</h2>
        </div>

        <p className="section-copy">
          Git gives you control over the history of your work. GitHub extends
          that workflow into collaboration, code review, project management,
          and open source. The goal is not to memorize commands, but to
          understand the state of a repository and make deliberate changes to
          it.
        </p>
      </section>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Learn</p>
          <h2>Version control, collaboration, and repository workflow.</h2>
        </div>

        <div className="learn-list">
          {learnGroups.map((group, index) => (
            <article className="learn-group" key={group.title}>
              <div className="learn-group-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="learn-group-content">
                <h3>{group.title}</h3>

                <ul>
                  {group.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Practice</p>
          <h2>Use version control on real work.</h2>
        </div>

        <ul className="action-list">
          {practice.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Prove</p>
          <h2>Take a project from local work to collaboration.</h2>
        </div>

        <p className="section-copy">
          Complete a small project workflow that demonstrates you can manage
          history, work with branches, publish to GitHub, and participate in a
          basic pull-request workflow.
        </p>

        <ul className="action-list">
          {prove.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Connected</p>
          <h2>Where this leads.</h2>
        </div>

        <div className="connection-list">
          <div>
            <span className="connection-label">Concepts</span>
            <p>
              Version control · Repository state · Branching · Collaboration
            </p>
          </div>

          <div>
            <span className="connection-label">Skills</span>
            <p>
              Git workflow · Code review · Conflict resolution · Open source
              contribution
            </p>
          </div>

          <div>
            <span className="connection-label">Technologies</span>
            <p>Git · GitHub · GitHub CLI · Git hosting · CI/CD</p>
          </div>
        </div>
      </section>

      <nav className="roadmap-navigation" aria-label="Roadmap navigation">
        <Link href="/roadmaps/coding-programming/command-line-developer-tools">
          ← Previous section
        </Link>

        <Link href="/roadmaps/coding-programming/data-structures-algorithms">
          Next section →
        </Link>
      </nav>

      <style>{`
        .roadmap-page {
          width: min(100% - 32px, 960px);
          margin: 0 auto;
          padding: 48px 0 80px;
        }

        .breadcrumbs {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin-bottom: 56px;
          color: var(--muted);
          font-size: 13px;
        }

        .breadcrumbs a {
          transition: color 150ms ease;
        }

        .breadcrumbs a:hover,
        .breadcrumbs a:focus-visible {
          color: var(--foreground);
        }

        .roadmap-header {
          max-width: 760px;
          padding-bottom: 64px;
          border-bottom: 1px solid var(--border);
        }

        .eyebrow {
          margin: 0 0 12px;
          color: var(--muted);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .roadmap-header h1 {
          margin: 0;
          max-width: 760px;
          font-size: clamp(38px, 7vw, 72px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .roadmap-summary {
          max-width: 680px;
          margin: 24px 0 0;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.65;
        }

        .roadmap-section {
          padding: 64px 0;
          border-bottom: 1px solid var(--border);
        }

        .section-heading {
          max-width: 680px;
          margin-bottom: 28px;
        }

        .section-heading h2 {
          margin: 0;
          font-size: clamp(25px, 4vw, 38px);
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .section-copy {
          max-width: 720px;
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.75;
        }

        .learn-list {
          display: grid;
          gap: 0;
        }

        .learn-group {
          display: grid;
          grid-template-columns: 56px minmax(0, 1fr);
          gap: 24px;
          padding: 28px 0;
          border-top: 1px solid var(--border);
        }

        .learn-group:last-child {
          border-bottom: 1px solid var(--border);
        }

        .learn-group-index {
          padding-top: 2px;
          color: var(--muted);
          font-size: 13px;
          font-variant-numeric: tabular-nums;
        }

        .learn-group-content h3 {
          margin: 0 0 16px;
          font-size: 19px;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        .learn-group-content ul,
        .action-list {
          margin: 0;
          padding-left: 20px;
        }

        .learn-group-content li,
        .action-list li {
          margin: 9px 0;
          color: var(--muted);
          line-height: 1.65;
        }

        .connection-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }

        .connection-list > div {
          min-width: 0;
          padding: 24px;
          background: var(--background);
        }

        .connection-label {
          display: block;
          margin-bottom: 12px;
          color: var(--foreground);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .connection-list p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.65;
        }

        .roadmap-navigation {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding-top: 32px;
        }

        .roadmap-navigation a {
          color: var(--muted);
          font-size: 14px;
          transition: color 150ms ease;
        }

        .roadmap-navigation a:hover,
        .roadmap-navigation a:focus-visible {
          color: var(--foreground);
        }

        @media (max-width: 700px) {
          .roadmap-page {
            width: min(100% - 24px, 960px);
            padding-top: 32px;
          }

          .breadcrumbs {
            margin-bottom: 40px;
          }

          .roadmap-header {
            padding-bottom: 48px;
          }

          .roadmap-summary {
            font-size: 16px;
          }

          .roadmap-section {
            padding: 48px 0;
          }

          .learn-group {
            grid-template-columns: 40px minmax(0, 1fr);
            gap: 16px;
          }

          .connection-list {
            grid-template-columns: 1fr;
          }

          .roadmap-navigation {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}