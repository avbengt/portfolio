"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import FadeUp from "./FadeUp"
import Timeline from "./Timeline"
import { DownloadIcon } from "./Icons"


function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="section-border"
      style={{ padding: "100px 0" }}
    >
      <div className="content-container">

        {/* Section label */}
        <FadeUp delay={0}>
          <div className="section-label-new" style={{ marginBottom: 48 }}>
            About
          </div>
        </FadeUp>

        {/* Two-column: photo + bio */}
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Photo */}
          <FadeUp delay={0.05}>
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                borderRadius: 30,
                overflow: "hidden",
                background: "var(--surface2)",
                border: "1px solid var(--border)",
              }}
            >
              <Image
                src="/images/headshot.jpg"
                alt="Alissa"
                fill
                style={{ objectFit: "cover", filter: "saturate(0.8)" }}
                sizes="260px"
                priority
              />
            </div>
          </FadeUp>

          {/* Bio */}
          <div>
            <FadeUp delay={0.1}>
              <h2
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontWeight: 900,
                  fontSize: "clamp(36px, 4.5vw, 56px)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.03em",
                  color: "var(--ink)",
                  margin: "0 0 28px",
                }}
              >
                A dev born on <em style={{ color: "var(--seafoam)" }}>dial-up.</em>
              </h2>
            </FadeUp>

            <FadeUp delay={0.18}>
              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 18,
                  color: "var(--muted)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <p style={{ margin: 0 }}>
                  I built my first website at age 11 on a{" "}
                  <strong style={{ fontWeight: 600 }}>
                    56k dial-up connection
                  </strong>
                  . A friend introduced me to{" "}
                  <a
                    href="https://petz.miraheze.org/wiki/Petz_4"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                      transition: "color 0.25s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                  >
                    Dogz 4
                  </a>
                  , a computer game where you'd raise and breed virtual dogs and cats. There happened to be a pretty large online community of people who had built their own websites to show off their pets and put others up for "adoption" by visitors. That's how my interest in web development was sparked!
                </p>
                <p style={{ margin: 0 }}>
                  Over{" "}
                  <strong style={{ fontWeight: 600 }}>
                    13 years of professional front-end experience
                  </strong>{" "}
                  later, I&apos;ve shipped product pages, full rebrands, marketing campaigns, landing pages,
                  and full websites for companies ranging from{" "}
                  <strong style={{ fontWeight: 600 }}>
                    Corel
                  </strong>{" "}
                  and{" "}
                  <strong style={{ fontWeight: 600 }}>
                    Parallels
                  </strong>{" "}
                  to local small businesses.
                </p>
                <p style={{ margin: 0 }}>
                  There's something so satisfying about taking a blank file and turning it into something real. After all this time, that feeling hasn't worn off once.
                </p>
                <p style={{ margin: 0 }}>
                  These days I'm freelancing and building personal projects, usually with too many tabs open and an iced coffee getting watered down nearby. Got something you want to bring to life?{" "}
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      font: "inherit",
                      color: "var(--muted)",
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                      transition: "color 0.25s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                  >
                    Let&apos;s talk!
                  </button>
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.28}>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 32 }}>
                <motion.a href="/docs/alissa-bengtson-resume.pdf" target="_blank" className="btn-fuchsia">
                  Download résumé <DownloadIcon />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/alissa-bengtson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <img src="/images/icon-li.svg" width={16}></img> LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/avbengt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <img src="/images/icon-gh.svg" width={16}></img> GitHub
                </motion.a>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Full-width timeline */}
        <FadeUp delay={0.1}>
          <Timeline />
        </FadeUp>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .about-grid > div:first-child {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
