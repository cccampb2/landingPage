import React from "react";
import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa";

const ProjectCard = React.forwardRef(
  ({ title, description, image, link }, cardRef) => (
    <div className="card">
      <div className="card__content">
        <img src={image} alt={title} className="card__fron-content" />
        <div className="card__back-content">
          <p className="card__heading">{title}</p>
          <p className="card__desc">{description}</p>
        </div>
      </div>
    </div>
    /*
    <div  class="card">
      <img src={image} alt={`${title} image`} className="card__image" />
      <div class="card__content">
        <p class="card__title">{title}</p>
        <p class="card__description">{description}</p>
        {link && (
          <a href={link} target="_blank" className="card__link">
            <FaGithub />
          </a>
        )}
      </div>
    </div>
    */
  )
);

export default ProjectCard;
