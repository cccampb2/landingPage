import Animation from "../Animation/Animation";
import Period from "../Period/Period";
import Section from "../Section/Section";
import "./About.css";

function About() {
  return (
    <Section id={"about"} name={"about"}>
      <h2 className="about__heading">
        <div className="about__heading-content">
          <Animation>
            About me
            <Period />
          </Animation>
        </div>
        <div className="divider"></div>
      </h2>
      <div className="about__content">
        <Animation>
          <p className="about__description">
            Hi, I’m Caleb Campbell, an aspiring full-stack software engineer
            with a strong foundation in computer science. My journey into tech
            began in high school when I was first introduced to programming with
            Visual Basic, and that experience inspired me to pursue a career in
            the field. Since then, I’ve been dedicated to learning and growing
            in the world of software development.
          </p>
        </Animation>
        <Animation>
          <p className="about__description">
            I’m currently enrolled in the Full Stack Software Engineering
            program at TripleTen, where I’m expanding my knowledge of modern
            technologies and frameworks and honing my development skills. I’m
            driven by the opportunity to solve complex problems, create
            impactful products, and collaborate with others. I’m eager to apply
            my passion and technical skills to make meaningful contributions to
            a dynamic team.
          </p>
        </Animation>
      </div>
    </Section>
  );
}

export default About;
