/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/foto.png";

const imageAltText = "um pouco de mim";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
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
      "Meu ambiente de desenvolvimento onde pratico e aprendo mais sobre ferramentas e tecnologias. Clique no link da GITHub Codespaces para acessar meu repositório e explorar o código.",
    url: "https://github.dev/gacascardi",
  },
  {
    title: "Sites em andamento",
    description:
      "Tenho projetos publicados em GitHub Pages e estou aprendendo sobre Microsoft Azure para expandir minhas habilidades em cloud e deploy.",
    url: "https://github.com/gacascardi", // Updated URL
  },
  {
    title: "Novo Projeto",
    description:
      "Um projeto inovador que estou desenvolvendo para aprimorar minhas habilidades em programação.",
    url: "https://github.com/gacascardi/novo-projeto",
  },
  {
    title: "Amor pelo funcionamento",
    description:
      "Aplico meus conhecimentos oferecendo serviços como suporte técnico, criação de sites e manutenção de softwares em geral.",
    url: "https://github.com/gacascardi/novo-projeto-adicional",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Um pedaço de mim</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "2rem" }}>
        <div style={{ maxWidth: "35%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "50%", objectFit: "cover" }}
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
