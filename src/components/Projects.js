import ProjectCard from "./ProjectCard";

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

                <h4 className="mt-4">Skills and tools used:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["HTML", "CSS", "Bootstrap", "JavaScript", "Git", "Jenkins"].map((skill, i) => (
                    <span key={i} className="skill px-2 py-1 bg-gray-800 text-white rounded-md">{skill}</span>
                  ))}
                </div>
              </>
            )}
          >
            {/* Right Column Content (Scrollable Section) */}
            <div>
              <img src="../../images/projects/parallels/parallels-1.png" />
              <img src="../../images/projects/parallels/parallels-2.png" />
              <img src="../../images/projects/parallels/parallels-3.png" />
              <h2 className="text-lg font-bold">Details</h2>
              <p className="mb-4">This section contains more content...</p>
            </div>
          </ProjectCard>

          {/* Second Project */}
          <ProjectCard
            title="Alludo Website"
            description="Built various pages during a major rebrand."
            image="/images/projects/alludo-thumb.jpg"
            skills={["HTML", "CSS", "JavaScript", "Bootstrap", "Git", "Jenkins"]}
          >
            {/* Right Column Content (Scrollable Section) */}
            <div>
              <h2 className="text-lg font-bold">Details</h2>
              <p className="mb-4">After a major corporate rebranding, I helped build several pages, including an animated homepage.</p>
              <p>⭐ The images and gradient change dynamically based on the time of day.</p>
              <div className="space-y-4">
                {Array(20).fill(0).map((_, i) => (
                  <p key={i} className="p-2 border rounded-md">
                    Additional project details {i + 1}
                  </p>
                ))}
              </div>
            </div>
          </ProjectCard>

          {/* Third Project */}
          <ProjectCard
            title="Farm Website"
            description="Local farm website for an organic produce company."
            image="/images/projects/farm-thumb.jpg"
            skills={["HTML", "CSS", "JavaScript"]}
          >
            {/* Right Column Content (Scrollable Section) */}
            <div>
              <h2 className="text-lg font-bold">Details</h2>
              <p>Built a simple yet engaging site for a local farm business.</p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <a href="https://example.com" target="_blank" className="button">
                View Project
              </a>
            </div>
          </ProjectCard>

        </div>
      </div>
    </section>
  );
};

export default Projects;