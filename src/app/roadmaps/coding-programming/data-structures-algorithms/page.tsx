import Link from "next/link";

const learnGroups = [
  {
    title: "Why data structures matter",
    topics: [
      "What a data structure is",
      "Organizing and representing data",
      "Choosing structures based on the problem",
      "Time and space trade-offs",
      "Abstract data types",
      "Mutable vs immutable data"
    ]
  },
  {
    title: "Complexity analysis",
    topics: [
      "What algorithmic complexity means",
      "Time complexity",
      "Space complexity",
      "Big O notation",
      "Best, average, and worst cases",
      "Analyzing simple operations",
      "Comparing approaches"
    ]
  },
  {
    title: "Arrays & strings",
    topics: [
      "Arrays",
      "Indexing",
      "Traversal",
      "Insertion and deletion",
      "Searching arrays",
      "Strings as sequences",
      "Common array and string patterns"
    ]
  },
  {
    title: "Linked structures",
    topics: [
      "Nodes",
      "Singly linked lists",
      "Doubly linked lists",
      "Insertion and deletion",
      "Traversal",
      "Reversing linked structures",
      "When linked structures are useful"
    ]
  },
  {
    title: "Stacks & queues",
    topics: [
      "Stack operations",
      "Queue operations",
      "LIFO and FIFO",
      "Implementing stacks",
      "Implementing queues",
      "Circular queues",
      "Practical applications"
    ]
  },
  {
    title: "Hash tables",
    topics: [
      "Key-value storage",
      "Hash functions",
      "Hash collisions",
      "Buckets",
      "Lookup and insertion",
      "Sets and maps",
      "Trade-offs of hashing"
    ]
  },
  {
    title: "Trees",
    topics: [
      "Tree terminology",
      "Binary trees",
      "Tree traversal",
      "Binary search trees",
      "Balanced trees",
      "Heaps",
      "Priority queues"
    ]
  },
  {
    title: "Graphs",
    topics: [
      "Graph terminology",
      "Directed and undirected graphs",
      "Weighted graphs",
      "Adjacency lists",
      "Adjacency matrices",
      "Graph traversal",
      "Real-world graph problems"
    ]
  },
  {
    title: "Searching algorithms",
    topics: [
      "Linear search",
      "Binary search",
      "Search prerequisites",
      "Search complexity",
      "Choosing a search strategy",
      "Applying search to structured data"
    ]
  },
  {
    title: "Sorting algorithms",
    topics: [
      "Why sorting matters",
      "Bubble sort",
      "Insertion sort",
      "Selection sort",
      "Merge sort",
      "Quick sort",
      "Comparing sorting approaches"
    ]
  },
  {
    title: "Algorithmic techniques",
    topics: [
      "Brute force",
      "Divide and conquer",
      "Two pointers",
      "Sliding window",
      "Recursion",
      "Backtracking",
      "Greedy approaches",
      "Dynamic programming"
    ]
  },
  {
    title: "Problem patterns",
    topics: [
      "Recognizing recurring problem structures",
      "Choosing an appropriate data structure",
      "Combining multiple structures",
      "Deriving an algorithm",
      "Analyzing correctness",
      "Analyzing complexity",
      "Improving an existing solution"
    ]
  }
];

const practice = [
  "Implement an array-based stack.",
  "Implement a queue and test its edge cases.",
  "Build a linked list with insertion, deletion, and traversal.",
  "Implement a hash table or simplified map.",
  "Implement binary search on a sorted collection.",
  "Implement at least two sorting algorithms and compare them.",
  "Traverse a binary tree using multiple traversal strategies.",
  "Represent a graph and implement breadth-first and depth-first traversal.",
  "Solve the same problem using two different approaches and compare their complexity.",
  "Take an unfamiliar algorithm and explain its input, output, steps, correctness, and complexity."
];

const prove = [
  "Choose a non-trivial problem that requires a deliberate data structure or algorithm.",
  "Explain why the chosen data structure fits the problem.",
  "Design the algorithm before implementing it.",
  "Implement the solution and test normal and edge cases.",
  "Explain the time and space complexity.",
  "Compare the solution with at least one reasonable alternative.",
  "Document what trade-offs influenced the final implementation."
];

