import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/" element={<AboutPage />} />
        {/* Make sure this is the last route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
