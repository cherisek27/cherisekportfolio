import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="layout-container">
      <Header />
      <section className="main-content">
        <div className="content">
          <About />
          <Skills />
          <Projects />
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default App;
