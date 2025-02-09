"use client";
import { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import '../styles/globals.css';


export default function Home() {
  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  return (
			<div id="wrapper">
				<section id="intro" className="wrapper style1 fullscreen fade-up">
					<div className="inner">
						<h1 className="font-fjord mb-0">Hi, I'm <span className="nobreak">Alissa Bengtson!</span></h1>
						<h2 className="font-fjord">Front-End Web Developer</h2>					
						<div className="socials mt-5 mb-8">
							<div className="flex items-center space-x-6">
							<a href="https://www.linkedin.com/in/alissa-bengtson/" target="_blank">
							<FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.75rem" }} className="icon-social" />
							</a>

							<a href="https://github.com/avbengt" target="_blank">
							<FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.75rem" }} className="icon-social" />
							</a>

							<a href="https://codepen.io/avbengt" target="_blank">
							<FontAwesomeIcon icon={faCodepen} style={{ fontSize: "1.75rem" }} className="icon-social" />
							</a>
							</div>
						</div>

						<p>I'm a passionate front-end web developer with over 13 years of experience creating user-friendly, visually appealing, and responsive websites. I specialize in transforming designs into functional and seamless digital experiences.</p>
						<a href="/docs/alissa-bengtson-resume.pdf" target="_blank" className="button flex items-center space-x-2">
							Get resume <span className="icon-dl"></span>
						</a>
					</div>
				</section>
					
				<section id="projects" className="h-full wrapper style2">
					<div className="inner">
						<h2 className="font-fjord">Projects</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-gray-50/15 px-8 py-10 rounded-md">
								<h4 className="font-medium">Parallels Desktop for Mac Product Pages</h4>
								<p className="font-normal text-md">This project involved revamping the product pages for Parallels Desktop 19 for Mac to make it more visually cohesive with the Apple website, by implementing scrollable modal pop-ups with information specific to each use case. Further down the page are more cards the user can click on to reveal more information about various product features. The page is built entirely using Bootstrap with numerous style overrides. I also implemented a lazy loading technique on the images on the page so that the page loads faster, and images below the fold only as you scroll down, improving page speed.
									.</p>
								<h5 className="font-normal">Skills used:</h5>
								<span className="skill">HTML</span><span className="skill">CSS</span><span className="skill">Bootstrap</span><span className="skill">JavaScript</span>
							</div>
							
							<div className="bg-gray-50/15 px-8 py-10 rounded-md">
								<div className="w-20 py-6 flex justify-center bg-gray-100 bg-opacity-20 rounded-md mb-4">
									<i data-feather="codesandbox"></i>
								</div>
	
								<h4 className="font-medium">Useful sandboxes</h4>
	
								<p className="font-normal text-md">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
							</div>
							
							<div className="bg-gray-50/15 px-8 py-10 rounded-md">
								<div className="w-20 py-6 flex justify-center bg-gray-100 bg-opacity-20 rounded-md mb-4">
									<i data-feather="coffee"></i>
								</div>
	
								<h4 className="font-medium">Success side projects</h4>
	
								<p className="font-normal text-md">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
				</section>
	
				<section id="experience" className="wrapper style3">
					<div className="inner">
	
						<h2 className="font-fjord">Experience</h2>
	
						<p className="font-normal md:text-base mb-20">Below is a summary of my experience</p>
	
						<div className="flex flex-col lg:flex-row justify-between">
							<div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
								<p className="font-semibold text-base">Alludo (formerly Corel Corporation) <span className="font-normal">/ Remote</span></p>
							</div>
	
							<div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
								<p className="font-normal text-base">Web Producer</p>
							</div>
	
							<div className="space-y-8 md:space-y-16">
								<p className="font-normal text-base">2011-2024</p>
							</div>
						</div>

						<h3 className="font-fjord">Brands</h3>
						<p className="font-normal md:text-base mb-10 md:mb-20">Some brands I proudly helped shape at my last role:</p>
						<div className="brands grid grid-cols-2 md:grid-cols-4">
							<img src="/images/brand-1.png" className="white-mask" alt="Parallels logo" />
							<img src="/images/brand-2.png" className="white-mask" alt="MindManager logo" />
							<img src="/images/brand-3.png" className="white-mask" alt="Corel logo" />
							<img src="/images/brand-4.png" className="white-mask" alt="WinZip logo" />
						</div>
					</div>
				</section>
	

	
				<section id="recommendations" className="wrapper style2">
					<div className="inner">
						<h2 className="font-fjord">Recommendations</h2>
						<p className="font-normal md:text-base mb-10 md:mb-20">Here's what colleagues and clients have said about working with me</p>
	
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
							<div className="bg-gray-50/15 px-8 py-10 rounded-md">
	
								<p>Alissa is a skilled front-end developer who consistently meets project expectations with efficiency and professionalism. She has a solid understanding of front-end technologies and delivers functional, well-structured code that aligns with project requirements. Her ability to turn designs into responsive, user-friendly interfaces... <a href="https://www.linkedin.com/in/alissa-bengtson/details/recommendations/" target="_blank">read more</a></p>
	
								<h5 className="font-semibold">Delphine M. <span className="font-medium">- Director, Creative Services</span></h5>
							</div>
	
							<div className="bg-gray-50/15 px-8 py-10 rounded-md">
								<p>To put it simply, Alissa is an extremely talented front end developer. A number of years ago she created a variety of landing pages for my marketing campaigns targeting our WinZip customer base and prospects. I was always impressed with what she produced — engaging and smooth user experience... <a href="https://www.linkedin.com/in/alissa-bengtson/details/recommendations/" target="_blank">read more</a> </p>
	
								<h5 className="font-semibold">Rachel P. <span className="font-medium">- Customer Marketing Manager</span></h5>
							</div>
	
							<div className="bg-gray-50/15 px-8 py-10 rounded-md">
	
								<p>Alissa is an amazing web front end developer. Her design skills are extraordinary and she has a great work ethic. If you want the job done right, and to look great, then have Alissa do it.</p>
	
								<h5 className="font-semibold">Frank W. <span className="font-medium">- Staff Software Engineer</span></h5>
							</div>
	
							<div className="bg-gray-50/15 px-8 py-10 rounded-md">
	
								<p>Alissa is the rockstar web-producer behind several successful eDM campaigns at WinZip. Constantly provides high-quality content, on time and always on spec. Highly recommended.</p>
	
								<h5 className="font-semibold">Lucas P. <span className="font-medium">- Online Marketing Campaign Manager</span></h5>
							</div>
	
							<div className="bg-gray-50/15 px-8 py-10 rounded-md">
	
								<p>Alissa has helped reSET Social Enterprise Trust create a website for its second annual Beyond Business as Usual Conference in October 2011. It was a pleasure to work with her because she used her creative skills to build an extremely successful event website. She worked quickly and put a lot of effort into her work... <a href="https://www.linkedin.com/in/alissa-bengtson/details/recommendations/" target="_blank">read more</a></p>
	
								<h5 className="font-semibold">Judith W. <span className="font-medium">- Communications Intern</span></h5>
							</div>
	
							<div className="bg-gray-50/15 px-8 py-10 rounded-md">
	
								<p>Alissa is a creative, expert web designer who will exceed your requirements for any project she takes on. I highly recommend her!
								</p>
	
								<h5 className="font-semibold">Mary Jo K. <span className="font-medium">- Communications Director</span></h5>
							</div>
						</div>
					</div>
				</section>
			</div>
  );
}