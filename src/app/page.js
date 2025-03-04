"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "../styles/globals.css";
import { useEffect } from "react";
import "flowbite";
import Projects from "../components/Projects";


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
						<img src="../../images/headshot.jpg" className="rounded-full brightness-125 grayscale max-w-[200px] lg:max-w-full" />
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

								{/* <a href="https://codepen.io/avbengt" target="_blank">
								<FontAwesomeIcon icon={faCodepen} style={{ fontSize: "1.75rem" }} className="icon-social" />
								</a> */}
							</div>
						</div>

						<p>I'm a passionate front-end web developer with over 13 years of experience creating user-friendly, visually appealing, and responsive websites. I specialize in transforming designs into functional and seamless digital experiences.</p>
						<a href="/docs/alissa-bengtson-resume.pdf" target="_blank" className="button !bg-black/35 hover:!bg-black flex items-center space-x-2 mt-4">
							Get resume <span className="icon-dl"></span>
						</a>
					</div>

				</div>


			</section>


			<Projects />

			<section id="experience" className="wrapper purple-alt">
				<div className="inner">

					<h2 className="font-fjord">Brands</h2>
					<p className="font-normal md:text-base mb-10 md:mb-20">Some brands I proudly helped shape at my last role</p>
					<div className="brands grid grid-cols-2 md:grid-cols-4 my-10">
						<img src="/images/brand-1.png" className="white-mask" alt="Parallels logo" />
						<img src="/images/brand-2.png" className="white-mask" alt="MindManager logo" />
						<img src="/images/brand-3.png" className="white-mask" alt="Corel logo" />
						<img src="/images/brand-4.png" className="white-mask" alt="WinZip logo" />
					</div>
					<div className="text-center">
						<a href="/docs/alissa-bengtson-resume.pdf" target="_blank" className="button !bg-black/35 hover:!bg-black flex items-center space-x-2 mt-4">
							Get resume <span className="icon-dl"></span>
						</a>
					</div>
				</div>
			</section>

			<section id="recommendations" className="wrapper purple">
				<div className="inner">
					<h2 className="font-fjord">Recommendations</h2>
					<p className="font-normal mb-9">Here's what colleagues and clients have said about working with me</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">


						<div className="bg-gray-50/5 px-8 py-10 rounded-md">
							<p>Alissa is a talented front-end web developer that I have had the pleasure working with for about 10 years. Was it really that long? She has a deep passion for crafting engaging, user-friendly web experiences. Her expertise extends to modern frameworks like React and Tailwind and brings a good eye for design with experience in tools like... <a href="https://www.linkedin.com/in/alissa-bengtson/details/recommendations/" target="_blank">read more</a></p>

							<p className="h5 font-semibold">Greg G. <span className="font-medium">- VP, Brand &amp; Creative</span></p>
						</div>

						<div className="bg-gray-50/5 px-8 py-10 rounded-md">
							<p>Alissa is an amazing collaborator and team mate. Working together at Corel, I was really impressed with how Alissa managed the large volume of work with creativity and poise. She is a great front-end dev and someone who really cares about the end product and user experience. Highly recommended.</p>

							<p className="h5 font-semibold">Jeremy P. <span className="font-medium">- Senior Web Producer</span></p>
						</div>

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
					</div>

					<div className="text-center mt-12">
						<a href="https://www.linkedin.com/in/alissa-bengtson/details/recommendations/" target="_blank" className="button !bg-black/35 hover:!bg-black flex items-center space-x-2">
							See more on LinkedIn
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}