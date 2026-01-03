"use client";
import ProjectCard from "./ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Projects = () => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  // More lenient margin for mobile, less strict amount threshold
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.1 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Fallback: if section is already visible on mount (mobile), animate it
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkInitialVisibility = () => {
      if (ref.current && !hasAnimated) {
        const rect = ref.current.getBoundingClientRect();
        // Check if section is in viewport (more lenient check)
        const isVisible = rect.top < window.innerHeight + 200 && rect.bottom > -200;
        if (isVisible) {
          setHasAnimated(true);
        }
      }
    };

    // Check immediately and after delays to catch different scenarios
    checkInitialVisibility();
    const timeout1 = setTimeout(checkInitialVisibility, 100);
    const timeout2 = setTimeout(checkInitialVisibility, 500);
    const timeout3 = setTimeout(checkInitialVisibility, 1000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="h-full wrapper purple" ref={ref}>
      <div className="inner">
        <motion.h2
          className="font-fjord"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          style={{ minHeight: "200px" }} // Ensure space is reserved even if hidden
        >
          <ProjectCard
            note="Work-in-Progress"
            title="AOL Instant Messenger Revival"
            description="A faithful, modern web re-creation of classic AIM with draggable windows, taskbar toggles, and nostalgic Windows XP styling."
            image="/images/projects/aim-thumb.jpg"
            skills={[
              "React",
              "Next.js",
              "Tailwind CSS",
              "Firebase (Auth/Firestore)",
              "HTML",
              "CSS",
              "JavaScript",
              "Cursor",
              "Git",
              "Vercel",
            ]}
            leftColumnContent={
              <>
                <p><a href="https://aim-revival.alissa.dev/" target="_blank">View live demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon w-3 h-3" /></a></p>
                <p>
                  This ongoing project recreates the look and feel of AOL Instant Messenger for the web.
                  It includes a draggable Login window and Buddy List, a taskbar button
                  that reflects active state and toggles visibility, and chat windows that currently pop
                  out via <code>window.open()</code> to mimic classic AIM behavior.
                </p>

                <p className="mt-2">
                  I built this project mostly out of nostalgia. AIM was such a huge part of my childhood
                  and I just loved everything about it. Re-creating it now is my way of bringing back that
                  classic experience I miss so much, while having fun experimenting with React, Next.js,
                  and modern web tools.
                </p>

                <p className="mt-2">
                  I use <strong>Cursor</strong> (AI-powered editor) to speed up development, generate snippets, and debug tricky UI behavior (dragging bounds, window focus, etc.). Firebase (Auth + Firestore) is used for sign-in, presence, and message history. <a href="https://botoxparty.github.io/XP.css/" className="body-link" target="_blank">XP.css</a> is used for the classic Windows XP styling.
                </p>

                <h5 className="font-normal mb-1 mt-4">Core highlights:</h5>
                <div className="space-y-1 mt-2 text-sm leading-6">
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li className="mb-0">Draggable windows with bounds-clamping to keep them on screen</li>
                    <li className="mb-0">Buddy List → double-click opens chats in separate pop-out windows</li>
                    <li className="mb-0">Window focus/stacking states (active window gets topmost z-index)</li>
                    <li className="mb-0">Nostalgic UI details</li>
                    <li className="mb-0">Planned: Classic AIM sounds, emoticons, buddy icons and profiles</li>
                  </ul>
                </div>

                <h5 className="font-normal mb-1 mt-4">Skills and tools used:</h5>
                <div className="flex flex-wrap mt-2 gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "Firebase (Auth/Firestore)",
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Cursor",
                    "Git",
                    "Vercel",
                  ].map((skill, i) => (
                    <span key={i} className="skill px-2 py-1 bg-gray-800 text-white rounded-md">{skill}</span>
                  ))}
                </div>
              </>
            }
          >
            <div className="text-center">
              <img src="/images/projects/aim/aim-1.png" alt="AIM Revival Login Window" />
              <p className="caption">
                AIM Revival login screen - modern code meets retro XP design.
                <span>
                  <a href="https://aim-revival.alissa.dev" target="_blank" rel="noreferrer">
                    View live demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon w-3 h-3" />
                  </a>
                </span>
              </p>
            </div>
          </ProjectCard>

          <ProjectCard
            note="Work-in-Progress"
            title="Weather App"
            description="A fast, elegant weather app with city/ZIP search, geolocation, hourly/day forecasts, unit toggles, and detailed conditions."
            image="/images/projects/weather-thumb.jpg"
            skills={[
              "Next.js",
              "React",
              "Tailwind CSS",
              "OpenWeather One Call API",
              "Google Places Autocomplete",
              "Geolocation API",
              "JavaScript",
              "Git",
              "Vercel",
            ]}
            leftColumnContent={
              <>

                <p><a href="https://weather.alissa.dev/" target="_blank">View live demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon w-3 h-3" /></a></p>
                <p>
                  A clean, responsive weather app built with Next.js and Tailwind 4. Users can search by city or ZIP with Google Places Autocomplete, or simply allow geolocation to fetch local conditions instantly. The app displays current conditions, hourly and 7-day forecasts, dew point, UV index, humidity, pressure, wind, and sunrise/sunset. Also included are a F°/C° toggle, beautiful weather condition images (created by <a href="https://stock.adobe.com/contributor/205324907/4zevar" target="_blank" rel="noreferrer" className="body-link">4zevar</a>), and a full moon-phase system that maps OpenWeather's numeric phase to readable labels and SVGs.
                </p>

                <p className="mt-2">
                  The UI changes by time of day with gentle gradient backgrounds, and the whole experience is tuned for both mobile and desktop.
                </p>

                <h5 className="font-normal mb-1 mt-4">Highlights:</h5>
                <div className="space-y-1 mt-2 text-sm leading-6">
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    <li className="mb-0">Geolocation detection for instant local weather</li>
                    <li className="mb-0">Search with Google Places Autocomplete (city or ZIP)</li>
                    <li className="mb-0">OpenWeather One Call: current, hourly, 7-day</li>
                    <li className="mb-0">Unit toggle between Celsius and Fahrenheit</li>
                    <li className="mb-0">Moon phase mapping → readable labels and custom SVG icons</li>
                    <li className="mb-0">Time-of-day gradient system via hourly CSS classes</li>
                    <li className="mb-0">Mobile-first UX</li>
                  </ul>
                </div>

                <h5 className="font-normal mb-1 mt-4">Skills and tools used:</h5>
                <div className="flex flex-wrap mt-2 gap-2">
                  {[
                    "Next.js",
                    "React",
                    "Tailwind CSS",
                    "OpenWeather One Call API",
                    "Google Places Autocomplete",
                    "Geolocation API",
                    "JavaScript",
                    "Git",
                    "Vercel",
                  ].map((skill, i) => (
                    <span key={i} className="skill px-2 py-1 bg-gray-800 text-white rounded-md">{skill}</span>
                  ))}
                </div>
              </>
            }
          >
            {/* Right Column Content (Scrollable Section) */}
            <div className="text-center flex flex-col items-center">
              <img src="/images/projects/weather/weather-1.png" alt="Weather App Desktop" />
              <p className="caption">
                Desktop view, daytime color scheme
              </p>
              <img src="/images/projects/weather/weather-2.png" className="w-1/2" alt="Weather App Mobile" />
              <p className="caption">
                Mobile view, sunset color scheme
                <span className="block"><a href="https://weather.alissa.dev/" target="_blank">View live demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon w-3 h-3" /></a></span></p>
            </div>
          </ProjectCard>

          <ProjectCard
            title="Parallels Desktop for Mac Product&nbsp;Pages"
            description="Revamped product pages to align with Apple's design."
            image="/images/projects/parallels-thumb.jpg"
            skills={["HTML", "CSS", "JavaScript", "Bootstrap", "Django", "Git", "Jenkins"]}
            leftColumnContent={(
              <>
                <p>This project involved revamping the product pages for Parallels Desktop 19 for Mac to make it more visually cohesive with the Apple website, by implementing scrollable modal pop-ups with information specific to each use case.</p>
                <p>Links to live versions of each page are under each thumbnail.</p>

                <h5 className="font-normal mb-1">Skills and tools used:</h5>
                <div className="flex flex-wrap mt-2">
                  {["HTML", "CSS", "JavaScript", "Bootstrap", "Django", "Git", "Jenkins"].map((skill, i) => (
                    <span key={i} className="skill px-2 py-1 bg-gray-800 text-white rounded-md">{skill}</span>
                  ))}
                </div>
              </>
            )}
          >
            {/* Right Column Content (Scrollable Section) */}
            <div className="text-center">
              <img src="../../images/projects/parallels/parallels-1.png" />
              <p className="caption">Parallels Desktop 19 for Mac
                <span><a href="https://www.parallels.com/products/desktop/" target="_blank">View live site <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon w-3 h-3" /></a></span></p>
              <img src="../../images/projects/parallels/parallels-2.png" />
              <p className="caption">Parallels Desktop 19 for Mac Pro Edition
                <span><a href="https://www.parallels.com/products/desktop/pro/" target="_blank">View live site <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon w-3 h-3" /></a></span></p>
              <img src="../../images/projects/parallels/parallels-3.png" />
              <p className="caption">Parallels Desktop 19 for Mac Business Edition
                <span><a href="https://www.parallels.com/products/business/" target="_blank">View live site <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon w-3 h-3" /></a></span></p>
            </div>
          </ProjectCard>

          <ProjectCard
            title="Alludo Website"
            description="Built various pages during a major rebrand."
            image="/images/projects/alludo-thumb.jpg"
            skills={["HTML", "CSS", "JavaScript", "Bootstrap", "Git", "Jenkins"]}
            leftColumnContent={(
              <>
                <p>After a major corporate rebranding, I was tasked with building out various pages of the Alludo company website, including the homepage, which features a series of animations as you scroll down the page. These animations were built with CSS keyframes. The images and color gradient in the hero also change depending on the time of day you view the site.</p>
                <p><a href="https://web.archive.org/web/20250222033511/https://www.alludo.com/en/" target="_blank">View archived site <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon w-3 h-3" /></a></p>

                <h5 className="font-normal mb-1">Skills and tools used:</h5>
                <div className="flex flex-wrap mt-2">
                  {["HTML", "CSS", "Bootstrap", "JavaScript", "Git", "Jenkins"].map((skill, i) => (
                    <span key={i} className="skill px-2 py-1 bg-gray-800 text-white rounded-md">{skill}</span>
                  ))}
                </div>
              </>
            )}
          >
            {/* Right Column Content (Scrollable Section) */}
            <div className="text-center">
              <img src="../../images/projects/alludo/alludo-1.png" />
              <p className="caption">Alludo Homepage (Morning)</p>
              <img src="../../images/projects/alludo/alludo-2.png" />
              <p className="caption">Alludo Homepage (Mid-day)</p>
              <img src="../../images/projects/alludo/alludo-3.png" />
              <p className="caption">Alludo Homepage (Night)</p>
            </div>
          </ProjectCard>

          <ProjectCard
            title="Farm Website"
            description="Local farm website refresh."
            image="/images/projects/farm-thumb.jpg"
            skills={["HTML", "CSS", "JavaScript", "Adobe Photoshop"]}
            leftColumnContent={(
              <>
                <p>Responsive website built for a local farm. This was a refresh of an existing website. The goal was to bring the appearance and functionality more up to date, as well as make it responsive for mobile users.</p>
                <p>This website is available to view on GitHub:</p>
                <a href="https://github.com/avbengt/cold-spring-brook-farm" target="_blank" className="no-underline">
                  <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.75rem" }} className="icon-social no-underline" /></a>

                <h5 className="font-normal mb-1">Skills and tools used:</h5>
                <div className="flex flex-wrap mt-2">
                  {["HTML", "CSS", "JavaScript", "Adobe Photoshop"].map((skill, i) => (
                    <span key={i} className="skill px-2 py-1 bg-gray-800 text-white rounded-md">{skill}</span>
                  ))}
                </div>
              </>
            )}
          >

            {/* Right Column Content (Scrollable Section) */}
            <div className="text-center flex flex-col items-center justify-items-center">
              <img src="../../images/projects/farm/farm-1.png" />
              <p className="caption">Homepage (Desktop)</p>
              <img src="../../images/projects/farm/farm-2.png" className="max-w-full sm:max-w-[400px]" />
              <p className="caption">Homepage (Mobile)</p>
              <img src="../../images/projects/farm/farm-3.png" className="max-w-full sm:max-w-[400px]" />
              <p className="caption">Hamburger Menu (Mobile)</p>
            </div>
          </ProjectCard>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;