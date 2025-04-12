import React from "react";

const Services = () => {
  return (
    <section className="min-height padding">
      <h2>Serviços & Preços</h2>
      <div className="container">
        <div className="box">
          <h3>Formatação e otimização de PC</h3>
          <p className="small">R$ 60 a R$ 100</p>
        </div>
        <div className="box">
          <h3>Instalação de programas</h3>
          <p className="small">R$ 30 a R$ 60</p>
        </div>
        <div className="box">
          <h3>Criação de site (1 página)</h3>
          <p className="small">R$ 200 a R$ 300</p>
        </div>
        <div className="box">
          <h3>Site com 3+ páginas</h3>
          <p className="small">R$ 400 a R$ 600</p>
        </div>
        <div className="box">
          <h3>Planilhas automatizadas</h3>
          <p className="small">R$ 150 a R$ 250</p>
        </div>
        <div className="box">
          <h3 style={{ color: '#3bfa2a' }}>Criação de Artes para Marketing Digital</h3>
          <p className="small">Pacotes sob consulta</p>
        </div>
      </div>
    </section>
  );
};

export default Services;