import React from 'react';
import { Container, ContentList, ContainerList } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Institucional</h1>
        <span>Arrow</span>
      </div>
      <ContentList>
        <ul>
          <li>Quem somos</li>
          <li>Fale Conosco</li>
          <li>Endereço</li>
        </ul>
      </ContentList>
      <ContainerList>
        <ul>
          <li>Novos</li>
          <li>Ofertas</li>
          <li>Seminovos</li>
          <li>
            Consórcio <span className="new">Novo</span>
          </li>
          <li>Vendas Direta</li>
          <li>Lifestyle</li>
          <li>Pós-vendas</li>
        </ul>
      </ContainerList>
    </Container>
  );
};

export default Menu;
