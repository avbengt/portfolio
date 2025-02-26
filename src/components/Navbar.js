"use client"; // Required for Next.js interactive components

import { useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <section id="sidebar">
            <div className="inner">
            <a href="#intro" className="logo"><span className="font-fjord">alissa.dev</span></a>
                <nav>
                    <ul className="uppercase">
                        <li><a href="#intro" className="intro scrolly active">Welcome</a></li>
                        <li><a href="#projects" className="projects scrolly">Projects</a></li>
                        <li><a href="#experience" className="experience scrolly">Brands</a></li>
                        <li><a href="#recommendations" className="recommendations scrolly">Recommendations</a></li>
                    </ul>
                </nav>
            </div>
    </section>
  );
}