import React from 'react';
import Header from './components/header';
import Projects from './components/projects';
import Footer from './components/footer';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
