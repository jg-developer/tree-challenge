import styled from 'styled-components';

export const PlaceholderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  display: inline-block;
  opacity: 0.5;
  background-color: #212529;
  animation: placeholder 2s ease-in-out infinite;

  @keyframes placeholder {
    50% {
      opacity: 0.2;
    }
  }
`;
