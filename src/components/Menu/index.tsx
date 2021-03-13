import React, { useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import Button from '../Button';

import { Container, ContentList, ContainerList } from './styles';

const Menu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container isActive={isActive}>
      <div>
        <span>Institucional</span>
        <Button className="rotate" onClick={() => setIsActive(!isActive)}>
          <MdKeyboardArrowUp />
        </Button>
      </div>
      {isActive && (
        <ContentList>
          <ul>
            <li>
              <a href="/">Quem somos</a>
            </li>
            <li>
              <a href="/">Fale Conosco</a>
            </li>
            <li>
              <a href="/">Endereços</a>
            </li>
          </ul>
        </ContentList>
      )}
      <ContainerList>
        <ul>
          <li>
            <a href="/">Novos</a>
          </li>
          <li>
            <a href="/">Ofertas</a>
          </li>
          <li>
            <a href="/">Seminovos</a>
          </li>
          <li>
            <a href="/">
              Consórcio <span>Novo</span>
            </a>
          </li>
          <li>
            <a href="/">Vendas Direta</a>
          </li>
          <li>
            <a href="/">Lifestyle</a>
          </li>
          <li>
            <a href="/">Pós-vendas</a>
          </li>
        </ul>
      </ContainerList>
    </Container>
  );
};

export default Menu;
