import React from "react";
import logo from '../images/Logo_DEV_RUIVO.png'
const Footer = () => {
  return (
    <section id="contact">
    <footer className="container">
      <span className="blur"></span>
      <span className="blur"></span>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <p>Criando o futuro da interação digital.</p>
      <div className="socials">
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-box-fill"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="ri-github-fill"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="ri-whatsapp-fill"></i></a>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
