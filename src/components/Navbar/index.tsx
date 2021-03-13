import React, { useState } from 'react';

import Button from '../Button';

import MenuIcon from '../../assets/menu.svg';
import Logo from '../../assets/logo.svg';
import Phone from '../../assets/phone.svg';
import Whatsapp from '../../assets/whatsapp.svg';
import Fiat from '../../assets/fiat.svg';

import Container from './styles';
import Menu from '../Menu';

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Container>
        <nav>
          <Button onClick={() => setIsActive(!isActive)}>
            <img src={MenuIcon} alt="Menu" className="hoverImage" />
          </Button>
          <a href="/">
            <img src={Logo} alt="Logo" className="hoverImage" />
          </a>
          <div>
            <a href="/">
              <img src={Phone} alt="Telefone" />
            </a>
            <a href="/">
              <img src={Whatsapp} alt="Whatsapp" />
            </a>
            <a href="/">
              <img src={Fiat} alt="Fiat logo" className="hoverImage" />
            </a>
          </div>
        </nav>
      </Container>
      {isActive && <Menu />}
    </>
  );
};

export default Navbar;
