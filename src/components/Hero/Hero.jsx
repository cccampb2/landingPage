import "./Hero.css";
import Section from "../Section/Section";

function Hero() {
  return (
    <Section id={"hero"} name={"hero"}>
      <div className="hero__content">
        <h1 className="hero__heading">
          Hi, I'm Caleb<span style={{ color: "#00e6e6" }}>.</span>
        </h1>
        <h2 className="hero__sub-heading">
          A <span className="hero__accent">Full-Stack Developer</span> and
          Software Enthusiast.
        </h2>
        <p className="hero__tagline">
          Turning coffee into code, one line at a time.
        </p>
      </div>
      <div className="hero__buttons">
        {/*  <a
          href="https://github.com/cccampb2"
          class="hero__pill hero__pill-github"
          target="_blank"
        >
          Github
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/calebccampbell"
          class="hero__pill hero__pill-linkedin"
          target="_blank"
        >
          LinkedIn
          <FaLinkedin />
          
         
        </a> */}
        <button className="hero__cta-btn" role="button">
          My Resume
        </button>
        <button className="hero__cta-btn" role="button">
          Let's Connect
        </button>
      </div>
    </Section>
  );
}

export default Hero;
