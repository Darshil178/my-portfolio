import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div
			className="fixed w-full h-[80px] flex justify-between items-center px-4
        bg-[#0a192f] text-gray-300 top-0 left-0 z-50"
		>
			<div>
				<img src={Logo} alt="Logo Img" className="w-20" />
			</div>
			{/* menu  */}

			<ul className="hidden md:flex ">
				<li>
					<Link
						to="hero"
						smooth={true}
						duration={500}
						className="hover:text-[#3fcae6] text-pink-500 "
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to="about"
						smooth={true}
						duration={500}
						className="hover:text-[#3fcae6] text-pink-500"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						to="card"
						smooth={true}
						duration={500}
						className="hover:text-[#3fcae6] text-pink-500"
					>
						Experience
					</Link>
				</li>
				<li>
					<Link
						to="skills"
						smooth={true}
						duration={500}
						className="hover:text-[#3fcae6] text-pink-500"
					>
						Skills
					</Link>
				</li>
				<li>
					<Link
						to="work"
						smooth={true}
						duration={500}
						className="hover:text-[#3fcae6] text-pink-500"
					>
						Work
					</Link>
				</li>
				<li>
					<Link
						to="contact"
						smooth={true}
						duration={500}
						className="hover:text-[#3fcae6] text-pink-500"
					>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger  */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>
			{/* mobile menu  */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute left-0 top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
				}
			>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="hero"
						smooth={true}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<li>
						<Link
							onClick={handleClick}
							to="about"
							smooth={true}
							duration={500}
						>
							About
						</Link>
					</li>
				</li>
				<li className="py-6 text-4xl">
					<li>
						<Link
							onClick={handleClick}
							to="card"
							smooth={true}
							duration={500}
						>
							Experience
						</Link>
					</li>
				</li>
				<li className="py-6 text-4xl">
					<li>
						<Link
							onClick={handleClick}
							to="skills"
							smooth={true}
							duration={500}
						>
							Skills
						</Link>
					</li>
				</li>
				<li className="py-6 text-4xl">
					<li>
						<Link
							onClick={handleClick}
							to="work"
							smooth={true}
							duration={500}
						>
							Work
						</Link>
					</li>
				</li>
				<li className="py-6 text-4xl">
					<li>
						<Link
							onClick={handleClick}
							to="contact"
							smooth={true}
							duration={500}
						>
							Contact
						</Link>
					</li>
				</li>
			</ul>
			{/* Social icons  */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/darshil-patel-b84005236/"
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
				</ul>
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://github.com/Darshil178"
						>
							Github <FaGithub size={30} />
						</a>
					</li>
				</ul>
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6486d5]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="mailto:email@example.com"
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
				</ul>
				{/* <ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#142d4a]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="/"
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul> */}
			</div>
		</div>
	);
};

export default Navbar;
