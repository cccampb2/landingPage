import Section from "../Section/Section";
import "./Experience.css";
import Period from "../Period/Period";
import Animation from "../Animation/Animation";
import Divider from "../Divider/Divider";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Tag from "../Tag/Tag";
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
import ProjectCard from "../ProjectCard/ProjectCard";
import sprint_1 from "../../assets/sprint-1.png";
import sprint_2 from "../../assets/sprint-2.png";
import sprint_3 from "../../assets/sprint-3.png";
import sprint_7 from "../../assets/sprint-7.png";
import sprint_10 from "../../assets/sprint-10.png";

function Experience() {
  const [height, setHeight] = useState(0);
  const experienceRef = useRef(null);
  const trackerPath = useRef(null);
  const { scrollYProgress } = useScroll({
    target: experienceRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    setHeight(trackerPath.current.clientHeight);
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <Section ref={experienceRef} name={"experience"} id={"experience"}>
      <h2 className="experience__heading">
        <div className="experience__heading-content">
          <Animation>
            Experience
            <Period />
          </Animation>
        </div>
        <Divider />
      </h2>
      <div ref={trackerPath} className="experience__line">
        <motion.div style={{ y }} className="experience__tracker"></motion.div>
      </div>
      <div className="experience__content">
        <Animation>
          <div className="experience__panel">
            <div className="panel__company-year">
              <div className="panel__company">TripleTen</div>
              <div className="panel__year">September 2024 - Current</div>
            </div>
            <div className="panel__role-location">
              <div className="panel__role">
                <span className="panel__accent">
                  Full Stack Software Engineer Student
                </span>
              </div>
              <div className="panel__location">Online/Remote</div>
            </div>
            <p className="panel__content">
              At TripleTen, I’ve gained hands-on experience in front-end and
              back-end development, deployment and testing frameworks,
              databases, version control platforms, APIs, and agile
              methodologies. The curriculum is kept up to date with industry
              standards, ensuring I learn the latest tools and best practices
              while building real-world projects in a collaborative environment.
            </p>
            <h3 className="panel__heading">Technologies I Use</h3>
            <div className="experience__tags">
              <Tag name={"HTML"} ReactIcon={FaHtml5} />
              <Tag name={"CSS"} ReactIcon={FaCss3Alt} />
              <Tag name={"JavaScript"} ReactIcon={IoLogoJavascript} />
              <Tag name={"Bash"} ReactIcon={SiGnubash} />
              <Tag name={"React"} ReactIcon={FaReact} />
              <Tag name={"Node JS"} ReactIcon={FaNode} />
              <Tag name={"Express JS"} ReactIcon={SiExpress} />
              <Tag name={"Git"} ReactIcon={FaGitAlt} />
              <Tag name={"GitHub"} ReactIcon={FaGithub} />
              <Tag name={"Chrome Devtools"} ReactIcon={FaChrome} />
              <Tag name={"Prettier"} ReactIcon={SiPrettier} />
              <Tag name={"ESLint"} ReactIcon={SiEslint} />
              <Tag name={"Webpack"} ReactIcon={SiWebpack} />
              <Tag name={"MongoDB"} ReactIcon={SiMongodb} />
              <Tag name={"Postman"} ReactIcon={SiPostman} />
              <Tag name={"Nginx"} ReactIcon={SiNginx} />
              <Tag name={"PM 2"} ReactIcon={SiPm2} />
              <Tag name={"Certbot"} ReactIcon={GrSecure} />
              <Tag name={"Figma"} ReactIcon={SiFigma} />
              <Tag name={"BEM"} ReactIcon={SiBem} />
              <Tag name={"Jest"} ReactIcon={SiJest} />
            </div>
          </div>
        </Animation>
        <Animation>
          <div className="experience__panel">
            <div className="panel__company-year">
              <div className="panel__company">Qualitest Group</div>
              <div className="panel__year">August 2021 - August 2023</div>
            </div>
            <div className="panel__role-location">
              <div className="panel__role">
                <span className="panel__accent">QA Engineer</span>
              </div>
              <div className="panel__location">Greensboro, NC</div>
            </div>
            <p className="panel__content">
              While working alongside Alight Solutions, I investigated and
              resolved critical issues, improved test cases, expanded the QA
              team to boost productivity by 50%, mentored several team members,
              led discussions to refine requirements and test designs, and
              actively participated in agile processes, including scrum meetings
              and stakeholder demos.
            </p>
          </div>
        </Animation>
        <div className="experience__projects">
          <Animation width={"100%"}>
            <h3 className="experience__project-heading">Projects</h3>
          </Animation>
          <div className="experience__project-content">
            <Animation>
              <div className="experience__card">
                <ProjectCard
                  image={sprint_1}
                  title={"TripleTen Library"}
                  description={"Description text"}
                />
              </div>
            </Animation>
            <Animation>
              <div className="experience__card">
                <ProjectCard
                  image={sprint_2}
                  link={"https://github.com/cccampb2/se_project_coffeeshop"}
                  title={"TripleTen Coffee Shop"}
                  description={"Description text"}
                />
              </div>
            </Animation>
            <Animation>
              <div className="experience__card">
                <ProjectCard
                  image={sprint_3}
                  link={"https://github.com/cccampb2/se_project_spots"}
                  title={"Spots"}
                  description={"Description text"}
                />
              </div>
            </Animation>
            <Animation>
              <div className="experience__card">
                <ProjectCard
                  image={sprint_7}
                  title={"Simple Todo App"}
                  link={"https://github.com/cccampb2/se_project_todo-app"}
                  description={"Description text"}
                />
              </div>
            </Animation>
            <Animation>
              <div className="experience__card">
                <ProjectCard
                  image={sprint_10}
                  link={"https://github.com/cccampb2/se_project_react"}
                  title={"What to Wear (WTWR)"}
                  description={"Description text"}
                />
              </div>
            </Animation>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Experience;
