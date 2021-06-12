import React from 'react'
import Header from './components/Header'
import BodyGenerator from './components/BodyGenerator'
import Footer from './components/Footer'
import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <BodyGenerator />
      <Footer />
    </div>
  );
}

export default App;
