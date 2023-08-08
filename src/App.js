import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.css';


function App() {
  const [selectTab, handleTabChange] = useState("aboutme");
  const renderTab = () => {
    if (selectTab === "AboutMe") {
      return <Aboutme />;
    }
    if (selectTab === "Contact") {
      return <Contact />;
    }
    if (selectTab === "Portfolio") {
      return <Portfolio />;
    }
    if (selectTab === "Resume") {
      return <Profile />;
    }
    return <Aboutme />;
  };
  return (
    <>
      <title>Nishanthi's Portfolio </title>
      <Header
        selectTab={selectTab}
        handleTabChange={handleTabChange}></Header>
      <main>
       {renderTab()}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
