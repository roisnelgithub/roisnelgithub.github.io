import "./projects.styles.css";

import { projects } from "../../utils/store";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <>
      <h2>Proyectos</h2>
      <div className="project-list-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
