const SVG_PROPS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 12,
  height: 12,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: { display: "inline-block", verticalAlign: "center", marginBottom: 1 },
}

export function ArrowRight() {
  return (
    <svg {...SVG_PROPS}>
      <line x1="2" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export function ArrowUpRight() {
  return (
    <svg {...SVG_PROPS}>
      <line x1="4" y1="20" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

export function DownloadIcon() {
  return (
    <svg {...SVG_PROPS}>
      <path d="M12 3v13" />
      <polyline points="7 11 12 16 17 11" />
      <path d="M3 21h18" />
      <line x1="3" y1="18" x2="3" y2="21" />
      <line x1="21" y1="18" x2="21" y2="21" />
    </svg>
  )
}

export function ExternalLinkIcon() {
  return (
    <svg {...SVG_PROPS}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
