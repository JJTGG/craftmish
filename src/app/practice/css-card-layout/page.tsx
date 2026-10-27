"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ViewportMode = "desktop" | "mobile";
type RunStatus = "waiting" | "running" | "complete";

type LabCheck = {
  id: string;
  title: string;
  passed: boolean;
  detail: string;
};

type LabResult = {
  type: "craftmish:result";
  runId: number;
  viewportWidth: number;
  cardWidth: number;
  checks: LabCheck[];
};

const STARTER_CSS = `.stage {
  min-height: 360px;
  padding: 16px;
}

.card {
  width: 100%;
  max-width: 320px;
}
`;

const LAB_DOCUMENT = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Security-Policy"
    content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; img-src data:; connect-src 'none'; font-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'">
  <title>Craftmish CSS practice preview</title>

  <style>
    * {
      box-sizing: border-box;
    }

    html,
    body {
      width: 100%;
      min-width: 0;
      min-height: 100%;
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
    }

    body {
      color: #20211f;
    }

    .stage {
      width: 100%;
      min-height: 360px;
      padding: 16px;
      background: #f0f1eb;
    }

    .card {
      padding: 24px;
      border: 1px solid #d9ddd4;
      border-radius: 12px;
      background: #ffffff;
      color: #20211f;
      box-shadow: 0 8px 24px rgb(25 30 25 / 7%);
    }

    .card-kicker {
      margin: 0 0 15px;
      color: #526653;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: .12em;
    }

    .card h1 {
      margin: 0;
      font-size: 23px;
      line-height: 1.15;
      letter-spacing: -.04em;
    }

    .card-copy {
      margin: 12px 0 0;
      color: #696b65;
      font-size: 13px;
      line-height: 1.7;
    }

    .card-link {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 13px;
      border-radius: 5px;
      background: #263b2b;
      color: white;
      font-size: 12px;
      font-weight: 600;
      text-decoration: none;
    }

    #learner-styles {
      display: block;
    }
  </style>

  <style id="learner-styles"></style>
</head>
<body>
  <main class="stage" id="stage">
    <article class="card" id="card">
      <p class="card-kicker">PRACTICE PROJECT</p>
      <h1>Build with intention.</h1>
      <p class="card-copy">
        Good layouts place content where it belongs and remain usable
        when the available space changes.
      </p>
      <a class="card-link" href="#details">See the details</a>
      <p class="card-copy" id="details">
        This card is rendered by the preview, not a static mockup.
      </p>
    </article>
  </main>

  <script>
    (() => {
      const learnerStyles = document.getElementById("learner-styles");

      function sendResult(runId, css) {
        learnerStyles.textContent = css;

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const stage = document.getElementById("stage");
            const card = document.getElementById("card");

            const stageRect = stage.getBoundingClientRect();
            const cardRect = card.getBoundingClientRect();

            const stageStyle = getComputedStyle(stage);
            const cardStyle = getComputedStyle(card);

            const visible =
              cardRect.width > 0 &&
              cardRect.height > 0 &&
              stageRect.width > 0 &&
              stageRect.height > 0 &&
              stageStyle.display !== "none" &&
              stageStyle.visibility !== "hidden" &&
              cardStyle.display !== "none" &&
              cardStyle.visibility !== "hidden" &&
              Number(stageStyle.opacity) > 0 &&
              Number(cardStyle.opacity) > 0;

            const centered =
              visible &&
              Math.abs(
                (cardRect.left + cardRect.right) / 2 -
                (stageRect.left + stageRect.right) / 2
              ) <= 2 &&
              Math.abs(
                (cardRect.top + cardRect.bottom) / 2 -
                (stageRect.top + stageRect.bottom) / 2
              ) <= 2;

            const withinMaximumWidth =
              visible && cardRect.width <= 320.5;

            const insideViewport =
              visible &&
              cardRect.left >= -1 &&
              cardRect.right <= window.innerWidth + 1;

            const noHorizontalOverflow =
              document.documentElement.scrollWidth <=
                window.innerWidth + 1 &&
              document.body.scrollWidth <= window.innerWidth + 1;

            const checks = [
              {
                id: "visible",
                title: "Card remains visible",
                passed: visible,
                detail: visible
                  ? "The card has a visible layout box."
                  : "The card or its container has no visible layout box."
              },
              {
                id: "centered",
                title: "Card is centred",
                passed: centered,
                detail: centered
                  ? "The card is centred horizontally and vertically."
                  : "Check the container's display, align-items and justify-content."
              },
              {
                id: "maximum-width",
                title: "Maximum width is respected",
                passed: withinMaximumWidth,
                detail: withinMaximumWidth
                  ? "The rendered card is no wider than 320 CSS pixels."
                  : "The rendered card exceeds the 320px width limit."
              },
              {
                id: "viewport-fit",
                title: "Card fits the preview",
                passed: insideViewport,
                detail: insideViewport
                  ? "The complete card fits inside this viewport."
                  : "Part of the card extends beyond the preview viewport."
              },
              {
                id: "overflow",
                title: "No horizontal overflow",
                passed: noHorizontalOverflow,
                detail: noHorizontalOverflow
                  ? "The document has no detected horizontal overflow."
                  : "The document is wider than the available viewport."
              }
            ];

            parent.postMessage(
              {
                type: "craftmish:result",
                runId,
                viewportWidth: window.innerWidth,
                cardWidth: Math.round(cardRect.width),
                checks
              },
              "*"
            );
          });
        });
      }

      window.addEventListener("message", (event) => {
        if (event.source !== parent) {
          return;
        }

        const data = event.data;

        if (
          !data ||
          data.type !== "craftmish:run-css" ||
          !Number.isInteger(data.runId) ||
          typeof data.css !== "string" ||
          data.css.length > 10000
        ) {
          return;
        }

        sendResult(data.runId, data.css);
      });
    })();
  </script>
