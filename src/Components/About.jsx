/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/background.png"; // Ensure this path is correct

const imageAltText = "meu background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description = "Apaixonada por tecnologia e logística.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Tecnologia da Informação",
  "Logística",
  "Artes com imagens",
  "Aprendizado contínuo",
];

const detailOrQuote = `
Sempre amei descobrir como as coisas funcionam e a tecnologia sempre foi minha paixão, mas hoje tenho um novo amor que é a Logística.

No entanto, em meio aos processos da minha área, mergulhei na tecnologia novamente e, então, reacendi minha paixão por TI. 

Acredito que a interseção entre tecnologia e logística pode trazer soluções inovadoras e eficientes para os desafios do meu dia a dia.
`;

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
          width: "70%",
          padding: "3rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>O primeiro amor a gente nunca esquece.</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem -5rem 2rem 2rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 1rem" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
