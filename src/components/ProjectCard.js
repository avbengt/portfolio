"use client"
import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLinkIcon } from "./Icons"

const BADGE_CLASS = {
  Work: "badge badge-work",
  Personal: "badge badge-personal",
  Freelance: "badge badge-freelance",
  WIP: "badge badge-wip",
}

const BADGE_HOVER_COLOR = {
  Work: "var(--violet)",
  Personal: "var(--seafoam)",
  Freelance: "var(--fuchsia)",
  WIP: "var(--gold)",
}

const EASE = [0.16, 1, 0.3, 1]

// Seafoam — languages and core web technologies
const SEAFOAM_SKILLS = new Set([
  "React", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript",
  "Vue", "Angular", "Svelte", "Node.js", "PHP", "Python", "Ruby",
  "Swift", "Kotlin", "Java",
])

// Fuchsia — design and creative tools
const FUCHSIA_SKILLS = new Set([
  "Figma", "Adobe Photoshop", "Photoshop", "Adobe XD", "XD",
  "Illustrator", "Adobe Illustrator", "Sketch", "Canva", "InVision",
  "Zeplin", "Framer", "Procreate", "Lightroom", "Adobe Lightroom",
])

// Violet — infrastructure, backend services, and supporting tools (also catch-all)
function getSkillVariant(skill) {
  if (SEAFOAM_SKILLS.has(skill)) return "seafoam"
  if (FUCHSIA_SKILLS.has(skill)) return "fuchsia"
  return "violet"
}

// ─── Sub-components ───────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
      <span style={{
        fontFamily: "var(--font-outfit)",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.13em",
        textTransform: "uppercase",
        color: "var(--muted2)",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}>
        {children}
      </span>
      <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
    </div>
  )
}

function BrowserFrame({ url, src, maxWidth = 580 }) {
  return (
    <div style={{
      width: "100%",
      maxWidth,
      borderRadius: "8px 8px 6px 6px",
      overflow: "hidden",
      border: "1px solid rgba(0,0,0,0.13)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
      flexShrink: 0,
    }}>
      {/* Chrome bar */}
      <div className="browser-chrome" style={{
        padding: "7px 10px",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}>
        <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div className="browser-url" style={{
          flex: 1,
          background: "var(--surface)",
          borderRadius: 4,
          padding: "2px 8px",
          fontSize: 11,
          fontFamily: "var(--font-outfit)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}>
          {url || ""}
        </div>
      </div>
      {/* Screenshot */}
      <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
        <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
      </div>
    </div>
  )
}

function PhoneFrame({ src, width = 200 }) {
  const [translatePx, setTranslatePx] = useState(null)
  const [hovered, setHovered] = useState(false)
  const containerRef = useRef(null)

  const handleImgLoad = (e) => {
    if (translatePx !== null) return
    const img = e.currentTarget
    const container = containerRef.current
    if (!container) return
    const containerH = container.offsetHeight
    const imgDisplayH = container.offsetWidth * (img.naturalHeight / img.naturalWidth)
    if (imgDisplayH > containerH * 1.5) {
      setTranslatePx(Math.round(imgDisplayH - containerH))
    }
  }

  // Stable animation name derived from src
  const animName = "phonePan" + src.replace(/[^a-zA-Z0-9]/g, "").slice(-20)
  const isPanning = translatePx !== null

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width,
        flexShrink: 0,
        background: "var(--ink)",
        borderRadius: 20,
        padding: "10px 6px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
      }}
    >
      {isPanning && (
        <style>{`
          @keyframes ${animName} {
            0%, 19%  { transform: translateY(0px); }
            81%, 100% { transform: translateY(-${translatePx}px); }
          }
        `}</style>
      )}
      <div style={{ width: 36, height: 4, background: "rgba(255,255,255,0.12)", borderRadius: 2 }} />
      <div
        ref={containerRef}
        style={{
          aspectRatio: "9/17",
          overflow: "hidden",
          borderRadius: 6,
          width: "100%",
          position: "relative",
        }}
      >
        <img
          src={src}
          alt=""
          onLoad={handleImgLoad}
          style={{
            display: "block",
            ...(isPanning ? {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "auto",
              animation: `${animName} 8s linear infinite`,
              animationPlayState: hovered ? "paused" : "running",
            } : {
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }),
          }}
        />
      </div>
      <div style={{ width: 36, height: 4, background: "rgba(255,255,255,0.12)", borderRadius: 2 }} />
    </div>
  )
}

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function ArrowButton({ direction, onClick, disabled }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={disabled ? undefined : onClick}
      aria-label={direction === "left" ? "Previous screenshot" : "Next screenshot"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        [direction === "left" ? "left" : "right"]: 12,
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: "none",
        background: hovered && !disabled ? "rgba(50,50,58,1)" : "rgba(50,50,58,0.75)",
        cursor: disabled ? "default" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#f0eee8",
        opacity: disabled ? 0.3 : 1,
        transition: "opacity 0.25s, background 0.25s",
        zIndex: 2,
        flexShrink: 0,
      }}
    >
      {direction === "left" ? <ChevronLeft /> : <ChevronRight />}
    </button>
  )
}

