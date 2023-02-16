import React from "react";
import "./App.scss";

import { About, Footer, Header, Skills, Work, Testimonials } from "./container";
import { Navbar } from "./components";


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
