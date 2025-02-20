"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "../styles/globals.css";
import { useEffect } from "react";
import "flowbite";


export default function Home() {
	// Initialize Flowbite when the component mounts
	useEffect(() => {
	  if (window.Flowbite) {
		window.Flowbite.init();
	  }
	}, []);

  	return (
		<div id="wrapper">
			<section id="intro" className="wrapper teal fullscreen fade-up">


				<div className="inner flex flex-col lg:flex-row items-center gap-6">


					<div className="headshot lg:order-2 w-full lg:w-1/3 flex items-center justify-center">
						<img src="../../images/headshot.jpg" className="rounded-full brightness-125 grayscale max-w-[200px] lg:max-w-[350px]" />
					</div>


					<div className="info sm:order-1 w-full lg:w-2/3 max-h-max text-center lg:text-start">
						<span className="font-fjord text-xl font-bold text-white !mb-0">Hi, I'm</span>
						<h1 className="font-fjord nobreak !mt-1 !mb-3">Alissa Bengtson!</h1>
						<h2 className="font-fjord !mt-1">Front-End Web Developer</h2>					
						<div className="socials mt-5 mb-8">
							<div className="flex items-center justify-center lg:justify-start space-x-6">
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
						<a href="/docs/alissa-bengtson-resume.pdf" target="_blank" className="button hover:bg-black flex items-center space-x-2">
							Get resume <span className="icon-dl"></span>
						</a>
					</div>

				</div>

				
			</section>

			<section id="projects" className="h-full wrapper purple">
				<div className="inner">
					<h2 className="font-fjord">Projects</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						
						<div className="bg-gray-50/5 px-8 py-8 rounded-md">
							<a href="#parallels-modal" data-modal-target="parallels-modal" data-modal-toggle="parallels-modal">
								<img src="/images/projects/parallels-thumb.jpg" className="rounded-md" alt="Parallels webpage thumbnail" />
								<h3>Parallels Desktop for Mac Product Pages <i className="fa fa-external-link" aria-hidden="true"></i></h3>
								<h5 className="font-normal mb-1">Skills used:</h5>
								<span className="skill">HTML</span><span className="skill">CSS</span><span className="skill">Bootstrap</span><span className="skill">JavaScript</span>
							</a>
						</div>

						<div id="parallels-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
							<div className="relative p-4 w-full max-w-2xl max-h-full">
								<div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
									<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
										<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
											Parallels Desktop for Mac Product Pages
										</h3>
										<button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="parallels-modal">
											<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
												<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
											</svg>
											<span className="sr-only">Close modal</span>
										</button>
									</div>
									<div className="p-4 md:p-5 space-y-4">
										<p className="font-normal text-md">This project involved revamping the product pages for Parallels Desktop 19 for Mac to make it more visually cohesive with the Apple website, by implementing scrollable modal pop-ups with information specific to each use case. Further down the page are more cards the user can click on to reveal more information about various product features. The page is built entirely using Bootstrap with numerous style overrides. I also implemented a lazy loading technique on the images on the page so that the page loads faster, and images below the fold only as you scroll down, improving page speed.</p>
									</div>
								</div>
							</div>
						</div>
				
						<div className="bg-gray-50/5 px-8 py-8 rounded-md">
							<a href="#alludo-modal" data-modal-target="alludo-modal" data-modal-toggle="alludo-modal">		
								<img src="/images/projects/alludo-thumb.jpg" className="rounded-md" alt="Alludo website thumbnail" />
								<h3>Alludo Website</h3>
								<h5 className="font-normal mb-1">Skills used:</h5>
								<span className="skill">HTML</span><span className="skill">CSS</span><span className="skill">Bootstrap</span><span className="skill">JavaScript</span>
							</a>
						</div>

						<div id="alludo-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
							<div className="relative p-4 w-full max-w-2xl max-h-full">
								<div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
									<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
										<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
											Alludo Website
										</h3>
										<button type="button" className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="alludo-modal">
											<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
												<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
											</svg>
											<span className="sr-only">Close modal</span>
										</button>
									</div>
									<div className="p-4 md:p-5 space-y-4">
									<p className="font-normal text-md">After a major corporate rebranding, I was tasked with building out various pages of the Alludo company website, including the homepage, which features a series of animations as you scroll down the page. These animations were built with CSS keyframes. A "hidden" feature of this page is that the images and color gradient in the hero change depending on the time of day you view it. This functionality was built using JavaScript.</p>
									</div>
								</div>
							</div>
						</div>
						
						<div className="bg-gray-50/5 px-8 py-8 rounded-md">
							<a href="#farm-modal" data-modal-target="farm-modal" data-modal-toggle="farm-modal">
								<img src="/images/projects/farm-thumb.jpg" className="rounded-md" alt="Farm website thumbnail" />
								<h3>Farm Website</h3>
								<h5 className="font-normal mb-1">Skills used:</h5>
								<span className="skill">HTML</span><span className="skill">CSS</span><span className="skill">Bootstrap</span><span className="skill">JavaScript</span>
							</a>
						</div>


						<div id="farm-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex">
							<div className="modal-inner">
								<div className="relative">
									<div className="flex items-center justify-between p-4 md:p-5 rounded-t">
										<h3 className="text-xl font-semibold text-white">
											Farm Website
										</h3>
										<button type="button" className="text-sm w-8 h-8 ms-auto inline-flex justify-center items-center text-white" data-modal-hide="farm-modal">
											<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
												<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
											</svg>
											<span className="sr-only">Close modal</span>
										</button>
									</div>
									<div className="p-4 md:p-5 space-y-4">
									<p className="font-normal text-md">Local farm website.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="experience" className="wrapper pink">
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

			<section id="recommendations" className="wrapper purple pb-10">
				<div className="inner">
					<h2 className="font-fjord">Recommendations</h2>
					<p className="font-normal md:text-base mb-10 md:mb-20">Here's what colleagues and clients have said about working with me</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
						<div className="bg-gray-50/5 px-8 py-10 rounded-md">

							<p>Alissa is a skilled front-end developer who consistently meets project expectations with efficiency and professionalism. She has a solid understanding of front-end technologies and delivers functional, well-structured code that aligns with project requirements. Her ability to turn designs into responsive, user-friendly interfaces... <a href="https://www.linkedin.com/in/alissa-bengtson/details/recommendations/" target="_blank">read more</a></p>

							<p className="h5 font-semibold">Delphine M. <span className="font-medium">- Director, Creative Services</span></p>
						</div>

						<div className="bg-gray-50/5 px-8 py-10 rounded-md">
							<p>To put it simply, Alissa is an extremely talented front end developer. A number of years ago she created a variety of landing pages for my marketing campaigns targeting our WinZip customer base and prospects. I was always impressed with what she produced — engaging and smooth user experience... <a href="https://www.linkedin.com/in/alissa-bengtson/details/recommendations/" target="_blank">read more</a> </p>

							<p className="h5 font-semibold">Rachel P. <span className="font-medium">- Customer Marketing Manager</span></p>
						</div>

						<div className="bg-gray-50/5 px-8 py-10 rounded-md">

							<p>Alissa is an amazing web front end developer. Her design skills are extraordinary and she has a great work ethic. If you want the job done right, and to look great, then have Alissa do it.</p>

							<p className="h5 font-semibold">Frank W. <span className="font-medium">- Staff Software Engineer</span></p>
						</div>

						<div className="bg-gray-50/5 px-8 py-10 rounded-md">

							<p>Alissa is the rockstar web-producer behind several successful eDM campaigns at WinZip. Constantly provides high-quality content, on time and always on spec. Highly recommended.</p>

							<p className="h5 font-semibold">Lucas P. <span className="font-medium">- Online Marketing Campaign Manager</span></p>
						</div>

						<div className="bg-gray-50/5 px-8 py-10 rounded-md">

							<p>Alissa has helped reSET Social Enterprise Trust create a website for its second annual Beyond Business as Usual Conference in October 2011. It was a pleasure to work with her because she used her creative skills to build an extremely successful event website. She worked quickly and put a lot of effort into her work... <a href="https://www.linkedin.com/in/alissa-bengtson/details/recommendations/" target="_blank">read more</a></p>

							<p className="h5 font-semibold">Judith W. <span className="font-medium">- Communications Intern</span></p>
						</div>

						<div className="bg-gray-50/5 px-8 py-10 rounded-md">

							<p>Alissa is a creative, expert web designer who will exceed your requirements for any project she takes on. I highly recommend her!
							</p>

							<p className="h5 font-semibold">Mary Jo K. <span className="font-medium">- Communications Director</span></p>
						</div>
					</div>
				</div>
			</section>
        </div>
  );
}