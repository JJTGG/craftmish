import Link from "next/link";

const areas = [
  {
    title: "Technologies",
    description:
      "Languages, frameworks, libraries, runtimes, tools, databases, and platforms.",
    href: "/technologies"
  },
  {
    title: "Concepts",
    description:
      "The ideas and principles that explain how software actually works.",
    href: "/concepts"
  },
  {
    title: "Skills",
    description:
      "Practical abilities you can develop, practice, and apply.",
    href: "/skills"
  },
  {
    title: "Resources",
    description:
      "Documentation, articles, courses, videos, books, and other useful material.",
    href: "/resources"
  },
  {
    title: "Roadmaps",
    description:
      "Structured paths connecting knowledge, skills, practice, and projects.",
    href: "/roadmaps"
  },
  {
    title: "Challenges",
    description:
      "Practical problems designed to turn knowledge into ability.",
    href: "/challenges"
  },
  {
    title: "Projects",
    description:
      "Things you can build to apply what you learn and produce real work.",
    href: "/projects"
  }
];

export default function ExplorePage() {
  return (
    <main className="content-page">
      <section className="content-intro">
        <p className="eyebrow">Explore</p>

        <h1>Find something to learn, build, or follow.</h1>

        <p>
          Craftmish connects technologies, concepts, skills, resources,
          roadmaps, challenges, and projects so you can move between them
          instead of learning in isolation.
        </p>
      </section>

      <section aria-labelledby="explore-areas">
        <div className="section-heading">
          <p className="eyebrow">Knowledge map</p>
          <h2 id="explore-areas">Explore by type.</h2>
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