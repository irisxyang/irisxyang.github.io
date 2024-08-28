import React from "react";
import AboutSection from "./pages/AboutSection";
import HomeSection from "./pages/HomeSection";
import ContactSection from "./pages/ContactSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectSection from "./pages/ProjectSection";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div id="home" />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HomeSection />
              <AboutSection />
              <ProjectSection />
              <ContactSection />
            </div>
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
