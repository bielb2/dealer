import React from 'react';

import MenuIcon from '../../assets/menu.svg';
import Logo from '../../assets/logo.svg';
import Phone from '../../assets/phone.svg';
import Whatsapp from '../../assets/whatsapp.svg';
import Fiat from '../../assets/fiat.svg';

import Container from './styles';
import Menu from '../Menu';

const Navbar: React.FC = () => {
  return (
    <>
      <Container>
        <header>
          <button type="button">
            <img src={MenuIcon} alt="Menu" />
          </button>
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
          <div>
            <button type="button">
              <img src={Phone} alt="Telefone" />
            </button>
            <button type="button">
              <img src={Whatsapp} alt="Whatsapp" />
            </button>
            <button type="button">
              <img src={Fiat} alt="Fiat logo" />
            </button>
          </div>
        </header>
      </Container>
      <Menu />
    </>
  );
};

export default Navbar;
