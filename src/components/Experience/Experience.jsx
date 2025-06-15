import Section from "../Section/Section";
import "./Experience.css";
import Period from "../Period/Period";
import Animation from "../Animation/Animation";
import Divider from "../Divider/Divider";
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
import sprint2 from "../../assets/sprint-2.png";
import sprint3 from "../../assets/sprint-3.png";
import sprint10 from "../../assets/sprint-10.png";
import finalsprint from "../../assets/finalsprint.png";

function Experience() {
  return (
    <Section name={"experience"} id={"experience"}>
      <h2 className="experience__heading">
        <div className="experience__heading-content">
          <Animation>
            Experience
            <Period />
          </Animation>
        </div>
        <Divider />
      </h2>
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
              <div className="panel__company">
                Kernersville Police Department
              </div>
              <div className="panel__year">December 2023 - August 2024</div>
            </div>
            <div className="panel__role-location">
              <div className="panel__role">
                <span className="panel__accent">Police Officer</span>
              </div>
              <div className="panel__location">Kernersville, NC</div>
            </div>
            <p className="panel__content">
              Utilizes problem-solving skills to analyze complex situations and
              make critical decisions under pressure; communicates with diverse
              populations to de-escalate conflicts and maintain public safety;
              adapts to changing environments and technologies to implement
              crime prevention strategies.
            </p>
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
            <h3 className="experience__project-heading">
              Projects
              <Period />
            </h3>
          </Animation>
          <div className="experience__project-content">
            <Animation>
              <ProjectCard
                title={"Triple Peaks Coffee Shop"}
                link={"https://github.com/cccampb2/se_project_coffeeshop"}
                description={`This is the second project of the Software Engineering program at
            TripleTen. This project was built to demonstrate my growth in HTML
            and CSS. The design closely follows the Figma layout provided to us
            for reference.`}
              />
            </Animation>
            <Animation>
              <ProjectCard
                title={"Spots"}
                link={"https://github.com/cccampb2/se_project_spots"}
                description={`This project was completed to showcase my ability to use the grid layout and media queries. The technologies used to complete the project were Figma for design planning, HTML and CSS for structure and styling, and Chrome’s DevTools for testing and debugging.`}
              />
            </Animation>
            <Animation>
              <ProjectCard
                title={"What To Wear"}
                link={"https://github.com/cccampb2/se_project_react"}
                description={`WTWR (What To Wear) is a full-stack React app that helps users pick outfits based on local weather. Users can view, add, and manage weather-specific clothing on their profile.

The app features JWT-based authentication, a responsive React front end, and a Node.js/Express backend with MongoDB for data storage.`}
              />
            </Animation>
            <Animation>
              <ProjectCard
                title={"NewsExplorer"}
                link={"https://github.com/cccampb2/se-final-project"}
                description={`NewsExplorer is a React application that enables users to search for news articles by keyword using a news API. Users can also save articles to view later on their ‘Saved Articles’ page. It is a full-stack application with a mocked backend and is fully responsive across all screen sizes.`}
              />
            </Animation>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Experience;
