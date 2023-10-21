import { useState } from "react";
import PropTypes from "prop-types";

import shopi from "../../assets/images/shopi.png";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = ({ project }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div className="project-card-container">
      <div className="card-img-container">
        <img
          className="image-project"
          src={project.image !== "" ? project.image : shopi}
          alt="Phone and tablet"
        />
        {project.responsive && (
          <div className="card-responsive-icon">
            <img src={project.mobileImage} alt="Phone and tablet" />
          </div>
        )}
      </div>
      <div className="card-name-container">
        <span>{project.name}</span>
      </div>
      <div className="card-tools-container">
        {project.tools.map((tool, index) => (
          <div key={index}>
            <img src={tool.url} alt={tool.name} width="20px" />
          </div>
        ))}
      </div>
      {showDetail && (
        <>
          <div className="card-description-container">
            <p>{project.description}</p>
            <span>(v{project.version})</span>
          </div>
          <div className="card-arrow"></div>
        </>
      )}
      <div className="card-links">
        {project.url_public !== "" && (
          <a
            href={project.url_public}
            target="_blank"
            rel="noreferrer"
            className="link-to-social-media project-links"
          >
            <BsGithub />
          </a>
        )}
        {project.url_git_hub !== "" && (
          <a
            href={project.url_git_hub}
            target="_blank"
            rel="noreferrer"
            className="link-to-social-media project-links"
          >
            <BiLinkExternal />
          </a>
        )}
      </div>
      <span className="card-details" onClick={() => setShowDetail(!showDetail)}>
        {showDetail ? "Ocultar" : "Detalles"}
      </span>
    </div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
