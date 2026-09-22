import Link from "next/link";

const sections = [
  {
    title: "Explore",
    description: "Discover technologies, concepts, skills, and resources.",
    href: "/explore"
  },
  {
    title: "Learn",
    description: "Follow roadmaps and practical learning paths.",
    href: "/roadmaps"
  },
  {
    title: "Build",
    description: "Turn what you learn into projects and experiments.",
    href: "/projects"
  },
  {
    title: "Community",
    description: "Contribute knowledge, review work, and share what you discover.",
    href: "/community"
  }
];

export default function Home() {
  return (
    <main className="home">
      <section className="home-intro">
        <p className="eyebrow">Open knowledge for builders</p>

        <h1>Learn. Build. Ship. Contribute.</h1>

        <p className="home-description">
          Craftmish connects the things you need to learn with the things
          you can build, ship, review, and contribute.
        </p>

        <div className="home-search">
          <label htmlFor="site-search">Search Craftmish</label>
          <input
            id="site-search"
            type="search"
            placeholder="Search anything..."
          />
        </div>
      </section>

      <section className="home-sections" aria-labelledby="start-heading">
        <div className="section-heading">
          <p className="eyebrow">Start here</p>
          <h2 id="start-heading">Find your way in.</h2>
        </div>

        <div className="section-list">
          {sections.map((section) => (
            <Link
              className="section-item"
              href={section.href}
              key={section.href}
            >
              <div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>

              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}