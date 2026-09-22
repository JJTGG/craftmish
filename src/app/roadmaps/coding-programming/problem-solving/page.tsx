import Link from "next/link";

const learnSections = [
  {
    title: "Understanding problems",
    items: [
      "Identify the actual problem",
      "Separate the problem from the proposed solution",
      "Identify inputs and outputs",
      "Identify requirements",
      "Identify constraints",
      "Clarify ambiguous requirements",
      "Define what success looks like"
    ]
  },
  {
    title: "Breaking problems down",
    items: [
      "Decomposition",
      "Breaking large problems into smaller problems",
      "Identifying independent parts",
      "Ordering subproblems",
      "Reducing complexity",
      "Solving one piece at a time"
    ]
  },
  {
    title: "Examples & edge cases",
    items: [
      "Create concrete examples",
      "Normal cases",
      "Boundary cases",
      "Empty input",
      "Invalid input",
      "Unexpected input",
      "Identify assumptions",
      "Test assumptions against examples"
    ]
  },
  {
    title: "Algorithms",
    items: [
      "What an algorithm is",
      "Step-by-step procedures",
      "Algorithm inputs and outputs",
      "Deterministic vs non-deterministic behavior — conceptual",
      "Correctness",
      "Efficiency — introductory",
      "Comparing alternative approaches"
    ]
  },
  {
    title: "Pseudocode & visual reasoning",
    items: [
      "Writing pseudocode",
      "Representing decisions",
      "Representing repetition",
      "Describing data transformations",
      "Flowcharts",
      "Tracing program logic",
      "Communicating an approach before implementation"
    ]
  },
  {
    title: "Abstraction & patterns",
    items: [
      "Abstraction",
      "Recognizing repeated structures",
      "Generalizing solutions",
      "Identifying reusable logic",
      "Separating essential details from implementation details",
      "Choosing an appropriate level of abstraction"
    ]
  },
  {
    title: "Iterative problem solving",
    items: [
      "Start with a simple solution",
      "Test the solution",
      "Find where it fails",
      "Refine the approach",
      "Compare the revised solution",
      "Avoid premature optimization",
      "Know when a problem is sufficiently solved"
    ]
  }
];

const proofPoints = [
  "Turn a vague requirement into a clearly defined problem with inputs, outputs, constraints, and success criteria.",
  "Break a larger problem into smaller, independently understandable tasks.",
  "Produce examples and edge cases before implementing a solution.",
  "Describe a solution using pseudocode or another clear representation.",
  "Implement a solution from an algorithm without relying on trial and error alone.",
  "Explain why a solution works and identify situations where it would fail.",
  "Compare two possible approaches and explain the relevant trade-offs.",
  "Take an incomplete or failing solution, identify the problem, and iteratively improve it."
];

const connections = {
  Concepts: [
    "Problem",
    "Requirement",
    "Constraint",
    "Input",
    "Output",
    "Algorithm",
    "Correctness",
    "Edge Case",
    "Abstraction",
    "Decomposition",
    "Pattern Recognition",
    "Complexity",
    "Trade-off"
  ],
  Skills: [
    "Problem Solving",
    "Algorithm Design",
    "Decomposition",
    "Abstraction",
    "Logical Reasoning",
    "Requirements Analysis",
    "Technical Communication"
  ],
  Technologies: [
    "Pseudocode",
    "Flowcharts"
  ]
};

