import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";

import "./styles.css";

const siteProps = {
  name: "GrazzArte",
  title: "",
  email: "gacascardi@outlook.com",
  gitHub: "gacascardi",
  instagram: "grazzarte",
  linkedIn: "gacascardi",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
// const secondaryColor = "#D2F1E4"; // Removed as it was unused

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Services />
      <Footer
        email={siteProps.email}
        gitHub={siteProps.gitHub}
        instagram={siteProps.instagram}
        linkedIn={siteProps.linkedIn}
        name={siteProps.name}
        primaryColor={primaryColor}
        twitter={siteProps.twitter}
        youTube={siteProps.youTube}
      />
    </div>
  );
};

export default App;
