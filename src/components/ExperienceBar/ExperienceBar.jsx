import "./ExperienceBar.css";
import StaggerAnimation from "../StaggerAnimation/StaggerAnimation";

const ExperienceBar = ({ header = false, position, company, years }) => {
  return (
    <>
      {header && (
        <div className="ExperienceBar ExperienceBar_header">
          <span>{position}</span>
          <div className="ExperienceBar__company-years ExperienceBar__company-years_header">
            <span className="ExperienceBar__company">{company}</span>
            <span className="ExperienceBar__years">{years}</span>
          </div>
        </div>
      )}
      {!header && (
        <div className="ExperienceBar">
          <span>
            <StaggerAnimation>{position?.toUpperCase()}</StaggerAnimation>
          </span>
          <div className="ExperienceBar__company-years">
            <span className="ExperienceBar__company">{company}</span>
            <span className="ExperienceBar__years">{years}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceBar;