function WeatherPhonesPanel({ phoneScreenshots }) {
  return (
    <div style={{
      background: "var(--surface2)",
      padding: "32px 28px 40px",
      borderBottom: "1px solid var(--border)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      gap: 14,
    }}>
      {phoneScreenshots.map(({ src, city }) => (
        <div key={city} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}>
          <div style={{
            background: "#0e0e14",
            borderRadius: 22,
            padding: "12px 8px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
            width: 140,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <div style={{
              width: 30,
              height: 3,
              background: "rgba(255,255,255,0.1)",
              borderRadius: 2,
              marginBottom: 9,
            }} />
            <img src={src} alt={city} style={{
              width: "100%",
              height: "auto",
              borderRadius: 5,
              display: "block",
            }} />
            <div style={{
              width: 30,
              height: 3,
              background: "rgba(255,255,255,0.1)",
              borderRadius: 2,
              marginTop: 9,
            }} />
          </div>
          <span style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 600,
            fontSize: 9,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: "var(--muted2)",
          }}>
            {city}
          </span>
        </div>
      ))}
    </div>
  )
}

function ScreenshotPanel({ project }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const { screenshotType, screenshots, desktopScreenshot, mobileScreenshot, url } = project
  const showControls = (screenshotType === "desktop" || screenshotType === "mobile")
    && screenshots && screenshots.length > 1

  if (screenshotType === "weatherPhones" && project.phoneScreenshots) {
    return <WeatherPhonesPanel phoneScreenshots={project.phoneScreenshots} />
  }

  return (
    <div style={{
      background: "var(--surface2)",
      padding: "24px 40px",
      borderBottom: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      position: "relative",
    }}>
      {showControls && (
        <ArrowButton
          direction="left"
          disabled={activeIdx === 0}
          onClick={() => setActiveIdx((i) => i - 1)}
        />
      )}

      {screenshotType === "desktop" && screenshots && (
        <BrowserFrame url={url} src={screenshots[activeIdx]} />
      )}

      {screenshotType === "mobile" && screenshots && (
        <PhoneFrame src={screenshots[activeIdx]} />
      )}

      {screenshotType === "mixed" && (
        <div style={{
          display: "flex",
          gap: 20,
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
        }}>
          {desktopScreenshot && <BrowserFrame url={url} src={desktopScreenshot} maxWidth={460} />}
          {mobileScreenshot && <PhoneFrame src={mobileScreenshot} width={200} />}
        </div>
      )}

      {showControls && (
        <ArrowButton
          direction="right"
          disabled={activeIdx === screenshots.length - 1}
          onClick={() => setActiveIdx((i) => i + 1)}
        />
      )}

      {showControls && (
        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 16 }}>
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              aria-label={`Screenshot ${i + 1}`}
              style={{
                height: 5,
                width: i === activeIdx ? 18 : 6,
                background: i === activeIdx ? "var(--ink)" : "var(--muted2)",
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.2s ease, background 0.2s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function SkillTag({ skill }) {
  const [hovered, setHovered] = useState(false)
  const variant = getSkillVariant(skill)

  const STYLES = {
    fuchsia: {
      border: "1px solid var(--fuchsia3)",
      color: "var(--fuchsia2)",
      hoverBg: "var(--fuchsia4)",
      hoverColor: "var(--fuchsia2)",
    },
    violet: {
      border: "1px solid var(--violet3)",
      color: "var(--violet)",
      hoverBg: "var(--violet4)",
      hoverColor: "var(--violet)",
    },
    seafoam: {
      border: "1px solid var(--seafoam3)",
      color: "var(--seafoam2)",
      hoverBg: "var(--seafoam4)",
      hoverColor: "var(--seafoam2)",
    },
  }

  const s = STYLES[variant]

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-outfit)",
        fontSize: 14,
        fontWeight: 500,
        padding: "3px 10px",
        borderRadius: 999,
        border: s.border,
        color: hovered ? s.hoverColor : s.color,
        background: hovered ? s.hoverBg : "transparent",
        cursor: "default",
        transition: "background 0.25s, color 0.25s",
        display: "inline-block",
      }}
    >
      {skill}
    </span>
  )
}

