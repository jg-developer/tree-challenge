import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 6px;
  padding: 10px 15px;
  background-color: #00a7ed;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  transition: background-color 0.4s ease-in;

  &:hover {
    background-color: #027eb3;
  }
`;
