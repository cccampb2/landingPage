import Animation from "../Animation/Animation";
import Period from "../Period/Period";
import Section from "../Section/Section";
import "./About.css";
import { FaHtml5, FaNode, FaReact } from "react-icons/fa6";
import { FaCss3Alt, FaGitAlt, FaGithub, FaChrome } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import Divider from "../Divider/Divider";

import {
  SiGnubash,
  SiBem,
  SiPrettier,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiJest,
  SiEslint,
  SiNginx,
  SiPm2,
  SiWebpack,
  SiFigma,
} from "react-icons/si";

import Tag from "../Tag/Tag";

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
        <Divider />
      </h2>
      <div className="about__content">
        <Animation>
          <h3 className="about__content-heading">Who I am</h3>
        </Animation>
        <Animation>
          <p className="about__description">
            Hi, I’m Caleb Campbell, an aspiring full-stack software engineer
            with a strong foundation in computer science. My journey into tech
            began in high school when I was first introduced to programming with
            Visual Basic, and that experience inspired me to pursue a career in
            the field. Since then, I’ve been dedicated to learning and growing
            in the world of software development
            <Period />
          </p>
          <p className="about__description">
            I’m currently enrolled in the Full Stack Software Engineering
            program at TripleTen, where I’m expanding my knowledge of modern
            technologies and frameworks and honing my development skills. I’m
            driven by the opportunity to solve complex problems, create
            impactful products, and collaborate with others. I’m eager to apply
            my passion and technical skills to make meaningful contributions to
            a dynamic team
            <Period />
          </p>
        </Animation>

        <Animation>
          <h3 className="about__content-heading">Career Goals</h3>
        </Animation>
        <Animation>
          <p className="about__career-content">
            My goal is to contribute to impactful projects that benefit both my
            company and our clients, continuously expand my technical and
            interpersonal skills, and eventually grow into a senior engineering
            role where I can mentor and support others in achieving their career
            goals
            <Period />
          </p>
        </Animation>
      </div>
      <div className="about__content">
        <Animation>
          <h3 className="about__content-heading">Skills</h3>
        </Animation>
        <Animation>
          <div className="about__skills">
            <p className="about__skill">
              <span className="about__skill-accent">Collaboration: </span>
              Working effectively with diverse teams, sharing knowledge, and
              supporting colleagues
              <Period />
            </p>
            <p className="about__skill">
              <span className="about__skill-accent">Problem-Solving: </span>
              Identifying challenges, analyzing possible solutions, and
              implementing effective strategies
              <Period />
            </p>
            <p className="about__skill">
              <span className="about__skill-accent">Adaptability: </span>
              Quick learner who embraces new technologies and challenges
              <Period />
            </p>
            <p className="about__skill">
              <span className="about__skill-accent">Communication: </span>
              Clearly conveying ideas in writing and speech, active listening,
              and adapting to different audiences
              <Period />
            </p>
            <p className="about__skill">
              <span className="about__skill-accent">Attention to Detail: </span>
              Catching small errors, ensuring accuracy in reports, and
              maintaining high-quality work
              <Period />
            </p>
            <p className="about__skill">
              <span className="about__skill-accent">
                Performing Under Pressure:{" "}
              </span>
              Staying focused and delivering results in high-stress situations
              <Period />
            </p>
          </div>
        </Animation>
      </div>
    </Section>
  );
}

export default About;
