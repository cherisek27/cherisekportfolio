import React from 'react'; 
import profile from "../images/profile-pic.jpg";

function About() {
  return (
    <>
      <img alt="profile pic" className="about-me-image" src={profile} />
      <a href="/" name="about" className="link-container">
        <h2>About Me</h2>
        <p className="about-me-description">
            Coming from a marketing background, I started my web development journey in 2017 and I have been enjoying
            growing and learning throughout this journey. There is never a dull moment
            within development. I am evolving on my design side and always trying to learn 
            or add on to my current knowledge. Traveling, running, and spending time with 
            family and frisends keep my balance between web development.
        </p>
      </a>
      <div className="border-bottom"></div>
    </>
  )
}

export default About; 