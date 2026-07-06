import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { projectsByDate } from "../data/projects";
import "./ProjectSection.css";

export default function ProjectSection() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash]);
  return (
    <div className="page-container">
      <h1 className="page-title">Projects</h1>
      <p className="page-overview">
        These are a few of the projects that I have worked on over the years.
      </p>
      <div className="project-grid">
        {projectsByDate.map((project) => (
          <ProjectCard key={project.id} project={project} variant="full" />
        ))}
      </div>
    </div>
  );
}
