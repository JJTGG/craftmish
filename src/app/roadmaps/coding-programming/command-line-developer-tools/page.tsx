import Link from "next/link";

const learnGroups = [
  {
    title: "Terminal & shell fundamentals",
    topics: [
      "What a terminal is",
      "What a shell is",
      "Commands, arguments, and options",
      "Command history",
      "Autocomplete",
      "Manual pages and built-in help"
    ]
  },
  {
    title: "Navigation & filesystem operations",
    topics: [
      "Working directories",
      "Absolute and relative paths",
      "Listing directories",
      "Creating and removing files and directories",
      "Copying and moving files",
      "File permissions",
      "Hidden files"
    ]
  },
  {
    title: "Files & text manipulation",
    topics: [
      "Viewing file contents",
      "Searching files",
      "Finding files",
      "Editing files from the terminal",
      "Basic text processing",
      "Working with structured text",
      "Understanding standard input and output"
    ]
  },
  {
    title: "Processes",
    topics: [
      "What a process is",
      "Starting and stopping processes",
      "Foreground and background processes",
      "Process inspection",
      "Exit codes",
      "Signals",
      "Managing long-running commands"
    ]
  },
  {
    title: "Environment variables",
    topics: [
      "What environment variables are",
      "Reading environment variables",
      "Setting variables",
      "PATH",
      "Configuration through environment variables",
      "Environment-specific configuration"
    ]
  },
  {
    title: "Pipes & redirection",
    topics: [
      "Standard input",
      "Standard output",
      "Standard error",
      "Output redirection",
      "Input redirection",
      "Pipelines",
      "Combining commands"
    ]
  },
  {
    title: "Package managers",
    topics: [
      "Why package managers exist",
      "Installing packages",
      "Removing packages",
      "Updating dependencies",
      "Lockfiles",
      "Dependency versions",
      "Global vs local packages"
    ]
  },
  {
    title: "Development runtimes",
    topics: [
      "What a runtime is",
      "Installing a runtime",
      "Runtime versions",
      "Version managers",
      "Running programs",
      "Runtime configuration"
    ]
  },
  {
    title: "Editors & IDEs",
    topics: [
      "Text editors vs IDEs",
      "Project/workspace concepts",
      "Extensions",
      "Formatting",
      "Code navigation",
      "Integrated terminals",
      "Editor configuration"
    ]
  },
  {
    title: "Developer tooling",
    topics: [
      "Linters",
      "Formatters",
      "Build tools",
      "Task runners",
      "Development servers",
      "Environment configuration",
      "Reading tool output"
    ]
  },
  {
    title: "Shell scripting",
    topics: [
      "Why automate repetitive commands",
      "Variables",
      "Arguments",
      "Conditions",
      "Loops",
      "Exit codes",
      "Small development scripts"
    ]
  }
];

const practice = [
  "Navigate a project entirely from the terminal.",
  "Create, move, copy, rename, and remove files and directories from the command line.",
  "Search a project for a specific piece of text.",
  "Chain multiple commands together with pipes and redirection.",
  "Inspect a running process and safely stop it.",
  "Create and use environment variables.",
  "Install and remove a package using a package manager.",
  "Run a project through its development runtime and inspect the output.",
  "Create a small shell script that automates a repetitive development task."
];

const prove = [
  "Set up a development environment from the command line.",
  "Create a project directory and organize its files without relying on a graphical file manager.",
  "Install the project's dependencies and run it.",
  "Use environment variables for configuration.",
  "Diagnose a failed command using its output and exit status.",
  "Write one small script that automates part of the setup or development workflow."
];

export default function CommandLineDeveloperToolsPage() {
  return (
    <main className="roadmap-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/roadmaps">Roadmaps</Link>
        <span aria-hidden="true">/</span>
        <Link href="/roadmaps/coding-programming">
          Coding / Programming
        </Link>
        <span aria-hidden="true">/</span>
        <span>Command Line &amp; Developer Tools</span>
      </nav>

      <header className="roadmap-header">
        <p className="eyebrow">04 / 08</p>

        <h1>Command Line &amp; Developer Tools</h1>

        <p className="roadmap-summary">
          Learn to work with the command line and the tools that make
          software development practical, repeatable, and efficient.
        </p>
      </header>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Goal</p>
          <h2>Become comfortable working with your development environment.</h2>
        </div>

        <p className="section-copy">
          The command line is more than a way to run commands. It gives you
          direct control over files, processes, runtimes, packages, scripts,
          and development tools. The goal is to understand what these tools
          are doing and become capable of using them without depending on a
          graphical interface for every task.
        </p>
      </section>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Learn</p>
          <h2>Command line and development workflow.</h2>
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
          <h2>Use the tools instead of only reading about them.</h2>
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
          <h2>Set up and operate a small development environment.</h2>
        </div>

        <p className="section-copy">
          Complete a small setup task that demonstrates you can work with the
          command line, install dependencies, configure an environment, run
          software, inspect failures, and automate at least one repetitive
          action.
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
            <p>Processes · Filesystems · Permissions · Environments</p>
          </div>

          <div>
            <span className="connection-label">Skills</span>
            <p>
              CLI usage · Environment setup · Dependency management ·
              Automation
            </p>
          </div>

          <div>
            <span className="connection-label">Technologies</span>
            <p>
              Linux · Bash · PowerShell · Node.js · npm · Git · VS Code
            </p>
          </div>
        </div>
      </section>

      <nav className="roadmap-navigation" aria-label="Roadmap navigation">
        <Link href="/roadmaps/coding-programming/problem-solving">
          ← Previous section
        </Link>

        <Link href="/roadmaps/coding-programming/git-github">
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