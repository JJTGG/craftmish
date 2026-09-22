import Link from "next/link";

const learnGroups = [
  {
    title: "Understanding bugs",
    topics: [
      "What a bug is",
      "Syntax errors",
      "Runtime errors",
      "Logic errors",
      "Unexpected behavior",
      "Reproducible vs intermittent bugs"
    ]
  },
  {
    title: "Debugging mindset",
    topics: [
      "Observe before changing code",
      "Reproduce the problem",
      "Reduce the problem",
      "Form hypotheses",
      "Test one assumption at a time",
      "Verify the fix",
      "Avoid fixing symptoms instead of causes"
    ]
  },
  {
    title: "Reading errors & logs",
    topics: [
      "Stack traces",
      "Error messages",
      "Exit codes",
      "Application logs",
      "Browser console output",
      "Server logs",
      "Finding the useful part of an error"
    ]
  },
  {
    title: "Debugging tools",
    topics: [
      "Breakpoints",
      "Stepping through code",
      "Inspecting variables",
      "Call stacks",
      "Watch expressions",
      "Browser developer tools",
      "Runtime debugging tools"
    ]
  },
  {
    title: "Testing fundamentals",
    topics: [
      "Why software is tested",
      "Expected behavior",
      "Test cases",
      "Assertions",
      "Test inputs and outputs",
      "Positive and negative cases",
      "Regression testing"
    ]
  },
  {
    title: "Unit testing",
    topics: [
      "What a unit test is",
      "Testing isolated behavior",
      "Arrange, act, assert",
      "Test naming",
      "Test independence",
      "Test doubles",
      "Keeping unit tests focused"
    ]
  },
  {
    title: "Integration testing",
    topics: [
      "What integration testing is",
      "Testing component boundaries",
      "Testing APIs",
      "Testing database interactions",
      "Testing external dependencies",
      "Test environments",
      "Finding integration failures"
    ]
  },
  {
    title: "End-to-end testing",
    topics: [
      "What end-to-end testing is",
      "Testing user workflows",
      "Browser-based testing",
      "Critical paths",
      "Test reliability",
      "Test data",
      "When end-to-end tests are useful"
    ]
  },
  {
    title: "Test strategy",
    topics: [
      "Choosing what to test",
      "Test coverage",
      "Boundary cases",
      "Failure cases",
      "Regression suites",
      "Fast vs slow tests",
      "Balancing confidence and maintenance"
    ]
  },
  {
    title: "Debugging production problems",
    topics: [
      "Reproducing reported failures",
      "Reading production logs",
      "Identifying affected inputs",
      "Tracing failures across components",
      "Safe fixes",
      "Verifying production fixes",
      "Learning from incidents"
    ]
  }
];

const practice = [
  "Take a broken program and reproduce its failure before changing the code.",
  "Use an error message or stack trace to locate the likely source of a bug.",
  "Debug a program with a breakpoint and inspect its variables.",
  "Create tests for normal, boundary, and invalid inputs.",
  "Write unit tests for a small piece of application logic.",
  "Write an integration test for two components that communicate with each other.",
  "Create an end-to-end test for one important user workflow.",
  "Introduce a regression bug into a project and use a test to catch it.",
  "Investigate a failure using logs instead of immediately changing the implementation."
];

const prove = [
  "Take a deliberately broken small project and document the observed behavior.",
  "Reproduce at least three different bugs.",
  "Explain the likely cause of each bug before applying a fix.",
  "Use an appropriate debugging tool to investigate at least one failure.",
  "Write tests covering the fixed behavior and relevant edge cases.",
  "Demonstrate that the tests fail before the fix and pass after it.",
  "Explain what additional test or monitoring signal would help prevent the bug from returning."
];

export default function DebuggingTestingPage() {
  return (
    <main className="roadmap-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/roadmaps">Roadmaps</Link>
        <span aria-hidden="true">/</span>
        <Link href="/roadmaps/coding-programming">
          Coding / Programming
        </Link>
        <span aria-hidden="true">/</span>
        <span>Debugging &amp; Testing</span>
      </nav>

      <header className="roadmap-header">
        <p className="eyebrow">07 / 08</p>

        <h1>Debugging &amp; Testing</h1>

        <p className="roadmap-summary">
          Learn to investigate failures systematically and build confidence
          that software behaves as intended.
        </p>
      </header>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Goal</p>
          <h2>Learn to find problems instead of guessing at them.</h2>
        </div>

        <p className="section-copy">
          Writing code is only part of software development. Real programs
          fail, behave unexpectedly, and change over time. The goal here is
          to develop a disciplined process for reproducing failures,
          investigating their causes, fixing them, and using tests to prevent
          regressions.
        </p>
      </section>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Learn</p>
          <h2>Debugging, testing, and building confidence in software.</h2>
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
          <h2>Investigate failures and verify behavior.</h2>
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
          <h2>Debug a system and leave evidence that it works.</h2>
        </div>

        <p className="section-copy">
          Work through a deliberately broken project. The proof should show
          that you can distinguish symptoms from causes, use debugging tools,
          create tests around the behavior, and verify that the fix does not
          introduce another failure.
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
              Reliability · Failure modes · Observability · Regression ·
              Correctness
            </p>
          </div>

          <div>
            <span className="connection-label">Skills</span>
            <p>
              Debugging · Testing · Root-cause analysis · Verification ·
              Quality assurance
            </p>
          </div>

          <div>
            <span className="connection-label">Technologies</span>
            <p>
              Test runners · Browser DevTools · Linters · CI pipelines ·
              Monitoring systems
            </p>
          </div>
        </div>
      </section>

      <nav className="roadmap-navigation" aria-label="Roadmap navigation">
        <Link href="/roadmaps/coding-programming/data-structures-algorithms">
          ← Previous section
        </Link>

        <Link href="/roadmaps/coding-programming/specialization">
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