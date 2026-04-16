"use client"
import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "./Icons"

const EASE = [0.16, 1, 0.3, 1]
const STATS = [
  { value: <><span className="stat-year-full">Est. 1999</span><span className="stat-year-short">Est. &apos;99</span></>, label: "predates Y2K" },
  { value: "13+", label: "years experience" },
  { value: "4", label: "brand identities" },
  { value: <svg viewBox="0 0 50 24" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "auto", height: "clamp(14px, 2.5vw, 28px)", color: "var(--gold)" }}><path d="M25 12 C25 12 20 4 13 4 C7 4 3 8 3 12 C3 16 7 20 13 20 C20 20 25 12 25 12 Z" /><path d="M25 12 C25 12 30 4 37 4 C43 4 47 8 47 12 C47 16 43 20 37 20 C30 20 25 12 25 12 Z" /></svg>, label: "cups of coffee" },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="section-border"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
      }}
    >
      <div className="hero-base-glow" />
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />
      <div className="hero-blob hero-blob-4" />
      <div className="hero-blob hero-blob-5" />

      {/* Main content */}
      <div
        className="content-container hero-content"
        style={{
          paddingTop: 120,
          paddingBottom: 60,
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >

        {/* Greeting */}
        <div style={{ overflow: "hidden" }}>
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(22px, 3vw, 40px)",
              color: "var(--muted)",
              margin: "0 0 4px",
              lineHeight: 1.1,
              paddingBottom: 4,
            }}
          >
            Hi, I&apos;m{" "}
            <span style={{ color: "var(--fuchsia2)", fontWeight: 900 }}>Alissa</span>.
          </motion.p>
        </div>

        {/* Headline */}
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "108%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.72, delay: 0.16, ease: EASE }}
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 900,
              fontSize: "clamp(52px, 7vw, 88px)",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              color: "var(--ink)",
              margin: 0,
              paddingBottom: "0.08em",
            }}
          >
            I build things for the&nbsp;<em style={{ color: "var(--fuchsia2)" }}>web.</em>
          </motion.h1>
        </div>

        {/* Subtext + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          style={{ marginTop: 36, display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "clamp(18px, 3vw, 20px)",
              color: "var(--muted)",
              maxWidth: 600,
              margin: "0 auto 28px",
            }}
          >
            I&apos;ve been building for the web since{" "}
            <strong style={{ fontWeight: 600 }}>
              dial-up was considered fast
            </strong>
            . 13+&nbsp;years shipping real products for{" "}
            <button
              onClick={() =>
                document.getElementById("brands")?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                fontWeight: 600,
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: 3,
                font: "inherit",
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              real brands
            </button>
            .
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
              className="btn-fuchsia"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View my work
            </button>
            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-outfit)",
                fontSize: 16,
                fontWeight: 500,
                color: "var(--muted)",
                padding: 0,
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              My story <ArrowRight />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "nowrap",
          gap: "clamp(6px, 1.8vw, 48px)",
          padding: "28px 40px 120px",
        }}
        className="hero-stats"
      >
        {STATS.map((s, i) => (
          <React.Fragment key={s.label}>
            <div style={{ textAlign: "center" }}>
              <span style={{
                fontFamily: "var(--font-fraunces)",
                fontWeight: 900,
                fontStyle: "italic",
                fontSize: "clamp(18px, 3.5vw, 38px)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "var(--gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "clamp(18px, 3.5vw, 38px)",
                marginBottom: 4,
              }}>
                {s.value}
              </span>
              {s.sub && (
                <span className="stat-sub" style={{
                  fontFamily: "var(--font-fraunces)",
                  fontStyle: "italic",
                  fontSize: 11,
                  color: "var(--muted)",
                  display: "block",
                  marginBottom: 2,
                }}>
                  {s.sub}
                </span>
              )}
              <span style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 600,
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--muted)",
                display: "block",
              }}>
                {s.label}
              </span>
            </div>
            {i < STATS.length - 1 && <span className="stat-sep">✦</span>}
          </React.Fragment>
        ))}
      </motion.div>


      <style>{`
        .hero-base-glow {
          display: block;
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(ellipse at 50% 50%, rgba(123,63,160,0.15) 0%, var(--bg) 70%);
        }

        .stat-year-short { display: none; }
        @media (max-width: 600px) {
          .stat-year-full { display: none; }
          .stat-year-short { display: inline; }
        }
        .stat-sep {
          font-size: 10px;
          color: rgba(248,239,254,0.12);
          flex-shrink: 0;
        }
        .stat-sub {
          opacity: 1;
        }

        .hero-blob {
          position: absolute;
          border-radius: 50%;
          height: 0;
          pointer-events: none;
          z-index: 0;
        }

        .hero-blob::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          filter: blur(120px);
        }

        /* Blob 1 — fuchsia, top left */
        .hero-blob-1 { width: 58%; padding-bottom: 58%; top: -15%; left: -8%; opacity: 0.24; }
        .hero-blob-1::after { background: var(--fuchsia); }

        /* Blob 2 — violet, bottom right */
        .hero-blob-2 { width: 54%; padding-bottom: 54%; bottom: -15%; right: -4%; opacity: 0.26; }
        .hero-blob-2::after { background: var(--violet); }

        /* Blob 3 — gold, center */
        .hero-blob-3 { width: 42%; padding-bottom: 42%; top: 8%; left: 28%; opacity: 0.14; }
        .hero-blob-3::after { background: var(--gold); }

        /* Blob 4 — seafoam, top right */
        .hero-blob-4 { width: 48%; padding-bottom: 48%; top: -8%; right: 0%; opacity: 0.15; }
        .hero-blob-4::after { background: var(--seafoam); }

        /* Blob 5 — fuchsia, bottom left */
        .hero-blob-5 { width: 40%; padding-bottom: 40%; bottom: 0%; left: 8%; opacity: 0.17; }
        .hero-blob-5::after { background: var(--fuchsia); }

        @media (max-width: 768px) {
          .hero-content { padding-top: 0 !important; }
          .hero-stats { padding-bottom: 0 !important; }
          .hero-blob-1 { opacity: 0.40; }
          .hero-blob-2 { opacity: 0.42; }
          .hero-blob-3 { opacity: 0.26; }
          .hero-blob-4 { opacity: 0.28; }
          .hero-blob-5 { opacity: 0.30; }
        }

      `}</style>
    </section>
  )
}
