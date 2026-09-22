import Link from "next/link";

const specializations = [
  {
    title: "Web Development",
    description:
      "Build websites and web applications, from browser fundamentals to full-stack systems.",
    path: "HTML · CSS · JavaScript · TypeScript · React · Next.js · APIs · Databases"
  },
  {
    title: "Backend Development",
    description:
      "Build server-side systems, APIs, services, data layers, and application infrastructure.",
    path: "HTTP · APIs · Servers · Databases · Authentication · Testing · Deployment"
  },
  {
    title: "Mobile Development",
    description:
      "Build applications for mobile devices and learn the platforms, interfaces, and constraints involved.",
    path: "Mobile UI · Platform APIs · State · Networking · Storage · Testing · Distribution"
  },
  {
    title: "Data & Analytics",
    description:
      "Work with data to transform, analyze, visualize, and communicate information.",
    path: "Python · SQL · Statistics · Data analysis · Visualization · Data pipelines"
  },
  {
    title: "AI & Machine Learning",
    description:
      "Build systems that use data and models to make predictions, generate outputs, or automate decisions.",
    path: "Python · Mathematics · Statistics · ML concepts · Models · Evaluation · Deployment"
  },
  {
    title: "Systems & Infrastructure",
    description:
      "Understand and build the systems software runs on, from operating systems to networks and infrastructure.",
    path: "Operating systems · Networking · Processes · Containers · Cloud · Automation"
  },
  {
    title: "Game Development",
    description:
      "Build interactive games and real-time experiences while learning game-specific programming concepts.",
    path: "Game loops · Input · Physics · Rendering · State · Audio · Game engines"
  },
  {
    title: "Security",
    description:
      "Learn how software and systems fail from a security perspective and how to design them more safely.",
    path: "Web security · Networks · Cryptography · Threat modeling · Secure development"
  },
  {
    title: "Embedded & Hardware",
    description:
      "Write software that interacts directly with physical devices, sensors, and constrained hardware.",
    path: "C/C++ · Microcontrollers · Electronics · Memory · Sensors · Communication"
  }
];

const decisionPoints = [
  "What kind of things do you want to build?",
  "Where do you want your code to run?",
  "What problems do you enjoy solving?",
  "Do you prefer interfaces, systems, data, hardware, or infrastructure?",
  "What kind of work would you like to become capable of doing?",
  "Which specialization gives you a useful project you actually want to build?"
];

const nextSteps = [
  "Choose one direction rather than trying to master every specialization at once.",
  "Identify the technologies and concepts required by that direction.",
  "Build a small project using the new knowledge.",
  "Return to the foundation whenever a gap becomes obvious.",
  "Add related skills as your projects demand them.",
  "Use real projects to decide whether the specialization is actually a good fit."
];

export default function SpecializationPage() {
  return (
    <main className="roadmap-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/roadmaps">Roadmaps</Link>
        <span aria-hidden="true">/</span>
        <Link href="/roadmaps/coding-programming">
          Coding / Programming
        </Link>
        <span aria-hidden="true">/</span>
        <span>Choose a Specialization</span>
      </nav>

      <header className="roadmap-header">
        <p className="eyebrow">08 / 08</p>

        <h1>Choose a Specialization</h1>

        <p className="roadmap-summary">
          Use your programming foundation to choose a direction, then learn
          the technologies and skills required to build real things in it.
        </p>
      </header>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Goal</p>
          <h2>Stop learning programming in the abstract.</h2>
        </div>

        <p className="section-copy">
          Programming is a foundation, not a destination. At this point you
          should start using that foundation to solve problems in a specific
          area. You do not need to choose a specialization permanently.
          Choose a direction, build in it, discover what you are missing, and
          let your projects shape what you learn next.
        </p>
      </section>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Directions</p>
          <h2>Different problems lead to different paths.</h2>
        </div>

        <div className="specialization-list">
          {specializations.map((specialization, index) => (
            <article
              className="specialization-item"
              key={specialization.title}
            >
              <div className="specialization-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="specialization-content">
                <h3>{specialization.title}</h3>

                <p>{specialization.description}</p>

                <span>{specialization.path}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Choose</p>
          <h2>Start with the problem, not the technology.</h2>
        </div>

        <ul className="action-list">
          {decisionPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Next</p>
          <h2>Learn through building.</h2>
        </div>

        <p className="section-copy">
          Once you have chosen a direction, the roadmap stops being a single
          linear path. Follow the technologies, concepts, projects, and
          challenges connected to your chosen specialization.
        </p>

        <ul className="action-list">
          {nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Prove</p>
          <h2>Build something that makes the choice meaningful.</h2>
        </div>

        <p className="section-copy">
          Your next milestone is not completing another list of technologies.
          Build a real project in your chosen direction. It should require you
          to make decisions, solve problems, debug failures, use documentation,
          and produce something that can be demonstrated to another person.
        </p>
      </section>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Connected</p>
          <h2>The foundation becomes a network.</h2>
        </div>

        <div className="connection-list">
          <div>
            <span className="connection-label">Concepts</span>
            <p>
              Architecture · Abstraction · State · Data · Networking ·
              Reliability · Security
            </p>
          </div>

          <div>
            <span className="connection-label">Skills</span>
            <p>
              Building · Debugging · Testing · Research · Documentation ·
              System design · Problem solving
            </p>
          </div>

          <div>
            <span className="connection-label">Next</span>
            <p>
              Technologies · Projects · Challenges · Resources · Open source ·
              Deeper specializations
            </p>
          </div>
        </div>
      </section>

      <nav className="roadmap-navigation" aria-label="Roadmap navigation">
        <Link href="/roadmaps/coding-programming/debugging-testing">
          ← Previous section
        </Link>

        <Link href="/roadmaps/coding-programming">
          Back to roadmap →
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

        .specialization-list {
          display: grid;
          gap: 0;
          border-top: 1px solid var(--border);
        }

        .specialization-item {
          display: grid;
          grid-template-columns: 56px minmax(0, 1fr);
          gap: 24px;
          padding: 30px 0;
          border-bottom: 1px solid var(--border);
        }

        .specialization-index {
          padding-top: 3px;
          color: var(--muted);
          font-size: 13px;
          font-variant-numeric: tabular-nums;
        }

        .specialization-content h3 {
          margin: 0 0 10px;
          font-size: 21px;
          line-height: 1.25;
          letter-spacing: -0.025em;
        }

        .specialization-content p {
          max-width: 680px;
          margin: 0 0 12px;
          color: var(--muted);
          line-height: 1.65;
        }

        .specialization-content span {
          display: block;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.6;
        }

        .action-list {
          max-width: 720px;
          margin: 0;
          padding-left: 20px;
        }

        .action-list li {
          margin: 10px 0;
          color: var(--muted);
          line-height: 1.7;
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

          .specialization-item {
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