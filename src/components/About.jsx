import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-full min-h-screen bg-[#0a192f] text-gray-300 py-15"
		>
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:tect-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-rigth text-4xl font-bold">
						<p>
							Hi. I'm Darshil, nice to meet you. Please take a
							look around.
						</p>
					</div>
					<div>
						<p className="text-gray-300 m-5">
							<b className="text-pink-400">Technical skills:-</b>{" "}
							I have a good knowledge in web development
							technologies like HTML, CSS, BootStrap,
							Tailwind-Css,JavaScript, and various frameworks like
							React Js.In app-development i have knowledge of
							React-Native. i also have little bit knowledge of
							NodeJs.
						</p>
						<p className="text-gray-300 m-5 mt-0">
							<b className="text-pink-400">
								Previous experience:-
							</b>
							I have just completed my internship during 27th May
							2023 to 17th June,2023 from Tatvasoft, Ahmedabad in
							field of React js.
						</p>
						<p className="text-gray-300 m-5">
							<b className="text-pink-400">Eager to learn:-</b>{" "}
							The field of web development is constantly
							progressive, and I have a passion for learning and
							adapting new technologies. I am eager to expand my
							knowledge and skills. I see my past internship as an
							excellent opportunity for me to further enhance my
							abilities.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
