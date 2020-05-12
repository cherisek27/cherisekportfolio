import React from 'react'; 

function Skills() {
  return (
    <>
     <h2 style={{color: "#000"}}>Skills</h2>
     <div className="skills">
        <a name="skills" href="/" className="link-container"></a> 
          <i className="fas fa-laptop-code fa-2x" style={{display: "flex", justifyContent: "center", marginBottom: "3rem"}}></i>
          <ul>
            <li>HTML</li>
            <li>CSS/Sass</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>Jquery</li>
            <li>React</li>
            <li>Node.Js</li>
            <li>Mongo DB</li>
            <li>Git/Github</li>
            <li>Sketch</li>
          </ul>
      </div>
      <div className="border-bottom"></div>
    </>
  )
}

export default Skills; 