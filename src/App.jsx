import React from "react";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Stack from "./components/stack/Stack.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Stack />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
