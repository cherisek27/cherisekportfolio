import React, { Component } from "react"; 

class Header extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      toggle: false
    }
  }  

  toggleNav = () => {
    this.setState ({
      toggle: !this.state.toggle
    })
    console.log('clicked')
  }

  render() { 

    return (
      <header>    
        <button id="menu-button">
          <i className="fas fa-bars fa-lg" onClick={this.toggleNav}></i>
        </button>
        {this.state.toggle && 
          <nav className="mobile-nav"> 
            <ul>
              <li className="closebtn"  onClick={this.toggleNav}><i className="fas fa-times fa-lg"></i></li>
              <li><a href="index.html">Home</a></li>  
              <li><a href="#about">About Me</a></li> 
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav> 
        }
        <nav className="desktop-nav"> 
            <ul>
              <li className="closebtn"><i className="fas fa-times fa-lg"></i></li>
              <li><a href="index.html">Home</a></li>  
              <li><a href="#about">About Me</a></li> 
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
        </nav> 
        <div className="title-container">     
          <div className="title">
            <h1> Cherise Knox</h1> 
            <h2> Front End Developer </h2>
          </div>
        </div>
      </header> 
    )
  }
} 

export default Header; 