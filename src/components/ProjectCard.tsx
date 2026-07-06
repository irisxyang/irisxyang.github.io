import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { formatDate } from "../utils/date";
import "./ProjectCard.css";

// compact used for home page display
// full used for project page display
type ProjectCardProps = {
  project: Project;
  variant: "compact" | "full";
};

export default function ProjectCard({ project, variant }: ProjectCardProps) {
  if (variant === "compact") {
    return (
      <div className="project-card-compact">
        {project.image && (
          <img src={project.image} alt="" className="project-image" />
        )}
        <Link to={`/projects#${project.id}`} className="project-card-title">
          {project.title}
        </Link>
        <p className="project-card-description">{project.overview}</p>

        {/* hover popup — CSS reveals this on :hover of .project-card */}
        {project.tools && (
          <div className="project-hover">Using: {project.tools.join(", ")}</div>
        )}

        <LinkRow links={project.links} />
      </div>
    );
  }

  return (
    <article id={project.id} className="project-card-full">
      {project.image && (
        <img src={project.image} alt="" className="project-image" />
      )}
      <h2 className="project-card-title" style={{ fontWeight: "450" }}>
        {project.title}
      </h2>
      <p className="project-card-overview">{project.overview}</p>
      <ul
        className="project-card-description-full"
        style={{ paddingLeft: "24px", paddingRight: "8px" }}
      >
        {project.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <span className="project-full-metadata">
        <div className="project-date">{formatDate(project.date)}</div>
        <LinkRow links={project.links} />
      </span>
      {project.tools && (
        <div className="project-hover">Using: {project.tools.join(", ")}</div>
      )}
    </article>
  );
}

function LinkRow({ links }: { links?: Project["links"] }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="project-links">
      {links.map((link) => {
        const external = link.href.startsWith("http");
        return external ? (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label} →
          </a>
        ) : (
          <Link key={link.href} to={link.href}>
            {link.label} →
          </Link>
        );
      })}
    </div>
  );
}
