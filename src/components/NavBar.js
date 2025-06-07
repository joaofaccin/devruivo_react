import React from "react";
import logo from '../images/Logo_DEV_RUIVO.png';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li className="link"><a href="#home">Inicio</a></li>  {/* Link para a seção Home */}
        <li className="link"><a href="#about">Sobre</a></li>  {/* Link para a seção Sobre */}
        <li className="link"><a href="#products">Produtos</a></li>  {/* Link para a seção Produtos */}
        <li className="link"><a href="#contact">Contato</a></li>  {/* Link para a seção Contato */}
      </ul>
      <a>
        <button className="btn">
          <span><i className="ri-whatsapp-line"></i><a href="https://wa.me/5555991532335?text=Olá,%20gostaria%20de%20entrar%20em%20contato!" target="_blank" rel="noopener noreferrer"> Contratar</a></span>
        </button>
      </a>
    </nav>
  );
};

export default NavBar;
