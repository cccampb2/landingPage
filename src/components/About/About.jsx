import Animation from "../Animation/Animation";
import Period from "../Period/Period";
import Section from "../Section/Section";
import "./About.css";
import { FaHtml5, FaNode, FaReact } from "react-icons/fa6";
import { FaCss3Alt, FaGitAlt, FaGithub, FaChrome } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";

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
        <Animation>
          <div className="about__tags">
            <Tag name={"HTML"} ReactIcon={FaHtml5} />
            <Tag name={"CSS"} ReactIcon={FaCss3Alt} />
            <Tag name={"JavaScript"} ReactIcon={IoLogoJavascript} />
            <Tag name={"Git"} ReactIcon={FaGitAlt} />
            <Tag name={"GitHub"} ReactIcon={FaGithub} />
            <Tag name={"Chrome Devtools"} ReactIcon={FaChrome} />
            <Tag name={"Bash"} ReactIcon={SiGnubash} />
            <Tag name={"BEM"} ReactIcon={SiBem} />
            <Tag name={"Prettier"} ReactIcon={SiPrettier} />
            <Tag name={"React"} ReactIcon={FaReact} />
            <Tag name={"Node JS"} ReactIcon={FaNode} />
            <Tag name={"Express JS"} ReactIcon={SiExpress} />
            <Tag name={"MongoDB"} ReactIcon={SiMongodb} />
            <Tag name={"Postman"} ReactIcon={SiPostman} />
            <Tag name={"Jest"} ReactIcon={SiJest} />
            <Tag name={"ESLint"} ReactIcon={SiEslint} />
            <Tag name={"Nginx"} ReactIcon={SiNginx} />
            <Tag name={"PM 2"} ReactIcon={SiPm2} />
            <Tag name={"Nginx"} ReactIcon={SiNginx} />
            <Tag name={"Certbot"} ReactIcon={GrSecure} />
            <Tag name={"Webpack"} ReactIcon={SiWebpack} />
            <Tag name={"Figma"} ReactIcon={SiFigma} />
          </div>
        </Animation>
      </div>
    </Section>
  );
}

export default About;
