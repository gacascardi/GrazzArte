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

const imageAltText = "abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description = "Sempre em desenvolvimento";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = ["Gestão de TI", "Logística", "Artes com imagens", " Aprendizado sempre"];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = `
  Sempre amei descobrir como as coisas funcionam e a tecnologia sempre foi minha paixão.
  Hoje tenho um novo amor que é a Logística. 
  Me vi mergulhada na tecnologia em meio aos processos da minha área e decidi reaprender os conceitos de TI.
  A verdade é que o primeiro amor a gente nunca esquece.
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
          backgroundColor: "white",
          width: "50%",
          padding: "3rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Apaixonada por tecnologia e logística</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
