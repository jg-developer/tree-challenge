import React from 'react';

import GithubIcon from '../../assets/github.svg';
import LinkedinIcon from '../../assets/linkedin.svg';

import { Container, SocialMedia } from './styles';

const Footer: React.FC = () => {
  return (
    <Container data-testid="footer">
      <a
        href="https://www.linkedin.com/in/jonathan-gomes/"
        title="Linkedin"
        target="_blank"
        rel="noreferrer"
      >
        © 2021 - Desenvolvido por Jonathan Gomes
      </a>
      <SocialMedia>
        <a
          href="https://github.com/jg-developer"
          title="Github"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GithubIcon} alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-gomes/"
          title="Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedinIcon} alt="Linkedin" />
        </a>
      </SocialMedia>
    </Container>
  );
};

export default Footer;
