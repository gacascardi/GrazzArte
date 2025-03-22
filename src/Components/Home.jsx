/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import PropTypes from "prop-types";
import image from "../images/inicio.png";
import "../styles.css"; // Certifique-se de importar o arquivo CSS

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

const imageAltText = "1 das partes ocultas de mim";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img
        className="background"
        src={image}
        alt={imageAltText}
        style={{
          zIndex: 1,
          position: "relative",
          objectFit: "cover",
          height: "auto",
          width: "100%",
          filter: "brightness(70%)",
          borderRadius: "70px",
          boxShadow: "-6px -6px 9px 9px rgba(18, 243, 29, 0.56)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%",
          height: "auto",
          zIndex: 2, // Ensures text is above the image
        }}
      >
        <h1 style={{ fontSize: "2.5rem" }}>{name}</h1>
        <h2 style={{ fontSize: "1.5rem" }}>{title}</h2>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
