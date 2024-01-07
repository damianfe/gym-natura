import React from "react";
import "./App.css";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Members from "./components/members/Members";
import Footer from "./components/nav/Footer";
import Programs from "./components/programs/Programs";

const App: React.FC = () => {
  return (
    <div className="app">
      <Hero />
      <About />
      <Programs />
      <Members />
      <Footer />
    </div>
  );
};

export default App;

