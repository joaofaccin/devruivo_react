import React from "react";
import hands from '../images/Hand_coding_bro.png'
const Header = () => {
  return (
    <section id="home">
    <header className="container">
      <div className="content">
        <span className="blur"></span>
        <span className="blur"></span>
        <h4>Transformamos sua ideia em solução</h4>
        <h1>Oi, sou o <span>&lt;Dev.Ruivo/&gt;</span> Full Stack Developer</h1>
        <p>
          Criando o futuro da interação digital. Transformando conceitos em experiências visuais.
          Escrevendo código para conectar pessoas e informações. Navegando pelas complexidades do front-end e
          back-end. Criando interfaces que cativam e facilitam. Combinando criatividade e lógica para construir a próxima
          geração de websites e aplicativos.
        </p>
        <button className="btn pulse">
         <a href="https://wa.me/5555991532335?text=Olá,%20gostaria%20de%20entrar%20em%20contato!" target="_blank" rel="noopener noreferrer"> Entrar em contato</a>
       </button>


      </div>
      <div className="image pulse">
        <img src={hands} alt="Coding" />
      </div>
    </header>
    </section>
  );
};

export default Header;
