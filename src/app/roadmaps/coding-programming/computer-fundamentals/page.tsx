import Link from "next/link";

const learnSections = [
  {
    title: "Information & representation",
    items: [
      "How computers represent information",
      "Bits and bytes",
      "Binary",
      "Numbers and numeric representation",
      "Text representation",
      "Character encoding",
      "Files and file sizes",
      "Data representation"
    ]
  },
  {
    title: "Computer hardware",
    items: [
      "CPU",
      "RAM",
      "Storage",
      "Input/output devices",
      "Motherboard and buses — conceptual",
      "GPU — basic purpose",
      "Peripherals"
    ]
  },
  {
    title: "Operating systems",
    items: [
      "What an operating system does",
      "Processes",
      "Files and directories",
      "Permissions",
      "Memory management — conceptual",
      "Applications vs system software",
      "Environment variables",
      "Programs vs processes"
    ]
  },
  {
    title: "Command line",
    items: [
      "Terminal and shell",
      "Directory navigation",
      "Creating, moving, copying, and deleting files",
      "Reading files",
      "Running programs",
      "Command arguments",
      "Pipes and redirection",
      "Environment variables",
      "Basic shell scripting"
    ]
  },
  {
    title: "Networking fundamentals",
    items: [
      "Networks",
      "Client/server model",
      "IP addresses",
      "Ports",
      "DNS",
      "HTTP/HTTPS",
      "TCP/IP — conceptual",
      "Localhost",
      "Internet vs Web"
    ]
  }
];

const proofPoints = [
  "Explain how computers represent numbers and text.",
  "Explain the roles of CPU, RAM, storage, and the operating system.",
  "Navigate and manipulate files using a terminal.",
  "Run a program from the terminal.",
  "Explain environment variables at a basic level.",
  "Explain, at a high level, how a browser reaches a website."
];

const connections = {
  Concepts: [
    "Bit",
    "Byte",
    "Binary",
    "Data Representation",
    "Character Encoding",
    "CPU",
    "RAM",
    "Storage",
    "Operating System",
    "Process",
    "File System",
    "File Permissions",
    "Environment Variables",
    "Client–Server Model",
    "IP Address",
    "Port",
    "DNS",
    "HTTP",
    "HTTPS",
    "TCP/IP",
    "Localhost"
  ],
  Skills: [
    "Command Line",
    "File Navigation"
  ],
  Technologies: [
    "Operating Systems",
    "Shells"
  ]
};

