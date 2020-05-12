import React from 'react'; 

function Contact() {
  return (
    <footer>
        <div className="contact-container">
          <a name="contact" className="link-container"></a>
          <a href="mailto:cheriseknox@gmail.com" className="contact">
            <i className="fas fa-envelope contact-icon"></i>
          </a>
          <a href="https://www.linkedin.com/in/cherise-knox" className="contact">
          <i className="fab fa-linkedin-in contact-icon"></i>
          </a>
          <a href="https://github.com/cherisek27" className="contact"> 
            <i className="fab fa-github contact-icon"></i>
          </a>
        </div>
    </footer>
  )
}

export default Contact; 