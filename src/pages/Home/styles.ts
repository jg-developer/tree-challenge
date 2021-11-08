import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 30px;
    text-align: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 650px;
  padding: 30px 15px;

  h1 {
    margin-top: 30px;
    text-align: center;
  }

  h3 {
    margin-top: 30px;
  }

  ul {
    margin-top: 15px;
    list-style-position: inside;

    li {
      margin-top: 10px;
    }
  }
`;
