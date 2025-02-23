import "./Main.css";
import Hero from "../Hero/Hero";
import About from "../About/About";

function Main({ name }) {
  return (
    <div className="main">
      <Hero />
      <About />
    </div>
  );
}

export default Main;
