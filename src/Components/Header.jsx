/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        fontSize: "1.1rem",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(5, 5, 5, 0.0)",
        padding: "1rem",
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
