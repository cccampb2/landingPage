import "./Main.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Experience from "../Experience/Experience";
import ContactMe from "../Contact Me/ContactMe";

function Main() {
  return (
    <div className="main">
      <Hero />
      <About />
      <Experience />
      <ContactMe />
    </div>
  );
}

export default Main;
