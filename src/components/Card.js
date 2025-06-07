import React from 'react';

function Card({ icon, title, description, items }) {
  return (
    <div className="card">
      <div className="content">
        <h4><i className={icon}></i> {title}</h4>
        <h3>{description}</h3>
        {items.map((item, index) => (
          <p key={index}>
            <i className="ri-checkbox-circle-line"></i> {item}
          </p>
        ))}
      </div>
      <a className="btn" href="https://wa.me/5555991532335?text=Olá,%20gostaria%20de%20entrar%20em%20contato!" target="_blank" rel="noopener noreferrer">
       <i className="ri-whatsapp-line"></i> Contratar
     </a>

    </div>
  );
}

export default Card;