</body>
</html>`;

function isLabCheck(value: unknown): value is LabCheck {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const check = value as Record<string, unknown>;

  return (
    typeof check.id === "string" &&
    typeof check.title === "string" &&
    typeof check.passed === "boolean" &&
    typeof check.detail === "string"
  );
}

function isLabResult(value: unknown): value is LabResult {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const result = value as Record<string, unknown>;

  return (
    result.type === "craftmish:result" &&
    Number.isInteger(result.runId) &&
    typeof result.viewportWidth === "number" &&
    typeof result.cardWidth === "number" &&
    Array.isArray(result.checks) &&
    result.checks.every(isLabCheck)
  );
}

export default function CssCardLayoutPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const latestRunId = useRef(0);

  const [css, setCss] = useState(STARTER_CSS);
  const [appliedCss, setAppliedCss] = useState(STARTER_CSS);
  const [viewport, setViewport] = useState<ViewportMode>("desktop");
  const [frameReady, setFrameReady] = useState(false);
  const [runId, setRunId] = useState(0);
  const [runStatus, setRunStatus] = useState<RunStatus>("waiting");
  const [result, setResult] = useState<LabResult | null>(null);

  useEffect(() => {
    function handleMessage(event: MessageEvent<unknown>) {
      if (event.source !== iframeRef.current?.contentWindow) {
        return;
      }

      if (!isLabResult(event.data)) {
        return;
      }

      if (event.data.runId !== latestRunId.current) {
        return;
      }

      setResult(event.data);
      setRunStatus("complete");
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  useEffect(() => {
    if (!frameReady || runId < 1) {
      return;
    }

    iframeRef.current?.contentWindow?.postMessage(
      {
        type: "craftmish:run-css",
        runId,
        css: appliedCss
      },
      "*"
    );
  }, [appliedCss, frameReady, runId]);

  function queueRun(nextCss: string) {
    const nextRunId = latestRunId.current + 1;

    latestRunId.current = nextRunId;
    setAppliedCss(nextCss);
    setRunId(nextRunId);
    setResult(null);
    setRunStatus("running");
  }

  function handleFrameLoad() {
    setFrameReady(true);
    queueRun(STARTER_CSS);
  }

  function handleRun() {
    if (!frameReady) {
      return;
    }

    queueRun(css);
  }

  function handleReset() {
    setCss(STARTER_CSS);

    if (frameReady) {
      queueRun(STARTER_CSS);
    }
  }

  function handleViewportChange(nextViewport: ViewportMode) {
    if (nextViewport === viewport) {
      return;
    }

    setViewport(nextViewport);

    if (frameReady) {
      queueRun(appliedCss);
    }
  }

  const passedCount =
    result?.checks.filter((check) => check.passed).length ?? 0;

  return (
    <main className="practice-page">
      <nav className="practice-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/practice">Practice</Link>
        <span aria-hidden="true">/</span>
        <span>CSS layout</span>
      </nav>

      <section className="practice-workbench-heading">
        <p className="practice-eyebrow">
          Browser-based lab · CSS
        </p>

        <h1>Centre a responsive card.</h1>

        <p>
          Change the CSS, run it in the preview, and inspect the
          measured result. Your goal is to centre the card while
          respecting its maximum width and keeping it inside the
          available viewport.
        </p>
      </section>

      <section className="practice-task-brief" aria-label="Activity instructions">
        <div>
          <h2>Your task</h2>

          <p>
            The card currently has a width constraint but is not
            centred. Use the appropriate container layout rules to
            position it horizontally and vertically.
          </p>

          <details className="practice-prediction">
            <summary>Predict before running</summary>

            <p>
              Which checks do you expect to fail with the starter CSS?
              After running it, compare your prediction with the
              measured result.
            </p>
          </details>
        </div>

        <div>
          <h2>Acceptance criteria</h2>

          <ul>
            <li>The card is centred horizontally and vertically.</li>
            <li>The card does not exceed 320 CSS pixels in width.</li>
            <li>The card fits inside the preview viewport.</li>
            <li>The document has no horizontal overflow.</li>
          </ul>
        </div>
      </section>

      <section className="practice-workbench-grid" aria-label="CSS workspace and results">
        <div className="practice-panel">
          <div className="practice-panel-header">
            <div>
              <h2>CSS editor</h2>
              <p className="practice-panel-subtitle">styles.css</p>
            </div>

            <button
              className="practice-button practice-button-primary"
              type="button"
              onClick={handleRun}
              disabled={!frameReady}
            >
              Run CSS ▶
            </button>
          </div>

          <label className="practice-editor-label" htmlFor="css-source">
            <span className="practice-visually-hidden">Edit your CSS</span>
          </label>

          <textarea
            id="css-source"
            className="practice-editor"
            value={css}
            onChange={(event) => setCss(event.target.value)}
            spellCheck={false}
            autoComplete="off"
            maxLength={10000}
            aria-describedby="css-editor-help"
          />

          <div className="practice-editor-footer">
            <span id="css-editor-help">CSS only · 10,000 character limit</span>

            <button
              className="practice-button"
              type="button"
              onClick={handleReset}
              disabled={!frameReady}
            >
              Reset starter
            </button>
          </div>
        </div>

        <div className="practice-panel">
          <div className="practice-panel-header">
            <div>
              <h2>Live result</h2>
              <p className="practice-panel-subtitle">
                {viewport === "desktop" ? "720px viewport" : "320px viewport"}
              </p>
            </div>

            <div className="practice-viewport-controls" aria-label="Preview viewport">
              <button
                type="button"
                aria-pressed={viewport === "desktop"}
                onClick={() => handleViewportChange("desktop")}
              >
                Desktop
              </button>

              <button
                type="button"
                aria-pressed={viewport === "mobile"}
                onClick={() => handleViewportChange("mobile")}
              >
                Mobile
              </button>
            </div>
          </div>

          <div className="practice-preview-scroll">
            <iframe
              ref={iframeRef}
              className="practice-preview-frame"
              title="Sandboxed live preview of the CSS card activity"
              sandbox="allow-scripts"
              srcDoc={LAB_DOCUMENT}
              onLoad={handleFrameLoad}
              style={{
                width: viewport === "desktop" ? 720 : 320
              }}
            />
          </div>

          <div className="practice-result-summary">
            <strong>Layout checks</strong>

            <span className="practice-run-status" aria-live="polite">
              {runStatus === "waiting"
                ? "Waiting for preview…"
                : runStatus === "running"
                  ? "Running checks…"
                  : `${passedCount}/${result?.checks.length ?? 0} checks passed`}
            </span>
          </div>

          {result ? (
            <div className="practice-check-list" aria-live="polite">
              {result.checks.map((check) => (
                <div className="practice-check" key={check.id}>
                  <span
                    className="practice-check-status"
                    data-passed={check.passed}
                  >
                    {check.passed ? "Passed" : "Needs work"}
                  </span>

                  <div>
                    <h3>{check.title}</h3>
                    <p>{check.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="practice-check-list">
              <div className="practice-check">
                <span className="practice-check-status">Pending</span>

                <div>
                  <h3>Waiting for measurements</h3>
                  <p>
                    The preview will report its layout checks after the
                    current CSS has run.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <aside className="practice-workbench-disclaimer">
        This lab runs CSS in a restricted browser sandbox. Results are
        calculated from the rendered layout; they are not a secure,
        high-stakes assessment. Attempts are not yet saved to a Craftmish
        account, and no Neon persistence is connected in this increment.
      </aside>

      <section className="practice-workbench-next">
        <div>
          <h2>What to do with the result</h2>

          <p>
            If a check fails, use the measurements and feedback to adjust
            your CSS. Run it again, switch to the mobile viewport, and
            observe whether the behaviour changes.
          </p>
        </div>

        <Link className="practice-button" href="/practice">
          Back to practice library
        </Link>
      </section>
    </main>
  );
}