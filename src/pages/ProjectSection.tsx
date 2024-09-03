import "./ProjectSection.css";

function ProjectSection() {
  return (
    <section id="project" className="project-background">
      <h1
        className="section-title-text"
        style={{ color: "white", marginBottom: 32 }}
      >
        Projects & Experience
      </h1>
      <div>
        <Project
          title="Working Paper: Data Monetization Research"
          date="May 2024 - Present"
          overview="Working paper under MIT CISR studying the complex relationship between corporations and their data monetization practices based on survey data from over 300 companies."
        >
          <ul style={{ margin: 0, padding: "0 20px", marginBottom: "20px" }}>
            <li>
              Created Python data processing pipeline to collect, parse, and
              clean input data to be used for further analysis
            </li>
            <li>
              Performed statistical analyses on input data to adjust for
              outliers and generalize results
            </li>
            <li>
              Helped formulate processes to determine industry benchmark
              statistics based on financial data from LSEG
            </li>
          </ul>
        </Project>
        <Project
          title="Handwriting Text Recognition Note Transcriber"
          date="April 2024"
          overview="System that takes image input of handwritten notes, processes input via Google Cloud Vision API and various optimizations, and outputs a text transcription of the notes along with cropped versions of any hand-drawn images or graphs on the note page."
        >
          <ul style={{ margin: 0, padding: "0 20px", marginBottom: "20px" }}>
            <li>Implemented usable interactive web interface using Flask</li>
            <li>
              Implemented hand-drawn image identification, distinguishing
              drawings from handwriting input using ink detection and clustering
            </li>
            <li>
              Improved Google OCR Text Recognition output by optimizing
              paragraph detection
            </li>
          </ul>
          <div className="project-link-container">
            <a className="project-link" href="/htr_proj.pdf" target="_blank">
              Project Overview →
            </a>
          </div>
          <div className="project-link-container">
            <a
              className="project-link"
              href="https://github.com/irisxyang/htr-proj"
              target="_blank"
            >
              Github Link →
            </a>
          </div>
        </Project>
        <Project
          title="PixelThis Web App"
          date="January 2023"
          overview="Full-stack web app made using JavaScript, React.js, Node.js, and Express that allows users to view, create, and post pixel drawings based on a daily random, automated prompt."
        >
          <ul style={{ margin: 0, padding: "0 20px", marginBottom: "20px" }}>
            <li>Designed and built full-stack web app</li>
            <li>
              Implemented key interactive elements on the site such as a useable
              pixel art canvas, user sign-in, and posting capabilities
            </li>
          </ul>
          <div className="project-link-container">
            <a
              className="project-link"
              href=" https://p1xel-th1s.herokuapp.com/"
              target="_blank"
            >
              Web App →
            </a>
          </div>
          <div className="project-link-container">
            <a
              className="project-link"
              href="https://github.com/irisxyang/htr-proj"
              target="_blank"
            >
              Github Link →
            </a>
          </div>
        </Project>
      </div>
    </section>
  );
}

type ProjectProps = {
  title: string;
  date: string;
  overview: string;
  children: React.ReactNode;
};

function Project(props: ProjectProps) {
  const { title, date, overview, children } = props;
  return (
    <div className="project-container">
      <span className="project-title-container">
        <h1 className="project-name">{title}</h1>
        <p className="project-date">{date}</p>
      </span>
      <p className="project-overview">{overview}</p>
      <div className="project-description">{children}</div>
    </div>
  );
}

export default ProjectSection;
