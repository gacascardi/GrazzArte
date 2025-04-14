import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
// Removed unused import

import "./styles.css";

const siteProps = {
  name: "2025 ©GrazzArte. Todos os direitos reservados.",
  title: "",
  email: "gacascardi@outlook.com",
  gitHub: "gacascardi",
  instagram: "grazzarte",
  linkedIn: "gacascardi",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#70f1dc";
// const secondaryColor = "#D2F1E4"; // Removed as it was unused

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      {/* Removed unused component */}
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