export default function ComputerFundamentalsPage() {
  return (
    <main className="fundamentals-page">
      <div className="fundamentals-shell">
        <header className="fundamentals-header">
          <div className="fundamentals-breadcrumb">
            <Link href="/roadmaps">Roadmaps</Link>
            <span>/</span>
            <Link href="/roadmaps/coding-programming">
              Coding / Programming
            </Link>
            <span>/</span>
            <span>01</span>
          </div>

          <p className="fundamentals-eyebrow">01 / Foundation</p>

          <h1>Computer Fundamentals</h1>

          <p className="fundamentals-lead">
            Understand the computer and operating environment that software
            runs on.
          </p>
        </header>

        <div className="fundamentals-layout">
          <aside className="fundamentals-sidebar">
            <p>On this page</p>

            <nav aria-label="Page sections">
              <a href="#learn">Learn</a>
              <a href="#practice">Practice</a>
              <a href="#prove">Prove</a>
              <a href="#connections">Connected</a>
            </nav>
          </aside>

          <article className="fundamentals-content">
            <section className="fundamentals-intro">
              <p className="section-kicker">Goal</p>

              <p className="intro-text">
                Build enough understanding of computers and operating
                environments to reason about what your programs are actually
                running on.
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

            <section id="practice" className="content-section practice-section">
              <div className="section-heading">
                <p className="section-kicker">02</p>
                <h2>Practice</h2>
              </div>

              <div className="practice-block">
                <p>
                  Operate a development environment from the terminal and
                  investigate how a program interacts with the operating system
                  and network.
                </p>

                <div className="practice-sequence">
                  <span>Environment</span>
                  <span>→</span>
                  <span>Terminal</span>
                  <span>→</span>
                  <span>Program</span>
                  <span>→</span>
                  <span>Operating system</span>
                  <span>→</span>
                  <span>Network</span>
                </div>
              </div>
            </section>

            <section id="prove" className="content-section proof-section">
              <div className="section-heading">
                <p className="section-kicker">03</p>
                <h2>Prove</h2>
              </div>

              <p className="section-description">
                Completion should demonstrate understanding, not just
                exposure to the topics.
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

            <section id="connections" className="content-section connections-section">
              <div className="section-heading">
                <p className="section-kicker">04</p>
                <h2>Connected</h2>
              </div>

              <p className="section-description">
                This section is part of a larger Craftmish knowledge graph.
                These concepts, skills, and technologies can become
                independently explored content.
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

            <footer className="fundamentals-footer">
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
        .fundamentals-page {
          min-height: 100vh;
          background: var(--background);
        }

        .fundamentals-shell {
          width: min(1280px, calc(100% - 32px));
          margin: 0 auto;
          padding: 72px 0 120px;
        }

        .fundamentals-header {
          max-width: 980px;
          padding-bottom: 80px;
          border-bottom: 1px solid var(--border);
        }

        .fundamentals-breadcrumb {
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

        .fundamentals-breadcrumb a {
          transition: color 150ms ease;
        }

        .fundamentals-breadcrumb a:hover,
        .fundamentals-breadcrumb a:focus-visible {
          color: var(--foreground);
        }

        .fundamentals-eyebrow,
        .section-kicker {
          margin: 0 0 16px;
          color: var(--muted);
          font-family: monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .fundamentals-header h1 {
          max-width: 900px;
          margin: 0;
          font-size: clamp(48px, 8vw, 88px);
          line-height: 0.95;
          letter-spacing: -0.065em;
        }

        .fundamentals-lead {
          max-width: 680px;
          margin: 32px 0 0;
          color: var(--muted);
          font-size: 21px;
          line-height: 1.6;
        }

        .fundamentals-layout {
          display: grid;
          grid-template-columns: 220px minmax(0, 760px);
          justify-content: space-between;
          gap: 64px;
          padding-top: 72px;
        }

        .fundamentals-sidebar {
          position: sticky;
          top: 24px;
          align-self: start;
        }

        .fundamentals-sidebar p {
          margin: 0 0 18px;
          color: var(--muted);
          font-family: monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .fundamentals-sidebar nav {
          display: flex;
          flex-direction: column;
          border-left: 1px solid var(--border);
        }

        .fundamentals-sidebar a {
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

        .fundamentals-sidebar a:hover,
        .fundamentals-sidebar a:focus-visible {
          color: var(--foreground);
          border-left-color: var(--foreground);
        }

        .fundamentals-intro {
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

        .fundamentals-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding-top: 32px;
          border-top: 1px solid var(--border);
        }

        .fundamentals-footer a,
        .next-placeholder {
          color: var(--muted);
          font-size: 13px;
        }

        .fundamentals-footer a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: color 150ms ease;
        }

        .fundamentals-footer a:hover,
        .fundamentals-footer a:focus-visible {
          color: var(--foreground);
        }

        .next-placeholder {
          font-family: monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        @media (max-width: 800px) {
          .fundamentals-layout {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .fundamentals-sidebar {
            position: static;
            margin-bottom: 64px;
          }
        }

        @media (max-width: 640px) {
          .fundamentals-shell {
            width: min(100% - 24px, 1280px);
            padding: 48px 0 80px;
          }

          .fundamentals-header {
            padding-bottom: 64px;
          }

          .fundamentals-breadcrumb {
            margin-bottom: 42px;
          }

          .fundamentals-header h1 {
            font-size: clamp(44px, 13vw, 64px);
          }

          .fundamentals-lead {
            margin-top: 26px;
            font-size: 18px;
          }

          .fundamentals-layout {
            padding-top: 48px;
          }

          .fundamentals-intro {
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

          .fundamentals-footer {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}