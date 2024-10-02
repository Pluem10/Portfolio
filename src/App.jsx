import "./App.css";
import Header from "./components/Header";
import FeaturedBox from "./components/FeaturedBox";
import AboutBox from "./components/AboutBox";
import ProjectsBox from "./components/ProjectsBox";
import ContactBox from "./components/ContactBox";
import Footer from "./components/Footer";
import React, { useEffect } from "react";
import Typed from "typed.js";

function App() {
  useEffect(() => {
    // type Effect
    const typingEffect = new Typed(".typedText", {
      strings: ["lecturer", "Developer", "Researcher"],
      loop: true,
      typSpeed: 100,
      backspeed: 80,
      backDelay: 2000,
    });
    return () => {
      typingEffect.destroy();
    };
  });
  return (
    <div>
      <div className="App">
        <Header />
        <main className="wrapper">
          <FeaturedBox />
          <AboutBox />
          <ProjectsBox />
          <ContactBox />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
