import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="h-full wrapper purple">
      <div className="inner">
        <h2 className="font-fjord">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Parallels Desktop for Mac Product Pages"
            description="Revamped product pages to align with Apple's design."
            image="/images/projects/parallels-thumb.jpg"
            skills={["HTML", "CSS", "Bootstrap", "JavaScript"]}
          >
            <p>This project involved revamping the product pages for Parallels Desktop 19 for Mac to make it more visually cohesive with the Apple website, by implementing scrollable modal pop-ups with information specific to each use case. Further down the page are more cards the user can click on to reveal more information about various product features. The page is built entirely using Bootstrap with numerous style overrides. I also implemented a lazy loading technique on the images on the page so that the page loads faster, and images below the fold only as you scroll down, improving page speed.</p>
          </ProjectCard>

          <ProjectCard
            title="Alludo Website"
            description="Built various pages during a major rebrand."
            image="/images/projects/alludo-thumb.jpg"
            skills={["HTML", "CSS", "Bootstrap", "JavaScript"]}
          >
            <p>After a major corporate rebranding, I helped build several pages, including an animated homepage.</p>
            <p>⭐ The images and gradient change dynamically based on the time of day.</p>
            <a href="https://example.com" target="_blank" className="button">View Project</a>
          </ProjectCard>

          <ProjectCard
            title="Farm Website"
            description="Local farm website for an organic produce company."
            image="/images/projects/farm-thumb.jpg"
            skills={["HTML", "CSS"]}
          >
            <p>Built a simple yet engaging site for a local farm business.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" frameBorder="0" allowFullScreen></iframe>
            <a href="https://example.com" target="_blank" className="button">View Project</a>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
};

export default Projects;