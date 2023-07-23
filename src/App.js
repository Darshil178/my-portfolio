import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Card from "./components/Card";
function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Card />
			<Skills />
			<Work />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
