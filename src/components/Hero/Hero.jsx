import "./Hero.css";
import Section from "../Section/Section";

import Period from "../Period/Period";
import resume from "../../assets/resume.pdf";

function Hero() {
  return (
    <Section id={"hero"} name={"hero"}>
      <div className="hero__content">
        <h1 className="hero__heading">
          Hi, I'm Caleb
          <Period />
        </h1>

        <h2 className="hero__sub-heading">
          A <span className="hero__accent">Full-Stack Developer</span> and
          Software Enthusiast.
        </h2>
        <p className="hero__tagline">
          Turning coffee into code, one line at a time.
        </p>
        <div className="hero__buttons">
          <a
            className="hero__ctn-btn-link"
            href={resume}
            target="_blank"
            download="ResumeOfCalebCampbell"
          >
            <button className="hero__cta-btn" role="button">
              My Resume
            </button>
          </a>
          <a href="#contact" className="hero__ctn-btn-link">
            {" "}
            <button className="hero__cta-btn" role="button">
              Let's Connect
            </button>
          </a>
        </div>
      </div>
      <div className="hero__avatar"></div>
    </Section>
  );
}

export default Hero;
