import Link from "next/link";

const activities = [
  {
    number: "01",
    title: "Centre a responsive card",
    description:
      "Use Flexbox and width constraints to position a card. Run your CSS, inspect the rendered result, and fix the layout until it satisfies the checks.",
    tags: ["CSS", "Flexbox", "Responsive layout"],
    level: "Foundational",
    duration: "10–15 minutes",
    href: "/practice/css-card-layout"
  }
] as const;

export default function PracticePage() {
  return (
    <main className="practice-page">
      <section className="practice-intro">
        <p className="practice-eyebrow">Practice</p>

        <h1>Understanding grows through application.</h1>

        <p>
          Work through practical activities, run your work, inspect what
          happens, and use the results to understand where you need to
          improve. Completing a task and understanding why it works
          are different achievements.
        </p>
      </section>

      <section aria-labelledby="practice-activities-heading">
        <div className="practice-section-heading">
          <h2 id="practice-activities-heading">Available activities</h2>
          <p>Start with a browser-based CSS lab.</p>
        </div>

        <div className="practice-activity-list">
          {activities.map((activity) => (
            <Link
              className="practice-activity"
              href={activity.href}
              key={activity.href}
            >
              <span className="practice-activity-number">
                {activity.number}
              </span>

              <div className="practice-activity-content">
                <h3>{activity.title}</h3>

                <p>{activity.description}</p>

                <div className="practice-tags">
                  {activity.tags.map((tag) => (
                    <span className="practice-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <p>
                  {activity.level} · {activity.duration}
                </p>
              </div>

              <span className="practice-activity-action">
                Start activity →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <aside className="practice-note">
        These are practical exercises, not just quizzes. The first lab
        evaluates the actual rendered layout. Its result is a formative
        check, not a formal certification or proof of broad CSS competence.
      </aside>
    </main>
  );
}