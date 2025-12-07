"use client";
import { useEffect, useState } from "react";

export default function ScrollHandler() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState("intro"); // Default active section

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Wait for DOM to be ready
    const initializeScrollHandler = () => {
      const links = document.querySelectorAll("#sidebar nav ul li a");
      const sections = Array.from(links).map(link => {
        const targetId = link.getAttribute("href").slice(1);
        return document.getElementById(targetId);
      }).filter(section => section !== null); // Filter out null sections

      // Function to update active link based on scroll position
      const updateActiveLink = () => {
        if (isScrolling) return; // Prevent overriding during smooth scrolling

        let activeSectionIndex = -1;
        const viewportMiddle = window.innerHeight / 2;
        const scrollOffset = 100; // Offset to trigger active state earlier

        sections.forEach((section, index) => {
          if (!section) return;
          const rect = section.getBoundingClientRect();
          // Check if section is in view - section top is above middle (with offset) and section bottom is below middle
          if (rect.top <= viewportMiddle + scrollOffset && rect.bottom >= viewportMiddle - scrollOffset) {
            activeSectionIndex = index;
          }
        });

        // If no section is at the middle, find the closest one above the viewport middle
        if (activeSectionIndex === -1) {
          let closestIndex = -1;
          let closestDistance = Infinity;

          sections.forEach((section, index) => {
            if (!section) return;
            const rect = section.getBoundingClientRect();

            // Check if section is in viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              // Prefer sections that are above the middle
              if (rect.top <= viewportMiddle) {
                const distance = viewportMiddle - rect.top;
                if (distance < closestDistance) {
                  closestDistance = distance;
                  closestIndex = index;
                }
              }
            }
          });

          if (closestIndex !== -1) {
            activeSectionIndex = closestIndex;
          }
        }

        if (activeSectionIndex !== -1 && sections[activeSectionIndex]) {
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
      window.addEventListener("scroll", updateActiveLink, { passive: true });

      // Initial call to set active link on mount
      setTimeout(() => {
        updateActiveLink();
      }, 100);

      // Cleanup listeners on unmount
      return () => {
        links.forEach(link => {
          link.removeEventListener("click", handleClick);
        });
        window.removeEventListener("scroll", updateActiveLink);
      };
    };

    // Initialize with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(initializeScrollHandler, 100);

    return () => {
      clearTimeout(timeoutId);
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