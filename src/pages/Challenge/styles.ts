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
  padding: 30px 10px;

  h1 {
    margin-top: 30px;
    text-align: center;
  }

  h3 {
    margin-top: 30px;
  }

  > section > ul {
    margin-top: 15px;
    list-style-position: inside;

    li {
      margin-top: 10px;
    }
  }
`;

export const ErrorInfo = styled.div`
  width: 100%;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 320px;
    height: auto;
  }

  span {
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2rem;

    &:first-of-type {
      color: #00a7ed;
    }

    &:last-of-type {
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
  }

  small {
    margin-top: 15px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-top: 15px;
    color: inherit;
    transition: opacity 0.3s ease-in;

    &:hover {
      opacity: 0.7;
    }
  }
`;
