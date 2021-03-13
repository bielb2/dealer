import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bodyContent" />
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default App;
