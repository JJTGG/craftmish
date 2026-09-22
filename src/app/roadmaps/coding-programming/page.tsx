import Link from "next/link";
import { codingProgrammingRoadmap } from "@/content/roadmaps/coding-programming";

type RoadmapBlock = {
  type: "stage" | "label" | "paragraph" | "list";
  title?: string;
  items?: string[];
  text?: string;
};

const stagePattern = /^\d{2}\.\s/;

const sectionLabels = new Set([
  "Goal",
  "Learn",
  "Practice",
  "Work",
  "Build",
  "Proof",
  "Prerequisites",
  "Craftmish connections",
  "What comes after the roadmap?",
  "The underlying Craftmish model",
  "The learning cycle",
  "Choosing a direction",
  "Then determine:"
]);

function parseRoadmap(source: string): RoadmapBlock[] {
  const blocks = source
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const result: RoadmapBlock[] = [];

  for (const block of blocks) {
    if (block === "Coding / Programming Roadmap") {
      continue;
    }

    if (stagePattern.test(block)) {
      const [title, ...rest] = block.split("\n");
      result.push({
        type: "stage",
        title,
        text: rest.join("\n").trim()
      });
      continue;
    }

    if (sectionLabels.has(block)) {
      result.push({
        type: "label",
        title: block
      });
      continue;
    }

    const lines = block
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines.length > 1) {
      result.push({
        type: "list",
        items: lines
      });
      continue;
    }

    result.push({
      type: "paragraph",
      text: block
    });
  }

  return result;
}

const roadmapBlocks = parseRoadmap(codingProgrammingRoadmap);

function renderText(text: string) {
  return text.split("\n").map((line) => (
    <span key={line}>
      {line}
      <br />
    </span>
  ));
}

