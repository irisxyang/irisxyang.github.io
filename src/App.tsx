import React from "react";
import AboutSection from "./pages/AboutSection";
import HomeSection from "./pages/HomeSection";
import ContactSection from "./pages/ContactSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectSection from "./pages/ProjectSection";

function App() {
  return (
    <>
      <div id="home" />
      <NavBar />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
