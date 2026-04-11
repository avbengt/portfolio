"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DownloadIcon } from "./Icons"

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Brands", id: "brands" },
  { label: "Kind Words", id: "recs" },
  { label: "Contact", id: "contact" },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function Nav() {
  const [active, setActive] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scrolled state
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handle, { passive: true })
    handle()
    return () => window.removeEventListener("scroll", handle)
  }, [])

  // Scroll-based active section tracking
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id)
    const update = () => {
      const center = window.scrollY + window.innerHeight / 2
      let closest = ids[0]
      let closestDist = Infinity
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const mid = el.offsetTop + el.offsetHeight / 2
        const dist = Math.abs(mid - center)
        if (dist < closestDist) {
          closestDist = dist
          closest = id
        }
      })
      setActive(closest)
    }
    window.addEventListener("scroll", update, { passive: true })
    update()
    return () => window.removeEventListener("scroll", update)
  }, [])

  // Close mobile menu on scroll
  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    window.addEventListener("scroll", close, { passive: true })
    return () => window.removeEventListener("scroll", close)
  }, [menuOpen])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    setTimeout(() => scrollTo(id), 10)
  }

  return (
    <>
      <nav className={scrolled ? "nav-scrolled" : "nav-top"}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        <div className="content-container" style={{ display: "flex", alignItems: "center", height: 60 }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontFamily: "var(--font-fraunces), ui-serif, Georgia, serif",
              fontStyle: "italic",
              fontWeight: 900,
              fontSize: 26,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: 0,
              marginRight: "auto",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "var(--ink)" }}>alissa</span>
            <span style={{ color: "var(--seafoam)" }}>.dev</span>
          </button>

          {/* Desktop nav links */}
          <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 0 }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link${active === item.id ? " nav-link-active" : ""}`}
                style={{
                  fontFamily: "var(--font-outfit), ui-sans-serif, sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: active === item.id ? "var(--ink)" : "var(--muted)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "6px 12px",
                  position: "relative",
                  transition: "color 0.25s",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
                {active === item.id && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "var(--gold)",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="nav-divider" style={{
            width: 1,
            height: 34.25,
            background: "var(--border2)",
            margin: "0px 22px 0 10px",
            flexShrink: 0,
          }} />

          {/* Utility controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            {/* Résumé */}
            <a
              href="/docs/alissa-bengtson-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-btn"
            >
              Résumé <DownloadIcon />
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              style={{
                display: "none",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
                width: 36,
                height: 36,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
                flexShrink: 0,
              }}
            >
              <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} transition={{ duration: 0.2 }} style={{ display: "block", width: 20, height: 2, background: "var(--ink)", borderRadius: 2, transformOrigin: "center" }} />
              <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} transition={{ duration: 0.15 }} style={{ display: "block", width: 20, height: 2, background: "var(--ink)", borderRadius: 2 }} />
              <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} transition={{ duration: 0.2 }} style={{ display: "block", width: 20, height: 2, background: "var(--ink)", borderRadius: 2, transformOrigin: "center" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: 61,
              left: 0,
              right: 0,
              zIndex: 49,
              background: "var(--nav-bg)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              padding: "8px 0 12px",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-mobile-item${active === item.id ? " active" : ""}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/docs/alissa-bengtson-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-mobile-item"
              style={{ textDecoration: "none" }}
            >
              Résumé <DownloadIcon />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link:not(.nav-link-active):hover { color: var(--ink) !important; }
        .nav-top {
          background: transparent;
          border-bottom: 1px solid transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }
        .nav-scrolled {
          background: rgba(16,2,24,0.88);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        @media (max-width: 768px) {
          .nav-links    { display: none !important; }
          .nav-divider  { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-resume-btn { display: none !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
        }
        .nav-resume-btn {
          font-family: var(--font-outfit), ui-sans-serif, sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          background: var(--fuchsia);
          border: none;
          border-radius: 999px;
          padding: 7px 16px;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.25s;
          white-space: nowrap;
        }
        .nav-resume-btn:hover {
          background: var(--violet2);
        }
        .nav-mobile-item {
          font-family: var(--font-outfit), ui-sans-serif, sans-serif;
          font-size: 18px;
          font-weight: 400;
          color: var(--muted);
          background: none;
          border: none;
          padding: 12px 24px;
          text-align: left;
          cursor: pointer;
          width: 100%;
          transition: color 0.25s, background 0.25s;
        }
        .nav-mobile-item:hover, .nav-mobile-item:active {
          color: var(--ink);
          background: var(--surface2);
        }
        .nav-mobile-item.active {
          color: var(--fuchsia);
          font-weight: 600;
        }
      `}</style>
    </>
  )
}
