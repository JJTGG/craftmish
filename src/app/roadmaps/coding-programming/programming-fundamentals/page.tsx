import Link from "next/link";

const learnSections = [
  {
    title: "Variables & values",
    items: [
      "Variables",
      "Constants",
      "Values",
      "Assignment",
      "Naming",
      "Primitive values",
      "References — conceptual"
    ]
  },
  {
    title: "Data types",
    items: [
      "Numbers",
      "Strings",
      "Booleans",
      "Null and undefined",
      "Arrays",
      "Objects",
      "Type conversion",
      "Type checking"
    ]
  },
  {
    title: "Operators & expressions",
    items: [
      "Arithmetic operators",
      "Comparison operators",
      "Logical operators",
      "Assignment operators",
      "Expressions",
      "Operator precedence",
      "Truthiness and falsiness"
    ]
  },
  {
    title: "Control flow",
    items: [
      "Conditional statements",
      "if / else",
      "switch",
      "Loops",
      "for loops",
      "while loops",
      "break and continue",
      "Nested control flow"
    ]
  },
  {
    title: "Functions",
    items: [
      "What functions are",
      "Defining functions",
      "Calling functions",
      "Parameters",
      "Arguments",
      "Return values",
      "Function composition",
      "Pure vs side-effecting functions — conceptual"
    ]
  },
  {
    title: "Scope",
    items: [
      "Global scope",
      "Local scope",
      "Block scope",
      "Variable lifetime",
      "Name collisions",
      "Closures — conceptual"
    ]
  },
  {
    title: "Collections & data",
    items: [
      "Arrays and lists",
      "Objects and maps",
      "Adding and removing data",
      "Reading and updating values",
      "Iterating over collections",
      "Transforming collections",
      "Choosing appropriate data structures"
    ]
  },
  {
    title: "Input & output",
    items: [
      "Program input",
      "Program output",
      "User input",
      "Reading files — basic",
      "Writing files — basic",
      "Standard input/output — conceptual"
    ]
  },
  {
    title: "Errors & exceptions",
    items: [
      "Syntax errors",
      "Runtime errors",
      "Logical errors",
      "Exceptions",
      "Throwing errors",
      "Handling errors",
      "Reading error messages"
    ]
  },
  {
    title: "Modules & program structure",
    items: [
      "Why programs are split into modules",
      "Importing code",
      "Exporting code",
      "Module boundaries",
      "Organizing files",
      "Separating responsibilities",
      "Entry points"
    ]
  }
];

const proofPoints = [
  "Write a small program using variables, values, and appropriate data types.",
  "Use conditional logic and loops to control program execution.",
  "Define and use functions with parameters and return values.",
  "Work with arrays and objects to store and manipulate collections of data.",
  "Explain the difference between global, local, and block scope.",
  "Read and respond to basic program errors using the error message and surrounding code.",
  "Split a small program into multiple modules with clear responsibilities.",
  "Build a small command-line program that accepts input, processes it, and produces useful output."
];

const connections = {
  Concepts: [
    "Variable",
    "Value",
    "Data Type",
    "Expression",
    "Operator",
    "Boolean Logic",
    "Control Flow",
    "Function",
    "Parameter",
    "Argument",
    "Return Value",
    "Scope",
    "Closure",
    "Array",
    "Object",
    "Collection",
    "Exception",
    "Module",
    "Program Structure"
  ],
  Skills: [
    "Programming",
    "Control Flow",
    "Function Design",
    "Data Manipulation",
    "Error Handling",
    "Code Organization"
  ],
  Technologies: [
    "Programming Languages",
    "Standard Library",
    "Module Systems"
  ]
};

