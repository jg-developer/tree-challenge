import styled, { css } from 'styled-components';

export const Container = styled.menu`
  width: 100%;
  height: 45px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00a7ed;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  @media (max-width: 768px) {
    height: 55px;
    padding: 0 10px;
  }
`;

interface NavProps {
  isOpened: boolean;
}

export const NavContainer = styled.nav<NavProps>`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: stretch;

  @media (max-width: 768px) {
    ${props =>
      props.isOpened
        ? css`
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
            opacity: 1;
          `
        : css`
            top: -100%;
            left: -100%;
            width: 0%;
            height: 0%;
            border-bottom-right-radius: 100%;
            border-top-right-radius: 100%;
            opacity: 0;
          `}
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(3px);
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    z-index: 3;

    transition: all 0.3s ease-in-out;
  }

  a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 20px;
    transition: background-color 0.3s ease-in;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
      font-size: 2rem;
      justify-content: center;
      padding: 10px 20px;
      font-weight: 600;
      &:hover {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }
`;

export const BtnShowMenu = styled.button<NavProps>`
  display: none;
  border: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  width: 40px;
  height: 40px;
  transition: background-color 0.3s ease-in;

  img {
    width: 50%;
    height: 50%;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const BtnHideMenu = styled.button<NavProps>`
  display: none;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  position: fixed;
  z-index: 4;
  width: 40px;
  height: 40px;
  right: 7px;
  top: 7px;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in;

  img {
    width: 70%;
    height: 70%;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    display: ${props => (props.isOpened ? 'flex' : 'none')};
  }
`;
