"use client"
import { recommendations } from "@/lib/recommendations"
import { ExternalLinkIcon } from "./Icons"
import RecCard from "./RecCard"
import FadeUp from "./FadeUp"

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function KindWords() {
  return (
    <section
      id="recs"
      className="section-border"
      style={{ padding: "100px 0" }}
    >
      <div className="content-container">

        <FadeUp delay={0}>
          <div className="section-label-new" style={{ marginBottom: 16 }}>
            Kind words
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
              marginBottom: 48,
            }}
            className="kindwords-header"
          >
            <h2
              style={{
                fontFamily: "var(--font-fraunces)",
                fontWeight: 900,
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: "var(--ink)",
                margin: 0,
              }}
            >
              What people say.
            </h2>
          </div>
        </FadeUp>

        {/* 2-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 18,
          }}
          className="recs-grid"
        >
          {recommendations.map((rec, i) => (
            <RecCard key={rec.id} rec={rec} index={i} />
          ))}
        </div>

        {/* LinkedIn link */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          <a
            href="https://www.linkedin.com/in/alissa-bengtson/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="recs-li-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 16,
              fontWeight: 500,
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.25s",
            }}
          >
            <LinkedInIcon />
            See all recommendations on LinkedIn <ExternalLinkIcon />
          </a>
        </div>

      </div>

      <style>{`
        .recs-li-link:hover { color: var(--ink) !important; }
        @media (max-width: 640px) {
          .recs-grid { grid-template-columns: 1fr !important; }
          .kindwords-header { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  )
}
