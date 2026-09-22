import Link from "next/link";
import { notFound } from "next/navigation";
import "./skill.css";

const skills = {
  "problem-solving": {
    name: "Problem Solving",
    description:
      "The ability to understand problems, break them down, reason about possible solutions, and implement a workable approach.",
    about:
      "Problem solving is the process of turning an unclear or difficult problem into a set of understandable constraints, possible approaches, and actionable steps. It sits underneath much of software development because writing code is only useful when the underlying problem is understood.",
    learn: [
      "Problem decomposition",
      "Requirements and constraints",
      "Inputs and outputs",
      "Algorithms and approaches",
      "Trade-offs",
      "Edge cases",
      "Solution evaluation"
    ],
    connected: ["Programming", "Algorithms", "Debugging", "Software development"]
  },
  programming: {
    name: "Programming",
    description:
      "The ability to express logic in code, work with data, control program behavior, and build software that solves real problems.",
    about:
      "Programming combines problem solving with precise instructions that a computer can execute. Developing this skill requires understanding programming concepts and applying them repeatedly through increasingly practical work.",
    learn: [
      "Values and data",
      "Variables",
      "Control flow",
      "Functions",
      "Data structures",
      "Errors",
      "Modules"
    ],
    connected: ["JavaScript", "TypeScript", "Problem Solving", "Algorithms"]
  },
  "web-development": {
    name: "Web Development",
    description:
      "The ability to build applications for the web by working across interfaces, browsers, servers, APIs, and related technologies.",
    about:
      "Web development involves understanding how software is delivered through the web and how its different parts communicate. The skill grows by combining knowledge of interfaces, browser behavior, servers, data, and network communication.",
    learn: [
      "HTML and document structure",
      "CSS and presentation",
      "JavaScript and browser behavior",
      "HTTP",
      "APIs",
      "Server-side development",
      "Deployment"
    ],
    connected: ["HTML", "CSS", "JavaScript", "HTTP", "APIs", "Next.js"]
  },
  debugging: {
    name: "Debugging",
    description:
      "The ability to investigate unexpected behavior, identify causes, and make targeted changes that restore correct behavior.",
    about:
      "Debugging is an investigative skill. Instead of guessing at fixes, you gather evidence, isolate the problem, test hypotheses, identify the underlying cause, and verify that the change actually resolves the issue.",
    learn: [
      "Reproducing problems",
      "Reading error messages",
      "Inspecting program state",
      "Tracing execution",
      "Forming hypotheses",
      "Isolating causes",
      "Verifying fixes"
    ],
    connected: ["Programming", "Testing", "Problem Solving", "Software development"]
  },
  testing: {
    name: "Testing",
    description:
      "The ability to verify software behavior systematically and use tests to catch regressions and improve confidence in changes.",
    about:
      "Testing provides structured ways to check whether software behaves as expected. Good testing is not simply about producing more tests; it is about identifying important behavior, failure conditions, and boundaries worth verifying.",
    learn: [
      "Test cases",
      "Expected behavior",
      "Assertions",
      "Unit testing",
      "Integration testing",
      "End-to-end testing",
      "Regression testing"
    ],
    connected: ["Debugging", "Programming", "Software quality", "CI/CD"]
  },
  "version-control": {
    name: "Version Control",
    description:
      "The ability to track changes, manage branches, collaborate safely, and maintain a useful history of a software project.",
    about:
      "Version control allows developers to work with change deliberately. It provides a history of a project, makes experimentation safer, and supports collaboration by giving changes a structured way to move between different versions of the codebase.",
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
  },
  "api-integration": {
    name: "API Integration",
    description:
      "The ability to understand external interfaces, make requests, handle responses, and connect software systems together.",
    about:
      "API integration is the practical skill of connecting one software system to another through a defined interface. It requires understanding requests, responses, data formats, authentication, failures, and the behavior of the external service.",
    learn: [
      "API contracts",
      "Endpoints",
      "HTTP requests",
      "Request parameters",
      "Response data",
      "Authentication",
      "Error handling"
    ],
    connected: ["APIs", "HTTP", "Web Development", "Backend development"]
  },
  "software-architecture": {
    name: "Software Architecture",
    description:
      "The ability to structure software into understandable, maintainable parts and make deliberate decisions about how those parts interact.",
    about:
      "Software architecture concerns the structure of a system and the relationships between its major parts. It involves deciding where responsibilities belong, how components communicate, and which trade-offs matter for the system being built.",
    learn: [
      "System boundaries",
      "Responsibilities",
      "Components",
      "Dependencies",
      "Data flow",
      "Interfaces",
      "Architectural trade-offs"
    ],
    connected: ["Programming", "Web Development", "APIs", "Software design"]
  }
} as const;

type SkillSlug = keyof typeof skills;

function isSkillSlug(slug: string): slug is SkillSlug {
  return slug in skills;
}

export function generateStaticParams() {
  return Object.keys(skills).map((slug) => ({
    slug
  }));
}

export default async function SkillPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isSkillSlug(slug)) {
    notFound();
  }

  const skill = skills[slug];

  return (
    <main className="skill-page">
      <div className="skill-shell">
        <header className="skill-header">
          <div className="skill-breadcrumb">
            <Link href="/skills">Skills</Link>
            <span>/</span>
            <span>{skill.name}</span>
          </div>

          <p className="skill-eyebrow">Skill</p>

          <h1>{skill.name}</h1>

          <p className="skill-lead">{skill.description}</p>
        </header>

        <section className="skill-section" aria-labelledby="about">
          <div className="skill-section-heading">
            <p className="skill-eyebrow">About</p>
            <h2 id="about">Understand the capability.</h2>
          </div>

          <div className="skill-content-block">
            <p>{skill.about}</p>
          </div>
        </section>

        <section className="skill-section" aria-labelledby="learn">
          <div className="skill-section-heading">
            <p className="skill-eyebrow">Learn</p>
            <h2 id="learn">Build the foundation.</h2>
          </div>

          <ol className="skill-list">
            {skill.learn.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ol>
        </section>

        <section className="skill-section" aria-labelledby="practice">
          <div className="skill-section-heading">
            <p className="skill-eyebrow">Practice</p>
            <h2 id="practice">Turn knowledge into ability.</h2>
          </div>

          <div className="skill-placeholder">
            <p>Challenges connected to {skill.name} will live here.</p>
            <Link href="/challenges">Explore challenges →</Link>
          </div>
        </section>

        <section className="skill-section" aria-labelledby="build">
          <div className="skill-section-heading">
            <p className="skill-eyebrow">Build</p>
            <h2 id="build">Use it on something real.</h2>
          </div>

          <div className="skill-placeholder">
            <p>Projects connected to {skill.name} will live here.</p>
            <Link href="/projects">Explore projects →</Link>
          </div>
        </section>

        <section className="skill-section" aria-labelledby="prove">
          <div className="skill-section-heading">
            <p className="skill-eyebrow">Prove</p>
            <h2 id="prove">Demonstrate what you can do.</h2>
          </div>

          <div className="skill-placeholder">
            <p>Completion tasks for {skill.name} will live here.</p>
          </div>
        </section>

        <section className="skill-section" aria-labelledby="connected">
          <div className="skill-section-heading">
            <p className="skill-eyebrow">Connected</p>
            <h2 id="connected">Follow the relationships.</h2>
          </div>

          <div className="skill-connected">
            {skill.connected.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}