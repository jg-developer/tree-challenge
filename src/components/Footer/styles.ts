import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;

  > a {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.3s ease-in;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const SocialMedia = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  a {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin: 5px;
    transition: opacity 0.3s ease-in;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