export default function CodingProgrammingRoadmapPage() {
  return (
    <>
      <main className="roadmap-page">
        <div className="roadmap-shell">
          <header className="roadmap-header">
            <div className="roadmap-header-meta">
              <Link href="/roadmaps">Roadmaps</Link>
              <span aria-hidden="true">/</span>
              <span>Foundation</span>
            </div>

            <p className="roadmap-eyebrow">Coding / Programming</p>

            <h1>
              Learn programming.
              <br />
              Build with it.
            </h1>

            <p className="roadmap-lead">
              A general roadmap for learning programming from computer
              fundamentals through practical software development and into a
              chosen specialization.
            </p>

            <div className="roadmap-intent">
              <span>LEARN</span>
              <span>→</span>
              <span>PRACTICE</span>
              <span>→</span>
              <span>BUILD</span>
              <span>→</span>
              <span>PROVE</span>
            </div>
          </header>

          <div className="roadmap-layout">
            <aside className="roadmap-sidebar">
              <p>On this roadmap</p>

              <nav aria-label="Roadmap stages">
                {roadmapBlocks
                  .filter((block) => block.type === "stage")
                  .map((block) => {
                    const title = block.title ?? "";
                    const id = title
                      .replace(/^\d{2}\.\s*/, "")
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/^-|-$/g, "");

                    return (
                      <a href={`#${id}`} key={id}>
                        {title}
                      </a>
                    );
                  })}
              </nav>
            </aside>

            <article className="roadmap-content">
              <section className="roadmap-overview">
                <p>
                  The goal is not to memorize technologies. It is to develop
                  the ability to understand computers, write programs, solve
                  problems, work with professional development tools, build
                  software, and continue learning independently.
                </p>
              </section>

              {roadmapBlocks.map((block, index) => {
                if (block.type === "stage") {
                  const title = block.title ?? "";
                  const id = title
                    .replace(/^\d{2}\.\s*/, "")
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-|-$/g, "");

                  return (
                    <section className="roadmap-stage" id={id} key={`${id}-${index}`}>
                      <div className="roadmap-stage-number">
                        {title.slice(0, 2)}
                      </div>

                      <div>
                        <p className="roadmap-section-kicker">Stage</p>
                        <h2>{title.replace(/^\d{2}\.\s*/, "")}</h2>

                        {block.text && (
                          <p className="roadmap-stage-intro">
                            {renderText(block.text)}
                          </p>
                        )}
                      </div>
                    </section>
                  );
                }

                if (block.type === "label") {
                  return (
                    <div className="roadmap-label" key={`${block.title}-${index}`}>
                      {block.title}
                    </div>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul className="roadmap-list" key={`list-${index}`}>
                      {block.items?.map((item) => (
                        <li key={item}>
                          <span aria-hidden="true">+</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p className="roadmap-paragraph" key={`paragraph-${index}`}>
                    {renderText(block.text ?? "")}
                  </p>
                );
              })}
            </article>
          </div>
        </div>
      </main>

      <style>{`
        .roadmap-page {
          min-height: 100vh;
          background: var(--background);
        }

        .roadmap-shell {
          width: min(1280px, calc(100% - 32px));
          margin: 0 auto;
          padding: 72px 0 120px;
        }

        .roadmap-header {
          max-width: 980px;
          padding-bottom: 88px;
          border-bottom: 1px solid var(--border);
        }

        .roadmap-header-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 56px;
          color: var(--muted);
          font-family: monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .roadmap-header-meta a {
          transition: color 150ms ease;
        }

        .roadmap-header-meta a:hover,
        .roadmap-header-meta a:focus-visible {
          color: var(--foreground);
        }

        .roadmap-eyebrow,
        .roadmap-section-kicker {
          margin: 0 0 16px;
          color: var(--muted);
          font-family: monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .roadmap-header h1 {
          max-width: 900px;
          margin: 0;
          font-size: clamp(52px, 8vw, 96px);
          line-height: 0.92;
          letter-spacing: -0.065em;
        }

        .roadmap-lead {
          max-width: 720px;
          margin: 36px 0 0;
          color: var(--muted);
          font-size: 20px;
          line-height: 1.65;
        }

        .roadmap-intent {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-top: 48px;
          color: var(--muted);
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.06em;
        }

        .roadmap-intent span:nth-child(odd) {
          color: var(--foreground);
        }

        .roadmap-layout {
          display: grid;
          grid-template-columns: 220px minmax(0, 760px);
          justify-content: space-between;
          gap: 64px;
          padding-top: 72px;
        }

        .roadmap-sidebar {
          position: sticky;
          top: 24px;
          align-self: start;
        }

        .roadmap-sidebar p {
          margin: 0 0 18px;
          color: var(--muted);
          font-family: monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .roadmap-sidebar nav {
          display: flex;
          flex-direction: column;
          border-left: 1px solid var(--border);
        }

        .roadmap-sidebar a {
          padding: 8px 0 8px 14px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.35;
          transition:
            color 150ms ease,
            border-color 150ms ease;
          border-left: 1px solid transparent;
          margin-left: -1px;
        }

        .roadmap-sidebar a:hover,
        .roadmap-sidebar a:focus-visible {
          color: var(--foreground);
          border-left-color: var(--foreground);
        }

        .roadmap-overview {
          margin-bottom: 88px;
        }

        .roadmap-overview p {
          max-width: 700px;
          margin: 0;
          font-size: 22px;
          line-height: 1.65;
          letter-spacing: -0.02em;
        }

        .roadmap-stage {
          display: grid;
          grid-template-columns: 56px minmax(0, 1fr);
          gap: 24px;
          padding: 72px 0 32px;
          scroll-margin-top: 24px;
          border-top: 1px solid var(--border);
        }

        .roadmap-stage-number {
          padding-top: 4px;
          color: var(--muted);
          font-family: monospace;
          font-size: 13px;
        }

        .roadmap-stage h2 {
          margin: 0;
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .roadmap-stage-intro {
          margin: 22px 0 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.7;
        }

        .roadmap-label {
          margin-top: 42px;
          margin-bottom: 16px;
          color: var(--foreground);
          font-family: monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .roadmap-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0 32px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .roadmap-list li {
          display: grid;
          grid-template-columns: 18px minmax(0, 1fr);
          gap: 10px;
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
          color: var(--muted);
          font-size: 15px;
          line-height: 1.5;
        }

        .roadmap-list li span:first-child {
          color: var(--foreground);
          font-family: monospace;
        }

        .roadmap-paragraph {
          max-width: 700px;
          margin: 0 0 24px;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.7;
        }

        @media (max-width: 800px) {
          .roadmap-layout {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .roadmap-sidebar {
            position: static;
            margin-bottom: 64px;
          }

          .roadmap-sidebar nav {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .roadmap-list {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .roadmap-shell {
            width: min(100% - 24px, 1280px);
            padding: 48px 0 80px;
          }

          .roadmap-header {
            padding-bottom: 64px;
          }

          .roadmap-header-meta {
            margin-bottom: 42px;
          }

          .roadmap-header h1 {
            font-size: clamp(46px, 14vw, 68px);
          }

          .roadmap-lead {
            margin-top: 28px;
            font-size: 17px;
          }

          .roadmap-intent {
            gap: 8px;
            margin-top: 36px;
          }

          .roadmap-layout {
            padding-top: 48px;
          }

          .roadmap-overview {
            margin-bottom: 64px;
          }

          .roadmap-overview p {
            font-size: 19px;
          }

          .roadmap-stage {
            grid-template-columns: 36px minmax(0, 1fr);
            gap: 14px;
            padding: 52px 0 24px;
          }

          .roadmap-stage h2 {
            font-size: 36px;
          }

          .roadmap-sidebar nav {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}