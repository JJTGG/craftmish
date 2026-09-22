import Link from "next/link";

const technologies = [
  {
    name: "JavaScript",
    type: "Language",
    description:
      "A programming language widely used for interactive web applications and server-side development.",
    slug: "javascript"
  },
  {
    name: "TypeScript",
    type: "Language",
    description:
      "A typed superset of JavaScript that adds static type checking and stronger tooling.",
    slug: "typescript"
  },
  {
    name: "React",
    type: "Library",
    description:
      "A library for building user interfaces from reusable components.",
    slug: "react"
  },
  {
    name: "Next.js",
    type: "Framework",
    description:
      "A React framework for building full-stack web applications.",
    slug: "nextjs"
  },
  {
    name: "Node.js",
    type: "Runtime",
    description:
      "A JavaScript runtime for executing JavaScript outside the browser.",
    slug: "nodejs"
  },
  {
    name: "PostgreSQL",
    type: "Database",
    description:
      "An open-source relational database system designed for reliability and extensibility.",
    slug: "postgresql"
  },
  {
    name: "Git",
    type: "Tool",
    description:
      "A distributed version control system for tracking changes and collaborating on software.",
    slug: "git"
  },
  {
    name: "Docker",
    type: "Platform",
    description:
      "A platform for packaging and running applications in isolated containers.",
    slug: "docker"
  }
];

export default function TechnologiesPage() {
  return (
    <main className="technologies-page">
      <div className="technologies-shell">
        <header className="technologies-header">
          <div className="technologies-breadcrumb">
            <Link href="/explore">Explore</Link>
            <span>/</span>
            <span>Technologies</span>
          </div>

          <p className="technologies-eyebrow">Knowledge</p>

          <h1>Technologies</h1>

          <p className="technologies-lead">
            Languages, frameworks, libraries, runtimes, tools, databases,
            platforms, and other technologies you can learn and build with.
          </p>
        </header>

        <section className="technologies-section" aria-labelledby="technology-list">
          <div className="section-heading">
            <p className="technologies-eyebrow">Browse</p>
            <h2 id="technology-list">Start with a technology.</h2>
          </div>

          <div className="technology-list">
            {technologies.map((technology, index) => (
              <Link
                className="technology-item"
                href={`/technologies/${technology.slug}`}
                key={technology.slug}
              >
                <span className="technology-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="technology-content">
                  <div className="technology-meta">
                    <span>{technology.type}</span>
                  </div>

                  <h3>{technology.name}</h3>

                  <p>{technology.description}</p>
                </div>

                <span className="technology-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .technologies-page {
          min-height: 100vh;
          background: var(--background);
        }

        .technologies-shell {
          width: min(1100px, calc(100% - 32px));
          margin: 0 auto;
          padding: 72px 0 120px;
        }

        .technologies-header {
          max-width: 820px;
          padding-bottom: 80px;
          border-bottom: 1px solid var(--border);
        }

        .technologies-breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 56px;
          color: var(--muted);
          font-family: monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .technologies-breadcrumb a {
          transition: color 150ms ease;
        }

        .technologies-breadcrumb a:hover,
        .technologies-breadcrumb a:focus-visible {
          color: var(--foreground);
        }

        .technologies-eyebrow {
          margin: 0 0 14px;
          color: var(--muted);
          font-family: monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .technologies-header h1 {
          margin: 0;
          font-size: clamp(52px, 8vw, 88px);
          line-height: 0.95;
          letter-spacing: -0.065em;
        }

        .technologies-lead {
          max-width: 700px;
          margin: 30px 0 0;
          color: var(--muted);
          font-size: 19px;
          line-height: 1.65;
        }

        .technologies-section {
          padding-top: 72px;
        }

        .section-heading {
          margin-bottom: 28px;
        }

        .section-heading h2 {
          margin: 0;
          font-size: clamp(30px, 5vw, 42px);
          line-height: 1;
          letter-spacing: -0.045em;
        }

        .technology-list {
          border-top: 1px solid var(--border);
        }

        .technology-item {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr) auto;
          align-items: start;
          gap: 24px;
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
          transition:
            padding 150ms ease,
            background-color 150ms ease;
        }

        .technology-item:hover,
        .technology-item:focus-visible {
          padding-left: 10px;
          padding-right: 10px;
          background: var(--surface);
        }

        .technology-index {
          padding-top: 4px;
          color: var(--muted);
          font-family: monospace;
          font-size: 12px;
        }

        .technology-meta {
          margin-bottom: 8px;
          color: var(--muted);
          font-family: monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .technology-content h3 {
          margin: 0;
          font-size: 26px;
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .technology-content p {
          max-width: 680px;
          margin: 10px 0 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.6;
        }

        .technology-arrow {
          padding-top: 2px;
          font-size: 21px;
          transition: transform 150ms ease;
        }

        .technology-item:hover .technology-arrow,
        .technology-item:focus-visible .technology-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 640px) {
          .technologies-shell {
            width: min(100% - 24px, 1100px);
            padding: 48px 0 80px;
          }

          .technologies-header {
            padding-bottom: 64px;
          }

          .technologies-breadcrumb {
            margin-bottom: 42px;
          }

          .technologies-header h1 {
            font-size: clamp(46px, 14vw, 68px);
          }

          .technologies-lead {
            margin-top: 24px;
            font-size: 17px;
          }

          .technologies-section {
            padding-top: 56px;
          }

          .technology-item {
            grid-template-columns: 34px minmax(0, 1fr) auto;
            gap: 14px;
            padding: 22px 0;
          }

          .technology-item:hover,
          .technology-item:focus-visible {
            padding-left: 4px;
            padding-right: 4px;
          }

          .technology-content h3 {
            font-size: 23px;
          }
        }
      `}</style>
    </main>
  );
}