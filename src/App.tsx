import React from 'react';
import About from './components/about/About';
import './App.css'
import Hero from './components/hero/Hero';
import Members from './components/members/Members';
import Programs from './components/programs/Programs';
import Footer from './components/nav/Footer';

const App = () => (
  <div>
    <Hero/>
    <About />
    <Members/>
    <Programs/>
    <Footer/>
  </div>
);

export default App;
