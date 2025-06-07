import React, { useState } from "react";
import Modal from "./Modal/Modal"; // componente do modal
import "./Modal/Modal.css"; // estilos do modal

const Features = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: "", description: "" });

  const handleOpenModal = (title, description) => {
    setModalData({ title, description });
    setShowModal(true);
  };

  const features = [
    {
      icon: "ri-money-dollar-box-line",
      title: "Preço acessível",
      text: "Entre em contato",
      modalMessage: "Oferecemos produtos e serviços com preço acessível, pensando em quem busca qualidade sem gastar muito. Nosso compromisso é garantir o melhor custo-benefício, para que você tenha uma ótima experiência sem pesar no bolso. Acreditamos que qualidade não precisa ser sinônimo de preço alto, por isso trabalhamos para manter valores justos e competitivos. Seja para o seu dia a dia ou ocasiões especiais, nossos preços são pensados para caber no seu orçamento. Assim, mais pessoas podem aproveitar o que temos de melhor, sem abrir mão do que realmente importa. Transparência e respeito ao cliente são pilares para oferecer sempre o melhor. Aqui, você encontra preços que facilitam o acesso sem perder a qualidade. Venha conferir e descubra como é possível ter excelência com preço acessível. Sua satisfação é nossa prioridade. Garantimos que você fará a escolha certa com nossos preços amigáveis."
    },
    {
      icon: "ri-hard-drive-3-line",
      title: "Banco de Dados",
      text: "Banco Local ou na Nuvem.",
      modalMessage: "Um banco de dados local é instalado e executado diretamente no computador ou servidor físico da empresa, oferecendo controle total sobre os dados e acesso rápido, sem depender da internet. É ideal para sistemas que precisam de alta performance e segurança em ambiente fechado. Já o banco de dados na nuvem é hospedado em servidores remotos gerenciados por provedores de serviços, permitindo acesso flexível e remoto a partir de qualquer lugar com conexão à internet. Ele oferece escalabilidade, backup automático e facilidade de manutenção, reduzindo custos com infraestrutura física. A escolha entre banco de dados local ou na nuvem depende das necessidades específicas, como volume de dados, segurança, mobilidade e orçamento. Muitas vezes, as soluções híbridas combinam os benefícios de ambos os modelos para maximizar eficiência e segurança."
    },
    {
      icon: "ri-bug-line",
      title: "Livre de Bugs",
      text: "Resolvemos o seu problema.",
      modalMessage: "Nosso software é desenvolvido com rigorosos processos de qualidade e testes contínuos para garantir que ele seja livre de bugs e funcione de forma estável e eficiente. Trabalhamos para oferecer uma experiência confiável, onde você não precisa se preocupar com erros ou falhas inesperadas. Atualizações regulares mantêm o sistema sempre otimizado e seguro, corrigindo qualquer problema rapidamente antes que impacte o usuário. Nosso compromisso é entregar uma solução robusta, que atenda suas necessidades com máxima qualidade e desempenho. Assim, você pode focar no que realmente importa, sem interrupções causadas por defeitos no sistema."
    },
    {
      icon: "ri-history-line",
      title: "Alto desempenho",
      text: "Seu site pronto em dias.",
      modalMessage: "Nosso sistema é projetado para oferecer alto desempenho, garantindo rapidez e eficiência em todas as operações. Com tecnologia otimizada e recursos avançados, ele processa dados e executa tarefas com agilidade, mesmo sob alta demanda. Isso significa menos tempo de espera, maior produtividade e uma experiência fluida para o usuário. Seja para aplicações complexas ou uso diário, o foco no desempenho assegura que tudo funcione de forma estável e responsiva, sem travamentos ou lentidão. Investimos continuamente em melhorias para manter a performance no mais alto nível, atendendo às expectativas de clientes exigentes."
    },
    {
      icon: "ri-code-s-slash-line",
      title: "Tecnologia atual",
      text: "Usamos as melhores tecnologias do mercado.",
      modalMessage: "Nossa solução utiliza tecnologia atual e de ponta, garantindo inovação, segurança e eficiência. Com ferramentas modernas e atualizadas, conseguimos entregar produtos e serviços alinhados às melhores práticas do mercado. Isso permite maior compatibilidade, desempenho otimizado e facilidade de integração com outras plataformas. Investimos constantemente em atualização tecnológica para oferecer uma experiência moderna, confiável e preparada para os desafios do presente e do futuro. Assim, você conta com soluções robustas, seguras e que acompanham a evolução digital."
    },
    {
      icon: "ri-smartphone-line",
      title: "Criação de aplicativos mobile",
      text: "Criamos seu app para Android e IOS.",
      modalMessage: "Oferecemos serviços completos de criação de aplicativos mobile, desenvolvidos para atender às necessidades específicas do seu negócio. Utilizamos as tecnologias mais atuais para criar apps intuitivos, rápidos e com design moderno, garantindo ótima experiência para o usuário. Seja para Android, iOS ou ambos, nossos aplicativos são otimizados para alto desempenho, segurança e compatibilidade com diferentes dispositivos. Trabalhamos desde o planejamento até a publicação nas lojas, acompanhando todas as etapas para entregar uma solução eficaz e inovadora. Nosso objetivo é transformar suas ideias em aplicativos funcionais que impulsionam seu crescimento e conectam você ao seu público onde quer que ele esteja."
    }
  ];

  return (
    <section id="about">
      <section className="container">
        <h2 className="header">Nossos Recursos</h2>
        <div className="features">
          {features.map((item, index) => (
            <div className="card" key={index}>
              <span><i className={item.icon}></i></span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              <a href="/" onClick={(e) => { e.preventDefault(); // Evita redirecionamento
                 handleOpenModal(item.title, item.modalMessage);}}>
                 Saiba Mais. <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          ))}
        </div>
      </section>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>{modalData.title}</h2>
        <p>{modalData.description}</p>
      </Modal>
    </section>
  );
};

export default Features;
