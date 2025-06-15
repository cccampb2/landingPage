import React from "react";
import "./ProjectCard.css";

const ProjectCard = React.forwardRef(
  ({ title, description, link }, cardRef) => (
    <a className="card" href={link} target="_blank">
      <div className="card__content">
        <p className="card__heading">{title}</p>
        <p className="card__desc">{description}</p>
      </div>
    </a>
  )
);

export default ProjectCard;
