import "./ProjectSection.css";

function ProjectSection() {
  return (
    <section id="project" className="project-background">
      <h1
        className="section-title-text"
        style={{ color: "white", marginBottom: 32 }}
      >
        Projects
      </h1>
      <div>
        <Project title="Project #1">
          this is what i did in this specific project, lots of miscellaneous
          stuff. blah blah blah blah blah. i don't really know what else to add
          in here right now. just an example i suppose we'll see how well this
          even turns out.
        </Project>
        <Project title="Project #2">
          yea i made another project, and what about it? you probably didn't
          even know that i could even do something like that. yea, you're just a
          fucking hater. and what about it, binch?
        </Project>
        <Project title="Project #3">
          you won't believe what i did, but i made ANOTHER project... they said
          i couldn't do it, but i did it anyway. that's what i fucking thought.
          nevertheless, she persisted.
        </Project>
      </div>
    </section>
  );
}

type ProjectProps = {
  title: string;
  children: React.ReactNode;
};

function Project(props: ProjectProps) {
  const { title, children } = props;
  return (
    <div className="project-container">
      <h1 className="project-name">{title}</h1>
      <div className="project-description">{children}</div>
    </div>
  );
}

export default ProjectSection;
