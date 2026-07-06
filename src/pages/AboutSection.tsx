import "./AboutSection.css";
import { Mail, Link, FileText } from "lucide-react";

export default function AboutSection() {
  return (
    <div
      style={{
        padding: "4px",
        paddingTop: "12px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <h1 className="subsection-title">About Me</h1>
        <div
          style={{
            padding: "6px 80px 4px 8px",
          }}
        >
          Hi, I'm Iris Yang! I recently graduated from MIT with my Master of
          Engineering in Computer Science, where I researched attribution and
          visualization techniques for ViT interpretability under MIT Media
          Lab's{" "}
          <a
            href="https://www.media.mit.edu/groups/future-sketches/overview/"
            target="_blank"
          >
            Future Sketches Group
          </a>
          , advised by{" "}
          <a href="https://www.instagram.com/zach.lieberman" target="_blank">
            Zach Lieberman
          </a>
          . Before that, I double majored in Computer Science and Business
          Analytics during my undergrad.
          <br />
          <br />
          Outside of work, I am always staying active! I was a member of MIT's
          Varsity Swimming and Diving Team, have been lifting for over 5 years,
          and just recently started getting into running and cycling. You can
          check out what activities I'm currently up to{" "}
          <a href="https://www.instagram.com/narplifecrisis/" target="_blank">
            here
          </a>
          .
          <br />
          <br />
          Reach out below if you would like to get in touch!
        </div>
        <AboutLinks />
      </div>
      <img
        src="/aboutme.jpg"
        alt=""
        style={{
          maxWidth: "272px",
          aspectRatio: "3/4",
          objectFit: "cover",
          borderRadius: "8px",
          marginRight: "20px",
          marginTop: "8px",
          marginBottom: "8px",
        }}
      />
    </div>
  );
}

function AboutLinks() {
  return (
    <div className="about-links">
      <a href="mailto:iris.xy.yang@gmail.com" className="about-link">
        <Mail size={24} strokeWidth={1.8} />
        <span>Email</span>
      </a>

      <a
        href="https://www.linkedin.com/in/irisxyang"
        target="_blank"
        rel="noreferrer"
        className="about-link"
      >
        <Link size={24} strokeWidth={1.8} />
        <span>LinkedIn</span>
      </a>

      <a
        href="/Iris_Yang_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="about-link"
      >
        <FileText size={24} strokeWidth={1.8} />
        <span>Resume</span>
      </a>
    </div>
  );
}
