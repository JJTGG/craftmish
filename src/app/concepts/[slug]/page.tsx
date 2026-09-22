import Link from "next/link";
import { notFound } from "next/navigation";
import "./concept.css";

const concepts = {
  variables: {
    name: "Variables",
    description:
      "Named references used to store and work with values in a program.",
    about:
      "Variables give programs a way to keep track of information while they run. Understanding how values are created, accessed, changed, and scoped is fundamental to writing useful programs.",
    learn: [
      "Values and data",
      "Variable declarations",
      "Assignment",
      "Constants",
      "Primitive values",
      "References",
      "Scope"
    ],
    connected: ["JavaScript", "TypeScript", "Programming fundamentals"]
  },
  functions: {
    name: "Functions",
    description:
      "Reusable blocks of logic that receive inputs, perform work, and can return results.",
    about:
      "Functions let you organize behavior into reusable units. They are central to abstraction, composition, event handling, APIs, and most practical software systems.",
    learn: [
      "Function declarations",
      "Parameters and arguments",
      "Return values",
      "Function expressions",
      "Arrow functions",
      "Callbacks",
      "Higher-order functions"
    ],
    connected: ["JavaScript", "TypeScript", "Programming fundamentals"]
  },
  scope: {
    name: "Scope",
    description:
      "The rules that determine where variables and other identifiers can be accessed.",
    about:
      "Scope defines the visibility and lifetime of names in a program. Understanding scope helps explain how functions, blocks, modules, and closures interact.",
    learn: [
      "Global scope",
      "Function scope",
      "Block scope",
      "Lexical scope",
      "Nested scope",
      "Closures",
      "Modules"
    ],
    connected: ["JavaScript", "TypeScript", "Functions"]
  },
  objects: {
    name: "Objects",
    description:
      "Structured collections of related data and behavior represented through properties and methods.",
    about:
      "Objects provide a way to model structured data and behavior. They are a core abstraction used throughout JavaScript and many other programming environments.",
    learn: [
      "Properties",
      "Methods",
      "Object creation",
      "Property access",
      "Destructuring",
      "Object composition",
      "References"
    ],
    connected: ["JavaScript", "TypeScript", "Data structures"]
  },
  "asynchronous-programming": {
    name: "Asynchronous Programming",
    description:
      "Patterns for handling work that completes independently of the current execution flow.",
    about:
      "Asynchronous programming allows software to continue handling work while waiting for operations such as network requests, timers, or file access to complete.",
    learn: [
      "Synchronous vs asynchronous execution",
      "Callbacks",
      "Promises",
      "Async and await",
      "Error handling",
      "Concurrency",
      "Event loops"
    ],
    connected: ["JavaScript", "Promises", "HTTP", "Web APIs"]
  },
  http: {
    name: "HTTP",
    description:
      "The application-layer protocol used for communication between clients and servers on the web.",
    about:
      "HTTP defines how clients and servers exchange requests and responses. It is one of the fundamental protocols behind websites, APIs, and web applications.",
    learn: [
      "Requests and responses",
      "Methods",
      "Status codes",
      "Headers",
      "Bodies",
      "URLs",
      "HTTP caching"
    ],
    connected: ["Web", "APIs", "REST", "Next.js"]
  },
  apis: {
    name: "APIs",
    description:
      "Interfaces that allow software systems to communicate and exchange data or capabilities.",
    about:
      "An API defines how one piece of software can interact with another. APIs can expose data, operations, services, or capabilities through a defined interface.",
    learn: [
      "API concepts",
      "Endpoints",
      "Requests and responses",
      "Parameters",
      "Authentication",
      "Error handling",
      "API design"
    ],
    connected: ["HTTP", "Web", "Backend development", "Next.js"]
  },
  "version-control": {
    name: "Version Control",
    description:
      "A system for tracking changes to files and coordinating work across different versions.",
    about:
      "Version control records changes to a project over time, allowing developers to inspect history, experiment safely, collaborate, and recover previous states.",
    learn: [
      "Repositories",
      "Commits",
      "Branches",
      "Merging",
      "Remotes",
      "Pull requests",
      "Collaboration workflows"
    ],
    connected: ["Git", "GitHub", "Open source", "Software development"]
  }
} as const;

type ConceptSlug = keyof typeof concepts;

function isConceptSlug(slug: string): slug is ConceptSlug {
  return slug in concepts;
}

export function generateStaticParams() {
  return Object.keys(concepts).map((slug) => ({
    slug
  }));
}

export default async function ConceptPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isConceptSlug(slug)) {
    notFound();
  }

  const concept = concepts[slug];

  return (
    <main className="concept-page">
      <div className="concept-shell">
        <header className="concept-header">
          <div className="concept-breadcrumb">
            <Link href="/concepts">Concepts</Link>
            <span>/</span>
            <span>{concept.name}</span>
          </div>

          <p className="concept-eyebrow">Concept</p>

          <h1>{concept.name}</h1>

          <p className="concept-lead">{concept.description}</p>
        </header>

        <section className="concept-section" aria-labelledby="about">
          <div className="concept-section-heading">
            <p className="concept-eyebrow">About</p>
            <h2 id="about">Understand the idea.</h2>
          </div>

          <div className="concept-content-block">
            <p>{concept.about}</p>
          </div>
        </section>

        <section className="concept-section" aria-labelledby="learn">
          <div className="concept-section-heading">
            <p className="concept-eyebrow">Learn</p>
            <h2 id="learn">Build the foundation.</h2>
          </div>

          <ol className="concept-list">
            {concept.learn.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ol>
        </section>

        <section className="concept-section" aria-labelledby="practice">
          <div className="concept-section-heading">
            <p className="concept-eyebrow">Practice</p>
            <h2 id="practice">Turn knowledge into ability.</h2>
          </div>

          <div className="concept-placeholder">
            <p>Challenges connected to {concept.name} will live here.</p>
            <Link href="/challenges">Explore challenges →</Link>
          </div>
        </section>

        <section className="concept-section" aria-labelledby="build">
          <div className="concept-section-heading">
            <p className="concept-eyebrow">Build</p>
            <h2 id="build">Use it on something real.</h2>
          </div>

          <div className="concept-placeholder">
            <p>Projects connected to {concept.name} will live here.</p>
            <Link href="/projects">Explore projects →</Link>
          </div>
        </section>

        <section className="concept-section" aria-labelledby="prove">
          <div className="concept-section-heading">
            <p className="concept-eyebrow">Prove</p>
            <h2 id="prove">Demonstrate what you can do.</h2>
          </div>

          <div className="concept-placeholder">
            <p>Completion tasks for {concept.name} will live here.</p>
          </div>
        </section>

        <section className="concept-section" aria-labelledby="connected">
          <div className="concept-section-heading">
            <p className="concept-eyebrow">Connected</p>
            <h2 id="connected">Follow the relationships.</h2>
          </div>

          <div className="concept-connected">
            {concept.connected.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}