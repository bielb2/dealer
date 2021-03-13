import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--nav-color);
  position: absolute;
  width: 100%;

  ul {
    list-style-type: none;

    li {
      border-bottom: 2px solid var(--border-color);
      margin: 8px;
      padding-bottom: 12px;
      transition: border-color 0.4s;

      &:hover {
        border-bottom-color: #b7b8b8;
      }

      a {
        transition: color 0.2s;
        &:hover {
          color: ${shade(0.2, '#FFFFFF')};
        }
      }
    }
  }

  div {
    background: var(--bg-red-color);
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;

    padding: 16px;

    span {
      font-weight: 500;
    }

    button {
      color: #fff;
      display: flex;

      font-weight: 600;
      font-size: 24px;

      svg {
        transform: ${({ isActive }) =>
          isActive ? 'rotate(180deg)' : 'rotate(0deg)'};
        transition: transform 0.3s linear;

        path {
          transition: color 0.2s;
        }

        &:hover {
          color: ${shade(0.2, '#fff')};
        }
      }
    }
  }
`;

export const ContentList = styled.nav`
  margin: 0 24px 0 48px;

  li {
    a {
      color: var(--title-color);
    }

    & + :last-child {
      margin-bottom: 16px;
    }
  }
`;

export const ContainerList = styled.nav`
  margin: 0 24px;

  a {
    color: var(--titleSemi-color);

    span {
      background: var(--bg-red-color);
      font-weight: 600;
      font-size: 10px;

      padding: 4px;
      border-radius: 8px;

      margin-left: 8px;
    }
  }

  li:last-child {
    border: 0;
  }
`;
