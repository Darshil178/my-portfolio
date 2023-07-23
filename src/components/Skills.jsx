import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap.png";
// import ReactNative from "../assets/reactnative.png";
const Skills = () => {
	return (
		<div
			name="skills"
			className="w-full min-h-screen h-full bg-[#0a192f] text-gray-300 py-20"
		>
			{/* container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
						SkillS
					</p>
					<p className="py-4">
						<h3>
							" These are the technologies I've worked with. "
						</h3>
					</p>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
					<div className="shadow-md shadow-[#648fc5] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto mt-4"
							src={HTML}
							alt="HTML icon"
						/>
						<p className="my-4">HTML</p>
					</div>
					<div className="shadow-md shadow-[#648fc5] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto mt-4"
							src={CSS}
							alt="CSS icon"
						/>
						<p className="my-4">CSS</p>
					</div>
					<div className="shadow-md shadow-[#648fc5] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto mt-4"
							src={JavaScript}
							alt="JavaScript icon"
						/>
						<p className="my-4">JavaScript</p>
					</div>
					<div className="shadow-md shadow-[#648fc5] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto mt-4"
							src={ReactImg}
							alt="ReactImg icon"
						/>
						<p className="my-4">ReactJS</p>
					</div>
					<div className="shadow-md shadow-[#648fc5] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto mt-4"
							src={ReactImg}
							alt="ReactImg icon"
						/>
						<p className="my-4">React-Native</p>
					</div>
					<div className="shadow-md shadow-[#648fc5] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto mt-4"
							src={Node}
							alt="Node icon"
						/>
						<p className="my-4">NodeJS</p>
					</div>
					<div className="shadow-md shadow-[#648fc5] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto mt-4"
							src={FireBase}
							alt="FireBase icon"
						/>
						<p className="my-4">FireBase</p>
					</div>
					<div className="shadow-md shadow-[#648fc5] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto mt-4"
							src={GitHub}
							alt="GitHub icon"
						/>
						<p className="my-4">GitHub</p>
					</div>
					<div className="shadow-md shadow-[#648fc5] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto mt-4"
							src={Tailwind}
							alt="Tailwind icon"
						/>
						<p className="my-4">Tailwind</p>
					</div>
					<div className="shadow-md shadow-[#648fc5] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto mt-4"
							src={Bootstrap}
							alt="Bootstrap icon"
						/>
						<p className="my-4">Bootstrap</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
