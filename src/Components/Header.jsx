import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        fontSize: "1.1rem",
        display: "flex",
        justifyContent: "center",
        background: "rgba(5, 5, 5, 0.0)",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a className="header-menu" href="#home">
        Início
      </a>
      <a className="header-menu" href="#about">
        Sobre
      </a>
      <a className="header-menu" href="#portfolio">
        Portfolio
      </a>
      <a className="header-menu" href="#footer">
        Contato
      </a>
      <a className="header-menu" href="#services">
        Serviços
      </a>
    </div>
  );
};

export default Header;
