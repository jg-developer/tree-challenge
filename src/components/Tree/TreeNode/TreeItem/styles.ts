import styled, { css } from 'styled-components';

export const Container = styled.li`
  width: 100%;
`;

interface ItemContainerProps {
  level: number;
}

export const ItemContainer = styled.div<ItemContainerProps>`
  width: calc(100% - ${props => props.level * 40}px);
  margin-left: ${props => props.level * 40}px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background-color: transparent;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: rgb(0, 167, 237, 0.1);
  }
`;

interface ToggleBtnProps {
  isActive: boolean;
}

export const ToggleBtn = styled.button<ToggleBtnProps>`
  width: 40px;
  border: none;
  background-color: transparent;

  img {
    width: 15px;
    height: auto;
    transition: transform 0.4s ease-in;

    ${props =>
      props.isActive
        ? css`
            transform: rotate(90deg);
          `
        : css`
            transform: rotate(0deg);
          `}
  }
`;

interface AnimatedChildProps {
  currentHeight: number;
}

export const AnimatedChild = styled.div<AnimatedChildProps>`
  width: 100%;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  height: auto;
  height: ${props => props.currentHeight}px;
`;

export const TreeNodeContainer = styled.ul`
  width: 100%;
  background-color: #fff;
  list-style-type: none;
  list-style-position: outside;
  list-style-image: none;
  border-radius: 6px;
`;
