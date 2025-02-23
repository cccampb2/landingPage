import "./Hero.css";
import Section from "../Section/Section";
import Animation from "../Animation/Animation";
import Period from "../Period/Period";

function Hero() {
  return (
    <Section id={"hero"} name={"hero"}>
      <div className="hero__content">
        <Animation>
          <h1 className="hero__heading">
            Hi, I'm Caleb
            <Period />
          </h1>
        </Animation>
        <Animation>
          <h2 className="hero__sub-heading">
            A <span className="hero__accent">Full-Stack Developer</span> and
            Software Enthusiast.
          </h2>
        </Animation>
        <Animation>
          <p className="hero__tagline">
            Turning coffee into code, one line at a time.
          </p>
        </Animation>
      </div>

      <div className="hero__buttons">
        <Animation width={"100%"}>
          <button className="hero__cta-btn" role="button">
            My Resume
          </button>
        </Animation>
        <Animation width={"100%"}>
          <button className="hero__cta-btn" role="button">
            Let's Connect
          </button>
        </Animation>
      </div>
    </Section>
  );
}

export default Hero;
