import React from "react";
import "./ProjectCard.css";

const ProjectCard = React.forwardRef(
  ({ title, description, image, link }, cardRef) => (
    <a className="card" href={link} target="_blank">
      <div className="card__content">
        <img src={image} alt={title} className="card__front-content" />
        <div className="card__back-content">
          <p className="card__heading">{title}</p>
          <p className="card__desc">{description}</p>
        </div>
      </div>
    </a>
  )
);

export default ProjectCard;
