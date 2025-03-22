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
    title: "Aprendizado em Azure Static Web Apps",
    description:
      "Aprendizado contínuo em parceria com grupos de estudo e comunidade de iniciantes Github.",
    url: "https://github.com/gacascardi/azure-static-web-apps",
  },
  {
    title: "Social Media e Marketing Designer (Em constante desenvolvimento)",
    description: "Paixão por criação de artes para redes sociais e marketing digital.",
    url: "https://www.instagram.com/grazz_arte/",
  },
  {
    title: "My Resume Site",
    description:
      "Portfólio de aprendizado e prática de desenvolvimento web, com foco em HTML, CSS e JavaScript.",
    url: "https://github.com/gacascardi/my-resume-site",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Percorrendo caminhos de aprendizagem com GitHub.dev, Github Pages e GitHub Codespaces para aperfeiçoamentos",
    url: "https://github.dev/gacascardi",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Um pedaço de mim</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
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
