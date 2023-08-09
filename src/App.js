import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Profile from './components/Profile';

import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'
import { Helmet } from "react-helmet";
import Aboutme from './components/Aboutme';
const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})
function App() {
  
  const [selectTab, handleTabChange] = useState("aboutme");

  const renderTab = () => {
    if (selectTab === "Portfolio") {
      return <Portfolio />;
    }
    if (selectTab === "Contact") {
      return <Contact />;
    }
    if (selectTab === "Aboutme") {
      return <Aboutme />;
    }

    if (selectTab === "Resume") {
      return <Profile/>;
    }
    }

  return (
    <>
      <ChakraBaseProvider theme={theme}>
      <Helmet>
        <title>Nishanthi's Portfolio </title>
      </Helmet>
       
      <Header
        selectTab={selectTab}
        handleTabChange={handleTabChange}
      ></Header>
      <main>{renderTab()}</main>
      <Footer></Footer>
      </ChakraBaseProvider>
    </>
  );
}

export default App;
