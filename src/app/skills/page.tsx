import Link from "next/link";
import "./skills.css";

const skills = [
  {
    name: "Problem Solving",
    description:
      "The ability to understand problems, break them down, reason about possible solutions, and implement a workable approach.",
    slug: "problem-solving"
  },
  {
    name: "Programming",
    description:
      "The ability to express logic in code, work with data, control program behavior, and build software that solves real problems.",
    slug: "programming"
  },
  {
    name: "Web Development",
    description:
      "The ability to build applications for the web by working across interfaces, browsers, servers, APIs, and related technologies.",
    slug: "web-development"
  },
  {
    name: "Debugging",
    description:
      "The ability to investigate unexpected behavior, identify causes, and make targeted changes that restore correct behavior.",
    slug: "debugging"
  },
  {
    name: "Testing",
    description:
      "The ability to verify software behavior systematically and use tests to catch regressions and improve confidence in changes.",
    slug: "testing"
  },
  {
    name: "Version Control",
    description:
      "The ability to track changes, manage branches, collaborate safely, and maintain a useful history of a software project.",
    slug: "version-control"
  },
  {
    name: "API Integration",
    description:
      "The ability to understand external interfaces, make requests, handle responses, and connect software systems together.",
    slug: "api-integration"
  },
  {
    name: "Software Architecture",
    description:
      "The ability to structure software into understandable, maintainable parts and make deliberate decisions about how those parts interact.",
    slug: "software-architecture"
  }
];

export default function SkillsPage() {
  return (
    <main className="skills-page">
      <div className="skills-shell">
        <header className="skills-header">
          <div className="skills-breadcrumb">
            <Link href="/explore">Explore</Link>
            <span>/</span>
            <span>Skills</span>
          </div>

          <p className="skills-eyebrow">Knowledge</p>

          <h1>Skills</h1>

          <p className="skills-lead">
            Capabilities you develop by understanding concepts, working with
            technologies, practicing deliberately, and building real things.
          </p>
        </header>

        <section
          className="skills-section"
          aria-labelledby="skill-list-heading"
        >
          <div className="skills-section-heading">
            <p className="skills-eyebrow">Browse</p>
            <h2 id="skill-list-heading">Build a capability.</h2>
          </div>

          <div className="skill-list">
            {skills.map((skill, index) => (
              <Link
                className="skill-item"
                href={`/skills/${skill.slug}`}
                key={skill.slug}
              >
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="skill-content">
                  <h3>{skill.name}</h3>

                  <p>{skill.description}</p>
                </div>

                <span className="skill-arrow" aria-hidden="true">
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