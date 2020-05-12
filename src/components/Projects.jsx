import React from 'react'; 
import iab from "../images/iab.png";
import movie from "../images/movie.png";
import verity from "../images/verity.png";


function Projects() {
  return (
    <>
      <h2 style={{color: "#000"}}>Projects</h2>
        <div className="projects-container">
          <a name="projects" className="link-container"></a>
            <div className="img-thumb">
              <img alt="thumb" src={iab} />
              <div className="img-caption">
                <span className="text-center">Interactive Advertising Bureau (IAB)</span>
                <a href="https://iab.netlify.app" target="_blank">
                  <button className="btn-view">View Website</button>
                </a>
              </div>
            </div>
            <div className="img-thumb">
              <img alt="thumb" src={verity} />
              <div className="img-caption">
                <span className="text-center">High-Fidelity Wireframe of Video Analysis Tool</span>
                <a href="https://iab.netlify.app" target="_blank">
                </a>
              </div>
            </div>
            <div className="img-thumb">
              <img alt="thumb" src={movie} />
              <div className="img-caption">
                <span className="text-center">Movie App</span>
                <a href="https://upbeat-murdock-5265e3.netlify.app" target="_blank">
                  <button className="btn-view">View Website</button>
                </a>
              </div>
            </div>
        </div>
    </>
  )
}

export default Projects; 