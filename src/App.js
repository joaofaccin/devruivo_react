import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Features from "./components/Features";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simula carregamento
    const timer = setTimeout(() => {
      setFadeOut(true); // inicia a animação de fade-out
      setTimeout(() => setLoading(false), 500); // espera 0.5s e esconde o loader
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
          <Loader />
        </div>
      ) : (
        <>
          <NavBar />
          <Header />
          <Features />
          <Services />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
