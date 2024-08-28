import SectionContainer from "../components/SectionContainer";
import "./ContactSection.css";

function ContactSection() {
  return (
    <SectionContainer id="contact">
      <h1 className="section-title-text">Contact</h1>
      <div className="contact-section-container">
        <Contact
          title="Email"
          dest="mailto:iris.xy.yang@gmail.com"
          bg="url('/cloud1.png')"
        >
          Email me
        </Contact>
        <Contact
          title="LinkedIn"
          dest="https://www.linkedin.com/in/irisxyang"
          bg="url('/cloud2.png')"
        >
          Connect with me
        </Contact>
        <Contact title="Resume" dest="/resume.pdf" bg="url('/cloud3.png')">
          View my resume
        </Contact>
      </div>
    </SectionContainer>
  );
}

type ContactProps = {
  title: string;
  dest: string;
  bg: string;
  children: React.ReactNode;
};

function Contact(props: ContactProps) {
  const { title, dest, bg, children } = props;
  return (
    <div className="contact-container" style={{ backgroundImage: bg }}>
      <a className="contact-container-layer" href={dest} target="_blank">
        <h1 className="contact-name">{title}</h1>
        <div className="contact-subheading">{children}</div>
      </a>
    </div>
  );
}

export default ContactSection;
