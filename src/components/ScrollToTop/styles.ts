import styled, { css } from 'styled-components';

interface BtnProps {
  isVisible: boolean;
}
export const Btn = styled.button<BtnProps>`
  position: fixed;

  ${props =>
    props.isVisible
      ? css`
          bottom: 20px;
          opacity: 1;
        `
      : css`
          bottom: -50px;
          opacity: 0;
        `};

  right: 10px;
  z-index: 2;
  border: none;
  background-color: #00a7ed;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;

  transition: all 0.6s ease-out;

  img {
    width: 80%;
    height: 80%;
  }
`;
