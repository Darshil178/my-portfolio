import React from "react";
import Tatvasoft from "../assets/tatvasoft.png";
const Card = () => {
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch("Darshil_Patel_LDRP_135.pdf").then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement("a");
				alink.href = fileURL;
				alink.download = "Tatvasoft.pdf";
				alink.click();
			});
		});
	};
	return (
		<div
			name="card"
			className="w-full bg-[#0a192f] text-gray-300 md:py-20 py-6 md:min-h-screen h-full  shadow-md overflow-hidden"
		>
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="md:pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
						Experience
					</p>
					<p className="py-6">" Where I Worked. " </p>
				</div>
			</div>
			<div className="flex justify-center">
				<img
					className="h-32 w-32 rounded-full mt-[-10px] md:mt-0 "
					src={Tatvasoft}
					alt="Profile"
				/>
			</div>
			<div className="text-center px-6 py-4">
				<p className="mt-4 text-gray-300 max-w-[700px] mx-auto">
					As an intern in ReactJS at
					<b className="text-pink-400">" Tatvasoft, Ahemdabad "</b> in
					which i build a project Book Store E-commerce platform
					through which people can buy and sell books online. I
					created various components using React Hooks, datas, APIs,
					and many more.
				</p>
				<div className="mt-4">
					<button
						onClick={onButtonClick}
						className="text-black  bg-[#3fcae6] border-2 hover:bg-black hover:border-white  hover:text-[#3fcae6] hover:font-bold hover:shadow-md hover:shadow-[#648fc5] shadow-btn  font-bold py-2 px-4 rounded"
					>
						Download Certificate
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