export default function ProgrammingFundamentalsPage() {
  return (
    <main className="programming-page">
      <div className="programming-shell">
        <header className="programming-header">
          <div className="programming-breadcrumb">
            <Link href="/roadmaps">Roadmaps</Link>
            <span>/</span>
            <Link href="/roadmaps/coding-programming">
              Coding / Programming
            </Link>
            <span>/</span>
            <span>02</span>
          </div>

          <p className="programming-eyebrow">02 / Foundation</p>

          <h1>Programming Fundamentals</h1>

          <p className="programming-lead">
            Learn how programs represent data, make decisions, repeat work,
            organize logic, and respond to errors.
          </p>
        </header>

        <div className="programming-layout">
          <aside className="programming-sidebar">
            <p>On this page</p>

            <nav aria-label="Page sections">
              <a href="#learn">Learn</a>
              <a href="#practice">Practice</a>
              <a href="#prove">Prove</a>
              <a href="#connections">Connected</a>
            </nav>
          </aside>

          <article className="programming-content">
            <section className="programming-intro">
              <p className="section-kicker">Goal</p>

              <p className="intro-text">
                Develop the core programming knowledge needed to turn a
                problem into a working program, regardless of the language
                being used.
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
                  Build small programs repeatedly. Start with a simple
                  problem, model the required data, write the logic, run the
                  program, inspect the result, and change it when it fails.
                </p>

                <div className="practice-sequence">
                  <span>Problem</span>
                  <span>→</span>
                  <span>Data</span>
                  <span>→</span>
                  <span>Logic</span>
                  <span>→</span>
                  <span>Program</span>
                  <span>→</span>
                  <span>Result</span>
                  <span>→</span>
                  <span>Iteration</span>
                </div>
              </div>
            </section>

            <section id="prove" className="content-section proof-section">
              <div className="section-heading">
                <p className="section-kicker">03</p>
                <h2>Prove</h2>
              </div>

              <p className="section-description">
                Completion should demonstrate that the learner can construct
                and reason about small programs rather than simply recognize
                programming terminology.
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
                Programming fundamentals connect directly to language-specific
                features, deeper computer science concepts, and the practical
                skills used throughout software development.
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

            <footer className="programming-footer">
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
        .programming-page {
          min-height: 100vh;
          background: var(--background);
        }

        .programming-shell {
          width: min(1280px, calc(100% - 32px));
          margin: 0 auto;
          padding: 72px 0 120px;
        }

        .programming-header {
          max-width: 980px;
          padding-bottom: 80px;
          border-bottom: 1px solid var(--border);
        }

        .programming-breadcrumb {
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

        .programming-breadcrumb a {
          transition: color 150ms ease;
        }

        .programming-breadcrumb a:hover,
        .programming-breadcrumb a:focus-visible {
          color: var(--foreground);
        }

        .programming-eyebrow,
        .section-kicker {
          margin: 0 0 16px;
          color: var(--muted);
          font-family: monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .programming-header h1 {
          max-width: 900px;
          margin: 0;
          font-size: clamp(48px, 8vw, 88px);
          line-height: 0.95;
          letter-spacing: -0.065em;
        }

        .programming-lead {
          max-width: 680px;
          margin: 32px 0 0;
          color: var(--muted);
          font-size: 21px;
          line-height: 1.6;
        }

        .programming-layout {
          display: grid;
          grid-template-columns: 220px minmax(0, 760px);
          justify-content: space-between;
          gap: 64px;
          padding-top: 72px;
        }

        .programming-sidebar {
          position: sticky;
          top: 24px;
          align-self: start;
        }

        .programming-sidebar p {
          margin: 0 0 18px;
          color: var(--muted);
          font-family: monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .programming-sidebar nav {
          display: flex;
          flex-direction: column;
          border-left: 1px solid var(--border);
        }

        .programming-sidebar a {
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

        .programming-sidebar a:hover,
        .programming-sidebar a:focus-visible {
          color: var(--foreground);
          border-left-color: var(--foreground);
        }

        .programming-intro {
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

        .programming-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding-top: 32px;
          border-top: 1px solid var(--border);
        }

        .programming-footer a,
        .next-placeholder {
          color: var(--muted);
          font-size: 13px;
        }

        .programming-footer a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: color 150ms ease;
        }

        .programming-footer a:hover,
        .programming-footer a:focus-visible {
          color: var(--foreground);
        }

        .next-placeholder {
          font-family: monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        @media (max-width: 800px) {
          .programming-layout {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .programming-sidebar {
            position: static;
            margin-bottom: 64px;
          }
        }

        @media (max-width: 640px) {
          .programming-shell {
            width: min(100% - 24px, 1280px);
            padding: 48px 0 80px;
          }

          .programming-header {
            padding-bottom: 64px;
          }

          .programming-breadcrumb {
            margin-bottom: 42px;
          }

          .programming-header h1 {
            font-size: clamp(44px, 13vw, 64px);
          }

          .programming-lead {
            margin-top: 26px;
            font-size: 18px;
          }

          .programming-layout {
            padding-top: 48px;
          }

          .programming-intro {
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

          .programming-footer {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}