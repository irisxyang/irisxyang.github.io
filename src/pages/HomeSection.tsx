import { Link } from "react-router-dom";
import "./HomeSection.css";
import AboutSection from "./AboutSection";
import { featuredProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { blogsByDate } from "../data/blogs";
import BlogCard from "../components/BlogCard";

export default function HomeSection() {
  return (
    <section className="home-background ">
      <div className="hero-banner">
        <h1 className="home-title">Welcome :)</h1>
        <p
          style={{
            color: "var(--app-bg)",
            marginLeft: "8px",
            marginTop: "16px",
          }}
        >
          My name is Iris—thanks for dropping by!
        </p>
      </div>
      <AboutSection />
      <HomeSubsection heading="Projects" linkTo="projects">
        {" "}
        <div className="component-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variant="compact" />
          ))}
        </div>
      </HomeSubsection>
      <HomeSubsection heading="Blogs" linkTo="blog">
        <div className="component-grid">
          {blogsByDate.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </HomeSubsection>
    </section>
  );
}

type HomeSubsectionProps = {
  heading: string;
  linkTo: string; // nav to respective page
  children: React.ReactNode;
};

function HomeSubsection(props: HomeSubsectionProps) {
  const { heading, linkTo, children } = props;
  return (
    <div style={{ padding: "4px", paddingTop: "40px" }}>
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 12px 0px 0px",
        }}
      >
        <h1 className="subsection-title">{heading}</h1>
        <Link className="subsection-link" to={`/${linkTo}`}>
          View All
        </Link>
      </span>
      {children}
    </div>
  );
}
