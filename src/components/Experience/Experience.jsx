import "./Experience.css";
import Section from "../Section/Section";
import ExperienceBar from "../ExperienceBar/ExperienceBar.jsx";

const Experience = () => {
  return (
    <Section name={"experience"}>
      <div className="experience">
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
        <ExperienceBar
          header={true}
          position={"Education"}
          company={"Institute"}
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
    </Section>
  );
};

export default Experience;
