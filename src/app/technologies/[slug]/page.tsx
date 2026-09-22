import Link from "next/link";
import { notFound } from "next/navigation";
import "./technology.css";

const technologies = {
  javascript: {
    name: "JavaScript",
    type: "Language",
    description:
      "A programming language used to build interactive web applications and software across browsers, servers, and other environments.",
    prerequisites: ["HTML", "CSS", "Programming fundamentals"],
    learn: [
      "Variables and values",
      "Functions",
      "Scope",
      "Objects",
      "Arrays",
      "DOM",
      "Events",
      "Asynchronous JavaScript"
    ],
    connected: ["TypeScript", "React", "Node.js", "Web APIs"]
  },
  typescript: {
    name: "TypeScript",
    type: "Language",
    description:
      "A programming language that extends JavaScript with static types and tooling for developing larger and more maintainable applications.",
    prerequisites: ["JavaScript", "Programming fundamentals"],
    learn: [
      "Type annotations",
      "Primitive types",
      "Objects and interfaces",
      "Functions",
      "Generics",
      "Unions and intersections",
      "Type narrowing",
      "Modules"
    ],
    connected: ["JavaScript", "React", "Next.js", "Node.js"]
  },
  react: {
    name: "React",
    type: "Library",
    description:
      "A library for building user interfaces from reusable components and declarative application state.",
    prerequisites: ["JavaScript", "HTML", "CSS"],
    learn: [
      "Components",
      "JSX",
      "Props",
      "State",
      "Events",
      "Conditional rendering",
      "Lists",
      "Effects"
    ],
    connected: ["JavaScript", "TypeScript", "Next.js", "Web APIs"]
  }
} as const;

type TechnologySlug = keyof typeof technologies;

function isTechnologySlug(slug: string): slug is TechnologySlug {
  return slug in technologies;
}

export function generateStaticParams() {
  return Object.keys(technologies).map((slug) => ({
    slug
  }));
}

export default async function TechnologyPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isTechnologySlug(slug)) {
    notFound();
  }

  const technology = technologies[slug];

  return (
    <main className="technology-page">
      <div className="technology-shell">
        <header className="technology-header">
          <div className="technology-breadcrumb">
            <Link href="/technologies">Technologies</Link>
            <span>/</span>
            <span>{technology.name}</span>
          </div>

          <p className="technology-eyebrow">{technology.type}</p>

          <h1>{technology.name}</h1>

          <p className="technology-lead">{technology.description}</p>
        </header>

        <section className="technology-section" aria-labelledby="prerequisites">
          <div className="section-heading">
            <p className="technology-eyebrow">Start here</p>
            <h2 id="prerequisites">Prerequisites</h2>
          </div>

          <div className="technology-tags">
            {technology.prerequisites.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="technology-section" aria-labelledby="learn">
          <div className="section-heading">
            <p className="technology-eyebrow">Learn</p>
            <h2 id="learn">Build the foundation.</h2>
          </div>

          <ol className="technology-list">
            {technology.learn.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ol>
        </section>

        <section className="technology-section" aria-labelledby="practice">
          <div className="section-heading">
            <p className="technology-eyebrow">Practice</p>
            <h2 id="practice">Turn knowledge into ability.</h2>
          </div>

          <div className="technology-placeholder">
            <p>
              Challenges connected to {technology.name} will live here.
            </p>
            <Link href="/challenges">Explore challenges →</Link>
          </div>
        </section>

        <section className="technology-section" aria-labelledby="build">
          <div className="section-heading">
            <p className="technology-eyebrow">Build</p>
            <h2 id="build">Use it on something real.</h2>
          </div>

          <div className="technology-placeholder">
            <p>
              Projects built with {technology.name} will live here.
            </p>
            <Link href="/projects">Explore projects →</Link>
          </div>
        </section>

        <section className="technology-section" aria-labelledby="prove">
          <div className="section-heading">
            <p className="technology-eyebrow">Prove</p>
            <h2 id="prove">Demonstrate what you can do.</h2>
          </div>

          <div className="technology-placeholder">
            <p>
              Completion tasks for {technology.name} will live here.
            </p>
          </div>
        </section>

        <section className="technology-section" aria-labelledby="connected">
          <div className="section-heading">
            <p className="technology-eyebrow">Connected</p>
            <h2 id="connected">Follow the relationships.</h2>
          </div>

          <div className="technology-connected">
            {technology.connected.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}