import React from 'react';

import ProgressBar from '../../assets/progressBar.svg';

import Container from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <footer>
        <img src={ProgressBar} alt="Barra de progresso" />
        <button type="button">Ver todos os modelos</button>
      </footer>
    </Container>
  );
};

export default Footer;
