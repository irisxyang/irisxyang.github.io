import React, { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import HomeSection from "./pages/HomeSection";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import ProjectSection from "./pages/ProjectSection";
import BlogSection from "./pages/BlogSection";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import NotFoundPage from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactModal from "./components/ContactModal";

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell">
        <SideBar onContactClick={() => setContactOpen(true)} />
        <main className="app-main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomeSection />
                  {/* <Filler /> */}
                </>
              }
            />
            <Route path="/projects" element={<ProjectSection />} />
            <Route path="/blog" element={<BlogSection />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
      {/* // <NavBar />
      // <div id="home" />
      // <Routes>
      //   <Route
      //     path="/"
      //     element={
      //       <>
      //         <HomeSection />
      //         <AboutSection />
      //         <ProjectSection />
      //         <ContactSection />
      //       </>
      //     }
      //   />
      //   <Route path="/portfolio/" element={<Portfolio />} />
      //   <Route path="*" element={<NotFoundPage />} />
      // </Routes> */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
