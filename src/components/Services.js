import React from "react";
import Card from './Card'; // Importando o componente Card
const Services = () => {
  return (
    <section id="products">
    <section className="container">
      <h2 className="header">Do que você precisa? O Dev Ruivo tem a solução</h2>
      <p className="sub-header">Abaixo você encontra alguns de nossos serviços!</p>
      <div className="pricing">
        {/* Similar aos cards de serviços */}
        <Card 
            icon="ri-pages-line" 
            title="Páginas web"
            description="Entre em contato."
            items={[
              "Design Responsivo",
              "Certificado SSL",
              "Melhores techs do mercado",
              "Integração com banco de dados"
            ]}
          />
          <Card 
            icon="ri-computer-line" 
            title="Softwares desktop"
            description="Entre em contato."
            items={[
              "Sistemas desktop para seu empreendimento",
              "Integração com banco de dados",
              "Suporte 7 dias na semana",
              "Integração com site/app"
            ]}
          />
          <Card 
            icon="ri-smartphone-line" 
            title="Aplicativos mobile"
            description="Entre em contato."
            items={[
              "Aplicativos para Android e IOS",
              "Design Personalizado",
              "Integração com banco de dados",
              "Suporte 7 dias na semana"
            ]}
          />
        {/* Adicione os outros cards conforme necessário */}
      </div>
    </section>
    </section>
  );
};

export default Services;
