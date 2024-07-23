import React from 'react';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import Project from './components/Project.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Navigation/>
      <Header/>
      <Project/>
      <Footer/>
    </>
  )
}

export default App