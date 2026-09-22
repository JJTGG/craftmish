import Link from "next/link";
import "./home.css";

const entryPoints = [
  {
    label: "Technologies",
    description: "Languages, frameworks, libraries, tools, databases, and platforms.",
    href: "/technologies"
  },
  {
    label: "Concepts",
    description: "The ideas and principles behind the things you build.",
    href: "/concepts"
  },
  {
    label: "Skills",
    description: "Practical abilities developed through understanding and repetition.",
    href: "/skills"
  },
  {
    label: "Resources",
    description: "Documentation, articles, courses, books, and useful references.",
    href: "/resources"
  }
];

const buildPaths = [
  {
    label: "Roadmaps",
    description: "Follow a connected path instead of collecting disconnected tutorials.",
    href: "/roadmaps"
  },
  {
    label: "Challenges",
    description: "Practice a concept until you can actually use it.",
    href: "/challenges"
  },
  {
    label: "Projects",
    description: "Turn knowledge into something real that can be shipped and reviewed.",
    href: "/projects"
  }
];

export default function Home() {
  return (
    <main className="home">
      <section className="home-intro">
        <p className="eyebrow">Open knowledge for builders</p>

        <h1>Learn. Build. Ship. Contribute.</h1>

        <p className="home-description">
          Craftmish connects technologies, concepts, skills, resources,
          learning paths, challenges, and projects into one knowledge system.
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

      <section className="home-map" aria-labelledby="map-heading">
        <div className="section-heading">
          <p className="eyebrow">The knowledge map</p>
          <h2 id="map-heading">Start anywhere. Follow the connections.</h2>
        </div>

        <div className="home-entry-grid">
          {entryPoints.map((entry) => (
            <Link className="home-entry" href={entry.href} key={entry.href}>
              <span className="home-entry-index">
                {String(entryPoints.indexOf(entry) + 1).padStart(2, "0")}
              </span>

              <div>
                <h3>{entry.label}</h3>
                <p>{entry.description}</p>
              </div>

              <span className="home-entry-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-thread" aria-labelledby="thread-heading">
        <div className="section-heading">
          <p className="eyebrow">Follow a thread</p>
          <h2 id="thread-heading">Knowledge becomes useful when it connects.</h2>
        </div>

        <div className="home-thread-path" aria-label="Example learning thread">
          <span>JavaScript</span>
          <span aria-hidden="true">→</span>
          <span>TypeScript</span>
          <span aria-hidden="true">→</span>
          <span>React</span>
          <span aria-hidden="true">→</span>
          <span>Next.js</span>
          <span aria-hidden="true">→</span>
          <span>Project</span>
        </div>

        <p className="home-thread-description">
          A technology can lead to a concept. A concept can lead to a skill.
          A skill can lead to a challenge. A challenge can become a project.
        </p>
      </section>

      <section className="home-build" aria-labelledby="build-heading">
        <div className="section-heading">
          <p className="eyebrow">Make it practical</p>
          <h2 id="build-heading">Move from knowing to doing.</h2>
        </div>

        <div className="home-build-list">
          {buildPaths.map((item) => (
            <Link className="home-build-item" href={item.href} key={item.href}>
              <div>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </div>

              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-contribute" aria-labelledby="contribute-heading">
        <p className="eyebrow">Open by default</p>

        <h2 id="contribute-heading">
          Learn from what others build.
          <br />
          Leave something useful behind.
        </h2>

        <Link className="home-contribute-link" href="/community">
          Explore the community →
        </Link>
      </section>
    </main>
  );
}