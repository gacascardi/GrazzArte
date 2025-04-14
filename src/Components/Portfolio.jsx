import React from "react";

import image from "../images/foto.png";

const imageAltText = "um pouco de mim";

const projectList = [
  {
    title: "Social Media e Marketing Designer ",
    description:
      "Uma outra parte de mim que é a paixão por criação de artes visuais e marketing digital.",
    url: "https://www.instagram.com/grazz_arte/",
  },
  {
    title: "Minha primeira página",
    description:
      "Essa é minha primeira página criada com React e hospedada no GitHub Pages, onde compartilho um pouco de mim.",
    url: "https://www.cascardi.tech",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Meu ambiente de desenvolvimento onde pratico e aprendo mais sobre ferramentas e tecnologias. Clique no link da GitHub abaixo para acessar meu repositório e explorar os meus passos do meu aprendizado.",
    url: "https://github.dev/gacascardi",
  },
  {
    title: "Aprendendo com GitHub Pages",
    description:
      "Tenho projetos publicados em GitHub Pages com HTML, CSS, JavaScript e estou aprendendo sobre Microsoft Azure para expandir minhas habilidades em cloud e deploy.",
    url: "https://github.com/gacascardi", // Updated URL
  },
  {
    title: "Novo Projeto",
    description:
      "Um projeto inovador que estou desenvolvendo para aprimorar minhas habilidades em programação e Desenvolvimento Web.",
    url: "https://github.com/gacascardi/mimos-da-dany",
  },
  {
    title: "Amor pelo funcionamento",
    description:
      "Aplico meus conhecimentos oferecendo serviços como suporte técnico, criação de sites e manutenção de softwares em geral.",
    url: "https://github.com/gacascardi",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Um pouco sobre mim.</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "1rem" }}>
        <div style={{ maxWidth: "35%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ 
              height: "90%",
              width: "50%",
              objectFit: "cover",
              position: "relative",
              borderRadius: "20%",
              boxShadow: "-8px -2px 10px 8px rgba(18, 243, 29, 0.56)",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "100em" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
