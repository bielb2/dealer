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
        <nav>
          <a href="/">
            <img src={MenuIcon} alt="Menu" />
          </a>
          <a href="/">
            <img src={Logo} alt="Logo" className="imageLogo" />
          </a>
          <div>
            <a href="/">
              <img src={Phone} alt="Telefone" />
            </a>
            <a href="/">
              <img src={Whatsapp} alt="Whatsapp" />
            </a>
            <a href="/">
              <img src={Fiat} alt="Fiat logo" className="imageLogo" />
            </a>
          </div>
        </nav>
      </Container>
      <Menu />
    </>
  );
};

export default Navbar;
