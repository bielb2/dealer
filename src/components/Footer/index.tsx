import React from 'react';

import ProgressBar from '../../assets/progressBar.svg';

import Container from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <footer>
        <img src={ProgressBar} alt="Barra de progresso" />
        <a href="/">Ver todos os modelos</a>
      </footer>
    </Container>
  );
};

export default Footer;
