import Link from "next/link";
import "./technologies.css";

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

        <section
          className="technologies-section"
          aria-labelledby="technology-list"
        >
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
    </main>
  );
}