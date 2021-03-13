import { shade } from 'polished';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 24px;

  footer {
    width: 50%;

    margin: 0 auto;
    display: flex;
    flex-direction: column;

    img {
      margin-bottom: 24px;
    }

    a {
      height: 50px;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 2px solid var(--bg-red-color);

      text-transform: uppercase;

      transition: all 0.2s;

      &:hover {
        color: ${shade(0.2, '#FFFFFF')};
        border-color: ${shade(0.2, '#FF1430')};
      }
    }
  }
`;

export default Container;
