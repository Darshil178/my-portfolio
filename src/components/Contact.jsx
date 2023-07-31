import React from "react";

const Contact = () => {
	return (
		<div
			name="contact"
			className="w-full  bg-[#0a192f] flex justify-center items-center p-4"
		>
			<form
				method="POST"
				action="https://getform.io/f/96e887d9-18fa-42b3-b0df-1a00ac6b3de6"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="sm:pb-8">
					<p className=" text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
						Contact
					</p>
					<h3>
						<p className="text-gray-300 py-4">
							Submit the form below or shoot me an email-
							deeppatel.patdi@gmail.com
						</p>
					</h3>
				</div>
				<input
					className="bg-[#ccd6f6] p-2"
					type="text"
					placeholder="Name"
					name="name"
					required
				/>
				<input
					className="my-4 p-2 bg-[#ccd6f6]"
					type="email"
					placeholder="Email"
					name="email"
					required
				/>
				<textarea
					className="bg-[#ccd6f6] p-2"
					name="message"
					placeholder="Message"
					rows="10"
					required
				/>
				<button className=" text-black font-bold bg-[#3fcae6] rounded hover:bg-black hover:border-white  hover:text-[#3fcae6] hover:font-bold hover:shadow-md hover:shadow-[#648fc5] border-2 px-4 py-3 my-8 mx-auto flex items-center  ">
					Let's Collaborate
				</button>
			</form>
		</div>
	);
};

export default Contact;
