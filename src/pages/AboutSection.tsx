import SectionContainer from "../components/SectionContainer";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <SectionContainer id="about">
      <h1 className="section-title-text">About</h1>
      <div className="about-container ">
        <p className="about-paragraph">
          Hi, I'm Iris, a senior at MIT double majoring in Computer Science and
          Business Analytics. Here's a bit about myself
          {" (if you even care)"}:
          <br />
        </p>
        <img src="/headshot.jpg" height={500} />
      </div>
    </SectionContainer>
  );
}
