import Link from "next/link";
import "./concepts.css";

const concepts = [
  {
    name: "Variables",
    description:
      "Named references used to store and work with values in a program.",
    slug: "variables"
  },
  {
    name: "Functions",
    description:
      "Reusable blocks of logic that receive inputs, perform work, and can return results.",
    slug: "functions"
  },
  {
    name: "Scope",
    description:
      "The rules that determine where variables and other identifiers can be accessed.",
    slug: "scope"
  },
  {
    name: "Objects",
    description:
      "Structured collections of related data and behavior represented through properties and methods.",
    slug: "objects"
  },
  {
    name: "Asynchronous Programming",
    description:
      "Patterns for handling work that completes independently of the current execution flow.",
    slug: "asynchronous-programming"
  },
  {
    name: "HTTP",
    description:
      "The application-layer protocol used for communication between clients and servers on the web.",
    slug: "http"
  },
  {
    name: "APIs",
    description:
      "Interfaces that allow software systems to communicate and exchange data or capabilities.",
    slug: "apis"
  },
  {
    name: "Version Control",
    description:
      "A system for tracking changes to files and coordinating work across different versions.",
    slug: "version-control"
  }
];

export default function ConceptsPage() {
  return (
    <main className="concepts-page">
      <div className="concepts-shell">
        <header className="concepts-header">
          <div className="concepts-breadcrumb">
            <Link href="/explore">Explore</Link>
            <span>/</span>
            <span>Concepts</span>
          </div>

          <p className="concepts-eyebrow">Knowledge</p>

          <h1>Concepts</h1>

          <p className="concepts-lead">
            Fundamental ideas that connect technologies, skills, and the work
            you do with them.
          </p>
        </header>

        <section
          className="concepts-section"
          aria-labelledby="concept-list-heading"
        >
          <div className="concepts-section-heading">
            <p className="concepts-eyebrow">Browse</p>
            <h2 id="concept-list-heading">Start with a concept.</h2>
          </div>

          <div className="concept-list">
            {concepts.map((concept, index) => (
              <Link
                className="concept-item"
                href={`/concepts/${concept.slug}`}
                key={concept.slug}
              >
                <span className="concept-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="concept-content">
                  <h3>{concept.name}</h3>

                  <p>{concept.description}</p>
                </div>

                <span className="concept-arrow" aria-hidden="true">
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