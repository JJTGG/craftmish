import Link from "next/link";
import "./home.css";

const knowledgeAreas = [
  {
    number: "01",
    label: "Technologies",
    description:
      "Programming languages, frameworks, libraries, runtimes, databases, and developer tools.",
    href: "/technologies"
  },
  {
    number: "02",
    label: "Concepts",
    description:
      "The principles and mental models that explain how software and systems work.",
    href: "/concepts"
  },
  {
    number: "03",
    label: "Skills",
    description:
      "Practical abilities developed through understanding, deliberate practice, and application.",
    href: "/skills"
  },
  {
    number: "04",
    label: "Learning paths",
    description:
      "Connected sequences that help you build knowledge without losing sight of practical outcomes.",
    href: "/roadmaps"
  }
] as const;

const learningCycle = [
  {
    number: "01",
    title: "Understand",
    description: "Learn the concept and why it matters."
  },
  {
    number: "02",
    title: "Apply",
    description: "Use the idea to solve a concrete problem."
  },
  {
    number: "03",
    title: "Observe",
    description: "Inspect what your work actually produces."
  },
  {
    number: "04",
    title: "Verify",
    description: "Check the result against meaningful criteria."
  },
  {
    number: "05",
    title: "Transfer",
    description: "Apply the skill in a different context."
  }
] as const;

export default function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">
            A connected system for developer growth
          </p>

          <h1>
            Understand how things work.
            <span>Build what comes next.</span>
          </h1>

          <p className="home-lede">
            Craftmish connects technical knowledge, practical skills,
            and learning paths so you can move beyond collecting
            tutorials and start developing a deeper understanding
            of the systems you build.
          </p>

          <div className="home-actions">
            <Link className="home-button home-button-primary" href="/explore">
              Explore knowledge
              <span aria-hidden="true">→</span>
            </Link>

            <Link className="home-button home-button-secondary" href="/roadmaps">
              Explore learning paths
            </Link>
          </div>

          <p className="home-hero-note">
            From foundational concepts to complex engineering disciplines.
          </p>
        </div>

        <aside className="home-hero-panel" aria-labelledby="approach-heading">
          <p className="eyebrow">The Craftmish approach</p>

          <h2 id="approach-heading">
            Knowledge becomes useful when it connects.
          </h2>

          <p>
            A technology leads to concepts. Concepts inform skills.
            Skills become useful through practice and application.
          </p>

          <div className="home-connection-list">
            <div>
              <span>01</span>
              <p>Discover what a technology does.</p>
            </div>

            <div>
              <span>02</span>
              <p>Understand the principles behind it.</p>
            </div>

            <div>
              <span>03</span>
              <p>Follow those connections into practical work.</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="home-knowledge" aria-labelledby="knowledge-heading">
        <div className="home-section-heading">
          <div>
            <p className="eyebrow">Explore the knowledge system</p>

            <h2 id="knowledge-heading">
              Find what you need. Follow the connections.
            </h2>
          </div>

          <p>
            Software development spans languages, frameworks, data,
            infrastructure, security, workflows, and much more.
            Explore individual subjects and discover how they fit together.
          </p>
        </div>

        <div className="home-area-grid">
          {knowledgeAreas.map((area) => (
            <Link
              className="home-area-card"
              href={area.href}
              key={area.href}
            >
              <div className="home-area-top">
                <span className="home-area-number">{area.number}</span>

                <span aria-hidden="true" className="home-area-arrow">
                  ↗
                </span>
              </div>

              <h3>{area.label}</h3>

              <p>{area.description}</p>

              <span className="home-area-link">Explore section</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-learning" aria-labelledby="learning-heading">
        <div className="home-section-heading">
          <div>
            <p className="eyebrow">The learning model</p>

            <h2 id="learning-heading">
              Progress should mean more than finishing a page.
            </h2>
          </div>

          <p>
            Craftmish is being developed around a learning cycle that
            connects understanding to practical results. Completion,
            successful execution, and demonstrated competence are
            different things.
          </p>
        </div>

        <ol className="home-cycle">
          {learningCycle.map((step) => (
            <li className="home-cycle-step" key={step.number}>
              <span className="home-cycle-number">{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="home-next" aria-labelledby="next-heading">
        <div>
          <p className="eyebrow">Start exploring</p>

          <h2 id="next-heading">
            Choose a starting point. Build from there.
          </h2>

          <p>
            You do not need to follow one universal path.
            Begin with a subject that matters to you and
            follow the connections as your understanding grows.
          </p>
        </div>

        <Link className="home-button home-button-primary" href="/explore">
          Open the knowledge map
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}