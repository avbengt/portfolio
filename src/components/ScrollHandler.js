"use client"; 
import { useEffect, useState } from "react";

export default function ScrollHandler() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState("intro"); // Default active section

  useEffect(() => {
    if (typeof window === "undefined") return;

    const links = document.querySelectorAll("#sidebar nav ul li a");
    const sections = Array.from(links).map(link => {
      const targetId = link.getAttribute("href").slice(1);
      return document.getElementById(targetId);
    });

    // Function to update active link based on scroll position
    const updateActiveLink = () => {
      if (isScrolling) return; // Prevent overriding during smooth scrolling

      let activeSectionIndex = -1;

      sections.forEach((section, index) => {
        const rect = section?.getBoundingClientRect();
        if (rect && rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          activeSectionIndex = index;
        }
      });

      if (activeSectionIndex !== -1) {
        setActiveLink(sections[activeSectionIndex].id);
      }
    };

    // Function to smoothly scroll to a section
    const handleClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      setIsScrolling(true); // Lock active state
      setActiveLink(targetId); // Set clicked link as active

      window.scrollTo({
        top: targetElement.offsetTop - (window.innerWidth < 1280 ? 79 : 0),
        behavior: "smooth",
      });

      // Unlock after scrolling is done
      setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    };

    // Attach click event to nav links
    links.forEach(link => {
      link.addEventListener("click", handleClick);
    });

    // Attach scroll event
    window.addEventListener("scroll", updateActiveLink);

    // Cleanup listeners on unmount
    return () => {
      links.forEach(link => {
        link.removeEventListener("click", handleClick);
      });
      window.removeEventListener("scroll", updateActiveLink);
    };
  }, [isScrolling]);

  useEffect(() => {
    // Ensure the active link is visually updated
    document.querySelectorAll("#sidebar nav ul li a").forEach(link => {
      if (link.getAttribute("href").slice(1) === activeLink) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, [activeLink]);

  return null;
}