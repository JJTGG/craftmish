import Link from "next/link";
import "./roadmaps.css";

const roadmaps = [
  {
    title: "Coding / Programming",
    description:
      "Build a practical programming foundation, from computer fundamentals and problem solving through version control, algorithms, debugging, testing, and specialization.",
    level: "Foundation",
    href: "/roadmaps/coding-programming"
  }
];

export default function RoadmapsPage() {
  return (
    <main className="content-page">
      <section className="content-intro">
        <p className="eyebrow">Roadmaps</p>

        <h1>Follow a path. Build your way through it.</h1>

        <p>
          Structured learning paths that connect knowledge, practice,
          projects, and proof instead of treating learning as a checklist.
        </p>
      </section>

      <section aria-labelledby="roadmaps-heading">
        <div className="section-heading">
          <p className="eyebrow">Available paths</p>
          <h2 id="roadmaps-heading">Start with a foundation.</h2>
        </div>

        <div className="roadmap-list">
          {roadmaps.map((roadmap, index) => (
            <Link
              className="roadmap-item"
              href={roadmap.href}
              key={roadmap.href}
            >
              <span className="roadmap-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="roadmap-content">
                <div className="roadmap-meta">
                  <span>{roadmap.level}</span>
                </div>

                <h3>{roadmap.title}</h3>

                <p>{roadmap.description}</p>
              </div>

              <span className="roadmap-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}