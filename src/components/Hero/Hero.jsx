import "./Hero.css";
import Section from "../Section/Section";

import Period from "../Period/Period";

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
          <button className="hero__cta-btn" role="button">
            My Resume
          </button>

          <button className="hero__cta-btn" role="button">
            Let's Connect
          </button>
        </div>
      </div>
      <div className="hero__avatar"></div>
    </Section>
  );
}

export default Hero;
