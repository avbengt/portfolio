"use client"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { projects } from "@/lib/projects"
import ProjectCard from "./ProjectCard"
import FadeUp from "./FadeUp"

const FILTERS = ["All", "Work", "Personal", "Freelance"]

const FILTER_COLORS = {
  All: { bg: "var(--surface2)", color: "var(--ink)", border: "var(--border2)" },
  Work: { bg: "var(--violet4)", color: "var(--violet)", border: "var(--violet)" },
  Personal: { bg: "var(--seafoam4)", color: "var(--seafoam2)", border: "var(--seafoam)" },
  Freelance: { bg: "var(--fuchsia4)", color: "var(--fuchsia2)", border: "var(--fuchsia)" },
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter)

  return (
    <section
      id="projects"
      className="section-border"
      style={{ padding: "100px 0" }}
    >
      <div className="content-container">

        {/* Section label */}
        <FadeUp delay={0}>
          <div className="section-label-new" style={{ marginBottom: 16 }}>
            Selected work
          </div>
        </FadeUp>

        {/* Section heading + filters row */}
        <FadeUp delay={0.08}>
          <div
            className="projects-header"
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
              marginBottom: 36,
            }}
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
              Things I&apos;ve built.
            </h2>

            {/* Filter tabs */}
            <div
              style={{
                display: "flex",
                gap: 6,
                flexWrap: "wrap",
                flexShrink: 0,
              }}
            >
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 15,
                    fontWeight: 500,
                    padding: "5px 14px",
                    borderRadius: 999,
                    border: activeFilter === f
                      ? `1.5px solid ${FILTER_COLORS[f].border}`
                      : "1.5px solid var(--border)",
                    background: activeFilter === f ? FILTER_COLORS[f].bg : "transparent",
                    color: activeFilter === f ? FILTER_COLORS[f].color : "var(--muted)",
                    cursor: "pointer",
                    transition: "all 0.25s",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Grid */}
        <div ref={ref}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18,
            }}
            className="projects-grid"
          >
            <AnimatePresence mode="wait">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard
                    project={project}
                    index={i}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .projects-header { flex-direction: column; align-items: flex-start !important; }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
