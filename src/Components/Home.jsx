import React from "react";
import PropTypes from "prop-types";
import image from "../images/inicio.png";
import "../styles.css";
const imageAltText = "1 das partes ocultas de mim";

const Home = () => {
  return (
    <section id="home" className="min-height">
      <img
        className="background"
        src={image}
        alt={imageAltText}
        style={{
          zIndex: 1,
          position: "absolute",
          top: "3em",
          marginBottom: "100px",
          height: "25em",
          width: "70em",
          filter: "brightness(70%)",
          borderRadius: "70px",
          boxShadow: "-6px -6px 9px 9px rgba(18, 243, 29, 0.56)",
          display: "block",
          objectFit: "cover",
        }}
      />
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
