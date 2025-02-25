import ProjectCard from "./ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <section id="projects" className="h-full wrapper purple">
      <div className="inner">
        <h2 className="font-fjord">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
          {/* First Project */}
          <ProjectCard
            title="Parallels Desktop for Mac Product Pages"
            description="Revamped product pages to align with Apple's design."
            image="/images/projects/parallels-thumb.jpg"
            skills={["HTML", "CSS", "JavaScript", "Bootstrap", "Git", "Jenkins"]}
            leftColumnContent={(
              <>
                <p>This project involved revamping the product pages for Parallels Desktop 19 for Mac to make it more visually cohesive with the Apple website, by implementing scrollable modal pop-ups with information specific to each use case.</p>
                <p>Further down the page are cards the user can click on to reveal more information about various product features.</p>
                <p>The page is built entirely using Bootstrap with numerous style overrides. I also implemented a lazy loading technique on the images on the page so that the page loads faster, and images below the fold only load as you scroll down, improving page speed.</p>

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

          {/* Second Project */}
          <ProjectCard
            title="Alludo Website"
            description="Built various pages during a major rebrand."
            image="/images/projects/alludo-thumb.jpg"
            skills={["HTML", "CSS", "JavaScript", "Bootstrap", "Git", "Jenkins"]}
            leftColumnContent={(
              <>
                <p>After a major corporate rebranding, I was tasked with building out various pages of the Alludo company website, including the homepage, which features a series of animations as you scroll down the page. These animations were built with CSS keyframes.</p>
                <p>A "hidden" feature of this page is that the images and color gradient in the hero change depending on the time of day you view it. This functionality was built using JavaScript.</p>
                <p><a href="https://www.alludo.com/" target="_blank">View live site <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon w-3 h-3" /></a></p>

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

          {/* Third Project */}
          <ProjectCard
            title="Farm Website"
            description="Local farm website for an organic produce company."
            image="/images/projects/farm-thumb.jpg"
            skills={["HTML", "CSS", "JavaScript", "Adobe Photoshop"]}
            leftColumnContent={(
              <>
                <p>Responsive website built for a local farm. This was a refresh of an existing website. The goal was to bring the appearance and functionality more up to date, as well as make it responsive for mobile users.</p>
                <a href="https://github.com/avbengt/cold-spring-brook-farm" className="no-underline">
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
            <div className="text-center justify-items-center">
              <img src="../../images/projects/farm/farm-1.png" />
              <p className="caption">Homepage (Desktop)</p>
              <img src="../../images/projects/farm/farm-2.png" className="max-w-full sm:max-w-[400px]" />
              <p className="caption">Homepage (Mobile)</p>
              <img src="../../images/projects/farm/farm-3.png" className="max-w-full sm:max-w-[400px]" />
              <p className="caption">Hamburger Menu (Mobile)</p>
            </div>
          </ProjectCard>

        </div>
      </div>
    </section>
  );
};

export default Projects;