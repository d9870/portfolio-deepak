import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