export default function DataStructuresAlgorithmsPage() {
  return (
    <main className="roadmap-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/roadmaps">Roadmaps</Link>
        <span aria-hidden="true">/</span>
        <Link href="/roadmaps/coding-programming">
          Coding / Programming
        </Link>
        <span aria-hidden="true">/</span>
        <span>Data Structures &amp; Algorithms</span>
      </nav>

      <header className="roadmap-header">
        <p className="eyebrow">06 / 08</p>

        <h1>Data Structures &amp; Algorithms</h1>

        <p className="roadmap-summary">
          Learn how data can be organized and manipulated efficiently, and
          develop the ability to design, analyze, and improve algorithms.
        </p>
      </header>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Goal</p>
          <h2>Learn to reason about solutions, not just write code.</h2>
        </div>

        <p className="section-copy">
          Data structures and algorithms provide the vocabulary for reasoning
          about how programs represent information and solve problems. The
          goal is not to memorize a collection of interview tricks. It is to
          understand the trade-offs behind different approaches and become
          capable of choosing, implementing, testing, and explaining a
          solution.
        </p>
      </section>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Learn</p>
          <h2>Structures, algorithms, and the reasoning behind them.</h2>
        </div>

        <div className="learn-list">
          {learnGroups.map((group, index) => (
            <article className="learn-group" key={group.title}>
              <div className="learn-group-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="learn-group-content">
                <h3>{group.title}</h3>

                <ul>
                  {group.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Practice</p>
          <h2>Implement structures and solve problems with them.</h2>
        </div>

        <ul className="action-list">
          {practice.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Prove</p>
          <h2>Design and defend a solution.</h2>
        </div>

        <p className="section-copy">
          Complete a problem where the choice of data structure or algorithm
          materially affects the solution. The proof should demonstrate not
          only that the code works, but that you understand why the approach
          works and what it costs.
        </p>

        <ul className="action-list">
          {prove.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="roadmap-section">
        <div className="section-heading">
          <p className="eyebrow">Connected</p>
          <h2>Where this leads.</h2>
        </div>

        <div className="connection-list">
          <div>
            <span className="connection-label">Concepts</span>
            <p>
              Complexity · Abstraction · Recursion · Optimization ·
              Correctness
            </p>
          </div>

          <div>
            <span className="connection-label">Skills</span>
            <p>
              Algorithm design · Complexity analysis · Data modeling ·
              Problem solving
            </p>
          </div>

          <div>
            <span className="connection-label">Technologies</span>
            <p>
              Standard libraries · Databases · Search systems · Compilers ·
              Runtime internals
            </p>
          </div>
        </div>
      </section>

      <nav className="roadmap-navigation" aria-label="Roadmap navigation">
        <Link href="/roadmaps/coding-programming/git-github">
          ← Previous section
        </Link>

        <Link href="/roadmaps/coding-programming/debugging-testing">
          Next section →
        </Link>
      </nav>

      <style>{`
        .roadmap-page {
          width: min(100% - 32px, 960px);
          margin: 0 auto;
          padding: 48px 0 80px;
        }

        .breadcrumbs {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin-bottom: 56px;
          color: var(--muted);
          font-size: 13px;
        }

        .breadcrumbs a {
          transition: color 150ms ease;
        }

        .breadcrumbs a:hover,
        .breadcrumbs a:focus-visible {
          color: var(--foreground);
        }

        .roadmap-header {
          max-width: 760px;
          padding-bottom: 64px;
          border-bottom: 1px solid var(--border);
        }

        .eyebrow {
          margin: 0 0 12px;
          color: var(--muted);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .roadmap-header h1 {
          margin: 0;
          max-width: 760px;
          font-size: clamp(38px, 7vw, 72px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .roadmap-summary {
          max-width: 680px;
          margin: 24px 0 0;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.65;
        }

        .roadmap-section {
          padding: 64px 0;
          border-bottom: 1px solid var(--border);
        }

        .section-heading {
          max-width: 680px;
          margin-bottom: 28px;
        }

        .section-heading h2 {
          margin: 0;
          font-size: clamp(25px, 4vw, 38px);
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .section-copy {
          max-width: 720px;
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.75;
        }

        .learn-list {
          display: grid;
          gap: 0;
        }

        .learn-group {
          display: grid;
          grid-template-columns: 56px minmax(0, 1fr);
          gap: 24px;
          padding: 28px 0;
          border-top: 1px solid var(--border);
        }

        .learn-group:last-child {
          border-bottom: 1px solid var(--border);
        }

        .learn-group-index {
          padding-top: 2px;
          color: var(--muted);
          font-size: 13px;
          font-variant-numeric: tabular-nums;
        }

        .learn-group-content h3 {
          margin: 0 0 16px;
          font-size: 19px;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        .learn-group-content ul,
        .action-list {
          margin: 0;
          padding-left: 20px;
        }

        .learn-group-content li,
        .action-list li {
          margin: 9px 0;
          color: var(--muted);
          line-height: 1.65;
        }

        .connection-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }

        .connection-list > div {
          min-width: 0;
          padding: 24px;
          background: var(--background);
        }

        .connection-label {
          display: block;
          margin-bottom: 12px;
          color: var(--foreground);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .connection-list p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.65;
        }

        .roadmap-navigation {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding-top: 32px;
        }

        .roadmap-navigation a {
          color: var(--muted);
          font-size: 14px;
          transition: color 150ms ease;
        }

        .roadmap-navigation a:hover,
        .roadmap-navigation a:focus-visible {
          color: var(--foreground);
        }

        @media (max-width: 700px) {
          .roadmap-page {
            width: min(100% - 24px, 960px);
            padding-top: 32px;
          }

          .breadcrumbs {
            margin-bottom: 40px;
          }

          .roadmap-header {
            padding-bottom: 48px;
          }

          .roadmap-summary {
            font-size: 16px;
          }

          .roadmap-section {
            padding: 48px 0;
          }

          .learn-group {
            grid-template-columns: 40px minmax(0, 1fr);
            gap: 16px;
          }

          .connection-list {
            grid-template-columns: 1fr;
          }

          .roadmap-navigation {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}