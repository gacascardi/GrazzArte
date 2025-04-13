import React from "react";

import image from "../images/background.png";

const imageAltText = "meu background";
const description =
  " Estou em busca de oportunidades que me ajudem a crescer profissionalmente," +
  " ganhar experiência e gerar renda com aquilo que amo fazer:" +
  " resolver problemas usando a tecnologia.";

const skillsList = [
  "Estudante de Gestão da Tecnologia da Informação",
  "Amo resolver problemas com tecnologia",
  "Criativa e apaixonada por design",
  "Foco em soluções práticas e rápidas",
  "Aprendendo sempre!",
];

/* "Manutenção e formatação de computadores",
  "Instalação de softwares e redes básicas",
  "Criação de sites com WordPress e Wix",
  "Noções de HTML, CSS e lógica de programação",
  "Familiaridade com Azure e GitHub"
*/
const About = () => {
  return (
    <section className="padding" id="about">
      <img
        className="background"
        src={image}
        style={{ height: "100%", width: "100%", objectFit: "cover", position: "fixed" }} // corrected "relactive" to "relative"
        alt={imageAltText}
      />
      <div
        style={{
          backgroundColor: "rgba(80, 240, 120, 0.1)",
          width: "75%",
          padding: "1rem",
          margin: "0",
          textAlign: "center",
        }}
      >
        <h2>Prazer, Grazi!</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 1,
            fontSize: "1.1rem",
            margin: "1rem",
            gap: "1rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
      </div>
    </section>
  );
};

export default About;
