import "./Experience.css";
import Section from "../Section/Section";
import ExperienceBar from "../ExperienceBar/ExperienceBar.jsx";

const Experience = () => {
  return (
    <Section data_header={"dark"} name={"experience"}>
      <div className="experience">
        <div className="experience__work">
          <ExperienceBar
            header={true}
            position={"Position"}
            company={"Company"}
            years={"Years"}
          />
          <ExperienceBar
            position={"Shift Supervisor"}
            company={"Starbucks"}
            years={"2024-Present"}
          />
          <ExperienceBar
            position={"Police Officer"}
            company={"Kernersville Police Department"}
            years={"2023-2024"}
          />
          <ExperienceBar
            position={"QA Engineer"}
            company={"Qualitest Group"}
            years={"2021-2023"}
          />
        </div>
        <div className="experience__education">
          <ExperienceBar
            header={true}
            position={"Education"}
            company={"Institute"}
            years={"Years"}
          />
          <ExperienceBar
            position={"Full-Stack S.E. Student"}
            company={"TripleTen"}
            years={"2024-2025"}
          />
          <ExperienceBar
            position={"CompSci Student"}
            company={"UNC Greensboro"}
            years={"Graduated 2019"}
          />
        </div>
      </div>
    </Section>
  );
};

export default Experience;
