import SectionContainer from "../components/SectionContainer";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <SectionContainer id="about">
      <h1 className="section-title-text">About</h1>
      <div className="about-container ">
        <p className="about-paragraph">
          Hi, I'm Iris! I'm a senior at MIT, double majoring in Computer Science
          and Business Analytics. I have been coding since junior year of high
          school, and have experience in Python, Java, C, HTML, CSS, R, React,
          and Typescript. I have been a part of multiple undergraduate research
          roles in the data science and machine learning fields, and am
          extremely proficient in handling data analysis.
          <br />
          <br />
          Outside of my coursework, I am also involved in leadership roles
          across multiple prestigious student organizations at MIT, such as{" "}
          <a href="https://www.mitsbc.org/" target="_blank">
            MIT Sloan Business Club
          </a>{" "}
          and{" "}
          <a href="http://brassrat.mit.edu/2025/" target="_blank">
            Class of 2025 Ring Committee
          </a>
          .
          <br />
          <br />
          Beyond my technical experience, I am a part of MIT's Varsity Swimming
          and Diving Team, and I am passionate about all things art (Check out
          my{" "}
          <a href="/portfolio" target="_blank">
            portfolio
          </a>
          !). I also love exploring Boston's food scene, and have a compiled,
          categorized, and ranked list of restaurants I hope try in the future.
        </p>
        <img src="/headshot.jpg" height={500} />
      </div>
    </SectionContainer>
  );
}
