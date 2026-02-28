"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "../styles/globals.css";
import { useEffect, useState } from "react";
import "flowbite";
import Projects from "../components/Projects";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";


export default function Home() {
	const [mounted, setMounted] = useState(false);

	// Initialize Flowbite when the component mounts
	useEffect(() => {
		setMounted(true);
		if (window.Flowbite) {
			window.Flowbite.init();
		}
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
				when: "beforeChildren"
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	const socialVariants = {
		hidden: { opacity: 0, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.4,
				ease: "backOut"
			}
		}
	};

	// Prevent hydration mismatch by showing static content first
	if (!mounted) {
		return (
			<div id="wrapper" style={{ opacity: 0 }}>
				<section id="intro" className="wrapper teal fullscreen relative overflow-hidden">
					<div className="inner flex flex-col lg:flex-row items-center gap-6 relative z-10">
						<div className="headshot lg:order-2 w-full lg:w-1/3 flex items-center justify-center">
							<img src="../../images/headshot.jpg" className="rounded-full brightness-125 grayscale max-w-[200px] lg:max-w-full shadow-2xl" alt="Alissa Bengtson" />
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
			</div>
		);
	}

	return (
		<div id="wrapper">
			<section id="intro" className="wrapper teal fullscreen relative overflow-hidden">
				{/* Animated background gradient */}
				<motion.div
					className="absolute inset-0 opacity-20"
					initial={{ opacity: 0 }}
					animate={{
						opacity: [0.1, 0.2, 0.1],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut"
					}}
					style={{
						background: "radial-gradient(circle at 30% 50%, rgba(107, 114, 207, 0.3), transparent 50%)"
					}}
				/>

				<motion.div
					className="inner flex flex-col lg:flex-row items-center gap-6 relative z-10"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.div
						className="headshot lg:order-2 w-full lg:w-1/3 flex items-center justify-center"
						variants={imageVariants}
					>
						<motion.img
							src="../../images/headshot.jpg"
							className="rounded-full brightness-125 grayscale max-w-[200px] lg:max-w-full"
							alt="Alissa Bengtson"
						/>
					</motion.div>

					<motion.div
						className="info sm:order-1 w-full lg:w-2/3 max-h-max text-center lg:text-start"
						variants={containerVariants}
					>
						<motion.span
							className="font-fjord text-xl font-bold text-white !mb-0 block"
							variants={itemVariants}
						>
							Hi, I'm
						</motion.span>
						<motion.h1
							className="font-fjord nobreak !mt-1 !mb-3"
							variants={itemVariants}
						>
							Alissa Bengtson!
						</motion.h1>
						<motion.h2
							className="font-fjord !mt-1"
							variants={itemVariants}
						>
							Front-End Web Developer
						</motion.h2>
						<motion.div
							className="socials mt-5 mb-8"
							variants={itemVariants}
						>
							<div className="flex items-center justify-center lg:justify-start space-x-6">
								<motion.a
									href="https://www.linkedin.com/in/alissa-bengtson/"
									target="_blank"
									variants={socialVariants}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
								>
									<FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.75rem" }} className="icon-social" />
								</motion.a>

								<motion.a
									href="https://github.com/avbengt"
									target="_blank"
									variants={socialVariants}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
								>
									<FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.75rem" }} className="icon-social" />
								</motion.a>
							</div>
						</motion.div>

						<motion.p variants={itemVariants}>
							I'm a passionate front-end web developer with over 13 years of experience creating user-friendly, visually appealing, and responsive websites. I specialize in transforming designs into functional and seamless digital experiences.
						</motion.p>
						<motion.a
							href="/docs/alissa-bengtson-resume.pdf"
							target="_blank"
							className="button !bg-black/35 hover:!bg-black flex items-center space-x-2 mt-4"
							variants={itemVariants}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Get resume <span className="icon-dl"></span>
						</motion.a>
					</motion.div>
				</motion.div>
			</section>

			<Projects />

			<BrandsSection />

			<RecommendationsSection />
		</div>
	);
}

function BrandsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.2 });

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

	const brandVariants = {
		hidden: { opacity: 0, scale: 0.8, y: 20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	return (
		<section id="experience" className="wrapper purple-alt" ref={ref}>
			<div className="inner">
				<motion.h2
					className="font-fjord"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
				>
					Brands
				</motion.h2>
				<motion.p
					className="font-normal md:text-base mb-10 md:mb-20"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					Some brands I proudly helped shape at my last role
				</motion.p>
				<motion.div
					className="brands grid grid-cols-2 md:grid-cols-4 my-10 gap-6"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
				>
					{[
						{ src: "/images/brand-1.png", alt: "Parallels logo" },
						{ src: "/images/brand-2.png", alt: "MindManager logo" },
						{ src: "/images/brand-3.png", alt: "Corel logo" },
						{ src: "/images/brand-4.png", alt: "WinZip logo" }
					].map((brand, index) => (
						<motion.div
							key={index}
							variants={brandVariants}
							className="flex items-center justify-center"
						>
							<img src={brand.src} className="white-mask" alt={brand.alt} />
						</motion.div>
					))}
				</motion.div>
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<motion.a
						href="/docs/alissa-bengtson-resume.pdf"
						target="_blank"
						className="button !bg-black/35 hover:!bg-black flex items-center space-x-2 mt-4"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Get resume <span className="icon-dl"></span>
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
}

function RecommendationsSection() {
	const ref = useRef(null);
	const [hasAnimated, setHasAnimated] = useState(false);
	const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.2 });

	useEffect(() => {
		if (isInView && !hasAnimated) {
			setHasAnimated(true);
		}
	}, [isInView, hasAnimated]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2
			}
		}
	};

	const cardVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	const recommendations = [
		{
			text: "Alissa is a talented front-end web developer that I have had the pleasure working with for about 10 years. Was it really that long? She has a deep passion for crafting engaging, user-friendly web experiences. Her expertise extends to modern frameworks like React and Tailwind and brings a good eye for design with experience in tools like...",
			author: "Greg G.",
			title: "VP, Brand & Creative",
			link: true
		},
		{
			text: "Alissa is an amazing collaborator and team mate. Working together at Corel, I was really impressed with how Alissa managed the large volume of work with creativity and poise. She is a great front-end dev and someone who really cares about the end product and user experience. Highly recommended.",
			author: "Jeremy P.",
			title: "Senior Web Producer",
			link: false
		},
		{
			text: "Alissa is a skilled front-end developer who consistently meets project expectations with efficiency and professionalism. She has a solid understanding of front-end technologies and delivers functional, well-structured code that aligns with project requirements. Her ability to turn designs into responsive, user-friendly interfaces...",
			author: "Delphine M.",
			title: "Director, Creative Services",
			link: true
		},
		{
			text: "To put it simply, Alissa is an extremely talented front end developer. A number of years ago she created a variety of landing pages for my marketing campaigns targeting our WinZip customer base and prospects. I was always impressed with what she produced — engaging and smooth user experience...",
			author: "Rachel P.",
			title: "Customer Marketing Manager",
			link: true
		},
		{
			text: "Alissa is an amazing web front end developer. Her design skills are extraordinary and she has a great work ethic. If you want the job done right, and to look great, then have Alissa do it.",
			author: "Frank W.",
			title: "Staff Software Engineer",
			link: false
		},
		{
			text: "Alissa is the rockstar web-producer behind several successful eDM campaigns at WinZip. Constantly provides high-quality content, on time and always on spec. Highly recommended.",
			author: "Lucas P.",
			title: "Online Marketing Campaign Manager",
			link: false
		}
	];

	return (
		<section id="recommendations" className="wrapper purple" ref={ref}>
			<div className="inner">
				<motion.h2
					className="font-fjord"
					initial={{ opacity: 0, y: 20 }}
					animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
				>
					Recommendations
				</motion.h2>
				<motion.p
					className="font-normal pb-4"
					initial={{ opacity: 0, y: 20 }}
					animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					Here's what colleagues and clients have said about working with me
				</motion.p>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
					variants={containerVariants}
					initial="hidden"
					animate={hasAnimated ? "visible" : "hidden"}
				>
					{recommendations.map((rec, index) => (
						<motion.div
							key={index}
							className="bg-gray-50/5 px-8 py-10 rounded-md backdrop-blur-sm border border-white/10 hover:border-white/20"
							variants={cardVariants}
						>
							<p>
								{rec.text}
								{rec.link && (
									<a href="https://www.linkedin.com/in/alissa-bengtson/details/recommendations/" target="_blank"> read more</a>
								)}
							</p>
							<p className="h5 font-semibold mt-4">
								{rec.author} <span className="font-medium">- {rec.title}</span>
							</p>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="text-center mt-12"
					initial={{ opacity: 0, y: 20 }}
					animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6, delay: 0.8 }}
				>
					<motion.a
						href="https://www.linkedin.com/in/alissa-bengtson/details/recommendations/"
						target="_blank"
						className="button !bg-black/35 hover:!bg-black flex items-center space-x-2"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						See more on LinkedIn
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
}