export default function ProblemSolvingPage() {
  return (
    <main className="problem-solving-page">
      <div className="problem-solving-shell">
        <header className="problem-solving-header">
          <div className="problem-solving-breadcrumb">
            <Link href="/roadmaps">Roadmaps</Link>
            <span>/</span>
            <Link href="/roadmaps/coding-programming">
              Coding / Programming
            </Link>
            <span>/</span>
            <span>03</span>
          </div>

          <p className="problem-solving-eyebrow">03 / Foundation</p>

          <h1>Problem Solving</h1>

          <p className="problem-solving-lead">
            Learn to turn unclear problems into structured, testable, and
            implementable solutions.
          </p>
        </header>

        <div className="problem-solving-layout">
          <aside className="problem-solving-sidebar">
            <p>On this page</p>

            <nav aria-label="Page sections">
              <a href="#learn">Learn</a>
              <a href="#practice">Practice</a>
              <a href="#prove">Prove</a>
              <a href="#connections">Connected</a>
            </nav>
          </aside>

          <article className="problem-solving-content">
            <section className="problem-solving-intro">
              <p className="section-kicker">Goal</p>

              <p className="intro-text">
                Develop the reasoning skills needed to understand a problem,
                design an approach, test it, and improve it before and during
                implementation.
              </p>
            </section>

            <section id="learn" className="content-section">
              <div className="section-heading">
                <p className="section-kicker">01</p>
                <h2>Learn</h2>
              </div>

              <div className="learn-grid">
                {learnSections.map((section) => (
                  <section className="learn-group" key={section.title}>
                    <h3>{section.title}</h3>

                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>
                          <span aria-hidden="true">+</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </section>

            <section
              id="practice"
              className="content-section practice-section"
            >
              <div className="section-heading">
                <p className="section-kicker">02</p>
                <h2>Practice</h2>
              </div>

              <div className="practice-block">
                <p>
                  Take a small real-world problem and solve it without
                  immediately writing code. Define the problem, identify its
                  inputs and outputs, create examples, break it down, describe
                  an algorithm, then implement and test the result.
                </p>

                <div className="practice-sequence">
                  <span>Problem</span>
                  <span>→</span>
                  <span>Requirements</span>
                  <span>→</span>
                  <span>Examples</span>
                  <span>→</span>
                  <span>Decomposition</span>
                  <span>→</span>
                  <span>Algorithm</span>
                  <span>→</span>
                  <span>Implementation</span>
                  <span>→</span>
                  <span>Test</span>
                </div>
              </div>
            </section>

            <section id="prove" className="content-section proof-section">
              <div className="section-heading">
                <p className="section-kicker">03</p>
                <h2>Prove</h2>
              </div>

              <p className="section-description">
                Completion should demonstrate the ability to reason through a
                problem and construct a solution, rather than simply produce
                working code through experimentation.
              </p>

              <ul className="proof-list">
                {proofPoints.map((point, index) => (
                  <li key={point}>
                    <span className="proof-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              id="connections"
              className="content-section connections-section"
            >
              <div className="section-heading">
                <p className="section-kicker">04</p>
                <h2>Connected</h2>
              </div>

              <p className="section-description">
                Problem solving connects programming fundamentals to
                algorithms, computer science, software design, and the
                practical reasoning used when building software.
              </p>

              <div className="connection-groups">
                {Object.entries(connections).map(([type, items]) => (
                  <section className="connection-group" key={type}>
                    <h3>{type}</h3>

                    <div className="connection-list">
                      {items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </section>

            <footer className="problem-solving-footer">
              <Link href="/roadmaps/coding-programming">
                <span>←</span>
                <span>Back to Coding / Programming</span>
              </Link>

              <span className="next-placeholder">
                Next section →
              </span>
            </footer>
          </article>
        </div>
      </div>

      <style>{`
        .problem-solving-page {
          min-height: 100vh;
          background: var(--background);
        }

        .problem-solving-shell {
          width: min(1280px, calc(100% - 32px));
          margin: 0 auto;
          padding: 72px 0 120px;
        }

        .problem-solving-header {
          max-width: 980px;
          padding-bottom: 80px;
          border-bottom: 1px solid var(--border);
        }

        .problem-solving-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin-bottom: 56px;
          color: var(--muted);
          font-family: monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .problem-solving-breadcrumb a {
          transition: color 150ms ease;
        }

        .problem-solving-breadcrumb a:hover,
        .problem-solving-breadcrumb a:focus-visible {
          color: var(--foreground);
        }

        .problem-solving-eyebrow,
        .section-kicker {
          margin: 0 0 16px;
          color: var(--muted);
          font-family: monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .problem-solving-header h1 {
          max-width: 900px;
          margin: 0;
          font-size: clamp(48px, 8vw, 88px);
          line-height: 0.95;
          letter-spacing: -0.065em;
        }

        .problem-solving-lead {
          max-width: 680px;
          margin: 32px 0 0;
          color: var(--muted);
          font-size: 21px;
          line-height: 1.6;
        }

        .problem-solving-layout {
          display: grid;
          grid-template-columns: 220px minmax(0, 760px);
          justify-content: space-between;
          gap: 64px;
          padding-top: 72px;
        }

        .problem-solving-sidebar {
          position: sticky;
          top: 24px;
          align-self: start;
        }

        .problem-solving-sidebar p {
          margin: 0 0 18px;
          color: var(--muted);
          font-family: monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .problem-solving-sidebar nav {
          display: flex;
          flex-direction: column;
          border-left: 1px solid var(--border);
        }

        .problem-solving-sidebar a {
          padding: 8px 0 8px 14px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.35;
          border-left: 1px solid transparent;
          margin-left: -1px;
          transition:
            color 150ms ease,
            border-color 150ms ease;
        }

        .problem-solving-sidebar a:hover,
        .problem-solving-sidebar a:focus-visible {
          color: var(--foreground);
          border-left-color: var(--foreground);
        }

        .problem-solving-intro {
          margin-bottom: 96px;
        }

        .intro-text {
          max-width: 700px;
          margin: 0;
          font-size: 25px;
          line-height: 1.55;
          letter-spacing: -0.025em;
        }

        .content-section {
          padding: 72px 0;
          border-top: 1px solid var(--border);
          scroll-margin-top: 24px;
        }

        .section-heading {
          margin-bottom: 40px;
        }

        .section-heading h2 {
          margin: 0;
          font-size: clamp(38px, 6vw, 56px);
          line-height: 1;
          letter-spacing: -0.055em;
        }

        .learn-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 56px 40px;
        }

        .learn-group h3,
        .connection-group h3 {
          margin: 0 0 18px;
          font-size: 18px;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        .learn-group ul,
        .proof-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .learn-group li {
          display: grid;
          grid-template-columns: 18px minmax(0, 1fr);
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid var(--border);
          color: var(--muted);
          font-size: 14px;
          line-height: 1.5;
        }

        .learn-group li span:first-child {
          color: var(--foreground);
          font-family: monospace;
        }

        .practice-block {
          padding: 32px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .practice-block > p {
          max-width: 680px;
          margin: 0;
          font-size: 20px;
          line-height: 1.6;
          letter-spacing: -0.02em;
        }

        .practice-sequence {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin-top: 32px;
          color: var(--muted);
          font-family: monospace;
          font-size: 11px;
        }

        .practice-sequence span:nth-child(odd) {
          color: var(--foreground);
        }

        .section-description {
          max-width: 650px;
          margin: -12px 0 36px;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.7;
        }

        .proof-list {
          border-top: 1px solid var(--border);
        }

        .proof-list li {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 20px;
          padding: 18px 0;
          border-bottom: 1px solid var(--border);
          font-size: 16px;
          line-height: 1.55;
        }

        .proof-number {
          color: var(--muted);
          font-family: monospace;
          font-size: 12px;
        }

        .connection-groups {
          display: flex;
          flex-direction: column;
          gap: 44px;
        }

        .connection-group {
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        .connection-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .connection-list span {
          padding: 8px 10px;
          border: 1px solid var(--border);
          color: var(--muted);
          font-family: monospace;
          font-size: 11px;
          line-height: 1.2;
        }

        .problem-solving-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding-top: 32px;
          border-top: 1px solid var(--border);
        }

        .problem-solving-footer a,
        .next-placeholder {
          color: var(--muted);
          font-size: 13px;
        }

        .problem-solving-footer a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: color 150ms ease;
        }

        .problem-solving-footer a:hover,
        .problem-solving-footer a:focus-visible {
          color: var(--foreground);
        }

        .next-placeholder {
          font-family: monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        @media (max-width: 800px) {
          .problem-solving-layout {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .problem-solving-sidebar {
            position: static;
            margin-bottom: 64px;
          }
        }

        @media (max-width: 640px) {
          .problem-solving-shell {
            width: min(100% - 24px, 1280px);
            padding: 48px 0 80px;
          }

          .problem-solving-header {
            padding-bottom: 64px;
          }

          .problem-solving-breadcrumb {
            margin-bottom: 42px;
          }

          .problem-solving-header h1 {
            font-size: clamp(44px, 13vw, 64px);
          }

          .problem-solving-lead {
            margin-top: 26px;
            font-size: 18px;
          }

          .problem-solving-layout {
            padding-top: 48px;
          }

          .problem-solving-intro {
            margin-bottom: 64px;
          }

          .intro-text {
            font-size: 21px;
          }

          .content-section {
            padding: 56px 0;
          }

          .learn-grid {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .practice-block > p {
            font-size: 18px;
          }

          .problem-solving-footer {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}