// ─── Modal ────────────────────────────────────────────────────

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  if (typeof window === "undefined") return null

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.4, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--surface)",
          borderRadius: 16,
          overflow: "hidden",
          width: "100%",
          maxWidth: 1000,
          maxHeight: "94vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Floating close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            zIndex: 10,
            background: "rgba(0,0,0,0.38)",
            border: "none",
            borderRadius: 999,
            padding: "4px 12px",
            color: "white",
            fontSize: 15,
            fontFamily: "var(--font-outfit)",
            fontWeight: 500,
            cursor: "pointer",
            lineHeight: 1.6,
            transition: "background 0.25s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.58)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.38)")}
        >
          ✕
        </button>

        {/* Screenshot panel */}
        <ScreenshotPanel project={project} />

        {/* Details panel */}
        <div className="modal-details-scroll" style={{ flex: 1, overflowY: "auto", padding: "20px 28px 24px" }}>

          {/* Tags row */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
            <span className={BADGE_CLASS[project.type] || "badge badge-work"}>
              {project.type}
            </span>
            {project.note && (
              <span className="badge badge-wip">
                Work in progress
              </span>
            )}
          </div>

          {/* Title */}
          <h2 style={{
            fontFamily: "var(--font-fraunces)",
            fontWeight: 900,
            fontSize: 27,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
            margin: "0 0 18px",
            lineHeight: 1.15,
          }}>
            {project.title}
          </h2>

          {/* About */}
          {project.details && project.details.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <SectionLabel>About this project</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {project.details.map((para, i) => (
                  <p key={i} style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 15,
                    color: "var(--muted)",
                    margin: 0,
                  }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <SectionLabel>Highlights</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {project.highlights.map((h, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                    <div style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--violet)",
                      flexShrink: 0,
                      marginTop: 6,
                    }} />
                    <span style={{
                      fontFamily: "var(--font-outfit)",
                      fontSize: 15,
                      color: "var(--muted)",
                    }}>
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills & tools */}
          {project.skills && project.skills.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <SectionLabel>Skills &amp; tools</SectionLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {project.skills.map((skill) => (
                  <SkillTag key={skill} skill={skill} />
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {(project.link || project.github) && (
            <div>
              <SectionLabel>Links</SectionLabel>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-fuchsia"
                    style={{ padding: "8px 16px", fontSize: 15, textDecoration: "none" }}
                  >
                    View live site <ExternalLinkIcon />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 16px",
                      borderRadius: 999,
                      background: "transparent",
                      color: "var(--ink)",
                      fontFamily: "var(--font-outfit)",
                      fontSize: 15,
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "border-color 0.25s",
                      border: "1.5px solid var(--border2)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--ink)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border2)")}
                  >
                    <img src="/images/icon-gh.svg" width={16}></img> View on GitHub
                  </a>
                )}
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}

// ─── Card ─────────────────────────────────────────────────────

export default function ProjectCard({ project, index }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <div
        style={{
          background: "var(--surface)",
          border: `1px solid ${hovered ? (BADGE_HOVER_COLOR[project.type] ?? "var(--fuchsia)") : "var(--border)"}`,
          borderRadius: 10,
          overflow: "hidden",
          cursor: "pointer",
          transition: "border-color 0.2s",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
      >
        {/* Thumbnail */}
        <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--surface2)", overflow: "hidden", flexShrink: 0 }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            sizes="(max-width: 768px) 100vw, 380px"
          />
        </div>

        {/* Body */}
        <div style={{ padding: "16px 18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
            <span className="card-number" style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 900,
              fontSize: 28,
              lineHeight: 1,
              userSelect: "none",
              marginRight: "10px",
            }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={BADGE_CLASS[project.type] || "badge badge-work"}>
              {project.type}
            </span>
            {project.note && (
              <span className={BADGE_CLASS[project.note] || "badge badge-wip"}>
                WIP
              </span>
            )}
          </div>

          <h3 style={{ fontFamily: "var(--font-fraunces)", fontWeight: 700, fontSize: 18, color: "var(--ink)", margin: "0 0 7px", lineHeight: 1.3 }}>
            {project.title}
          </h3>
          <p style={{ fontFamily: "var(--font-outfit)", fontSize: 17, color: "var(--muted)", margin: 0, flex: 1 }}>
            {project.description}
          </p>

          <div style={{ marginTop: 14, fontFamily: "var(--font-outfit)", fontSize: 15, fontWeight: 500, color: hovered ? "var(--ink)" : "var(--muted)", transition: "color 0.25s" }}>
            View details <ArrowRight />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <ProjectModal project={project} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>

      <style>{`
        .modal-details-scroll {
          scrollbar-width: thin;
          scrollbar-color: var(--fuchsia3) transparent;
        }
        .modal-details-scroll::-webkit-scrollbar { width: 4px; }
        .modal-details-scroll::-webkit-scrollbar-thumb { background: var(--fuchsia3); border-radius: 2px; }
        .modal-details-scroll::-webkit-scrollbar-track { background: transparent; }
      `}</style>
    </>
  )
}
