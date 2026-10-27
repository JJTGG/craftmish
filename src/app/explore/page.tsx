import Link from "next/link";
import "./explore.css";

const areas = [
  {
    title: "Technologies",
    description:
      "Programming languages, frameworks, libraries, runtimes, databases, tools, and platforms.",
    href: "/technologies"
  },
  {
    title: "Concepts",
    description:
      "The principles and mental models that explain how software and systems work.",
    href: "/concepts"
  },
  {
    title: "Skills",
    description:
      "Practical abilities you can develop, practise, and apply across different contexts.",
    href: "/skills"
  },
  {
    title: "Learning paths",
    description:
      "Structured roadmaps that connect foundational knowledge to more advanced subjects.",
    href: "/roadmaps"
  }
] as const;

export default function ExplorePage() {
  return (
    <main className="content-page">
      <section className="content-intro">
        <p className="eyebrow">Explore Craftmish</p>

        <h1>Understand the landscape. Follow the connections.</h1>

        <p>
          Software development spans languages, frameworks, databases,
          APIs, infrastructure, security, testing, architecture,
          workflows, and many other disciplines.
          Explore the knowledge that underpins what you build,
          then follow the connections between subjects.
        </p>
      </section>

      <section aria-labelledby="explore-areas">
        <div className="section-heading">
          <p className="eyebrow">Knowledge system</p>
          <h2 id="explore-areas">Choose a starting point.</h2>
        </div>

        <div className="content-list">
          {areas.map((area) => (
            <Link
              className="content-list-item"
              href={area.href}
              key={area.href}
            >
              <div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>

              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}