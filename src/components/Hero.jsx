import React from "react";

import DeveloperImg from "../assets/deep.png";
import Typed from "react-typed";
const Hero = () => {
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch("Darshil.pdf").then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement("a");
				alink.href = fileURL;
				alink.download = "Darshil.pdf";
				alink.click();
			});
		});
	};
	return (
		<div
			name="hero"
			className="bg-[#0a192f] w-full py-20 min-h-screen h-full flex lg:flex-row lg:gap-0 gap-5 flex-col justify-center items-center"
		>
			<div className="flex flex-row mx-auto ">
				<img
					className="w-80 h-full py-[-5]lg:h-80 sm:px-0 px-8 lg:ml-28 object-cover object-center"
					src={DeveloperImg}
					alt="Developer Pic"
				/>
			</div>
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-pink-400 text-xl sm:text-2xl ">
					Hi, my name is
				</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
					Darshil Patel
				</h1>
				<h2 className="text-4xl sm:text-5xl font-bold text-[#7c8bb7]">
					I'm a
					<Typed
						className="text-4xl md:text-5xl sm:text-4xl font-bold md:pl-4 pl-2 text-pink-400"
						strings={[
							"Computer Engineer",
							"Web-Developer",
							"App-Developer",
						]}
						typeSpeed={80}
						backSpeed={80}
						loop
					/>
				</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px]">
					I'm a Web-Developer specializing in building (and
					occasionally designing) exceptional digital experiences.
					Currently, I'm focused on building responsive web
					applications.
				</p>
				{/* resume button  */}
				{/* <div>
					<a href="Resume" download="Resume.pdf">
						<button className="text-white group border-2 px-6 py-3 my-2 flex  items-center hover:bg-[#127285] hover:border-[#33d5c5]  hover:text-black hover:font-bold">
							Download CV
						</button>
					</a>
				</div> */}
				<div>
					<button
						onClick={onButtonClick}
						className="text-black font-bold rounded bg-[#3fcae6] border-2 px-6 py-3 my-2 flex box-content  items-center hover:bg-black hover:border-white  hover:text-[#3fcae6] hover:font-bold hover:shadow-md hover:shadow-[#648fc5]"
					>
						Download CV
					</button>
				</div>
				{/* <div>
					<button className="text-white group border-2 px-6 py-3 my-2 flex  items-center hover:bg-[#127285] hover:border-[#33d5c5]  hover:text-black hover:font-bold">
						View Work
						<span className="group-hover:rotate-90 duration-300">
							<HiArrowNarrowRight className="ml-3 " />
						</span>
					</button>
				</div> */}
			</div>
		</div>
	);
};

export default Hero;
