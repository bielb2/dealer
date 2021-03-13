import styled from 'styled-components';

import { shade } from 'polished';

const Container = styled.header`
  width: 100%;
  height: 60px;
  background: var(--bg-color);

  nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;

    .imageLogo {
      transition: opacity 0.3s;
      &:hover {
        opacity: 0.7;
      }
    }

    div {
      display: flex;
      align-content: center;

      a {
        width: 27px;
        height: 30px;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: background-color 0.2s;

        &:first-child {
          background: var(--bg-red-color);
          &:hover {
            background: ${shade(0.2, '#FF1430')};
          }
        }

        &:nth-child(2) {
          background: #2fb640;
          &:hover {
            background: ${shade(0.2, '#2fb640')};
          }
        }

        & + a {
          margin-left: 16px;
        }
      }
    }
  }
`;

export default Container;
