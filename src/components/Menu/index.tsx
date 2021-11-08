import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '../../assets/menu.svg';
import CloseIcon from '../../assets/close.svg';

import { Container, NavContainer, BtnShowMenu, BtnHideMenu } from './styles';

const Menu: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Container data-testid="menu">
      <BtnShowMenu isOpened={isOpened} onClick={() => setIsOpened(true)}>
        <img src={MenuIcon} alt="open menu" />
      </BtnShowMenu>
      <NavContainer isOpened={isOpened} onClick={() => setIsOpened(false)}>
        <Link to="/" onClick={() => setIsOpened(false)}>
          Home
        </Link>
        <Link to="/resolucao" onClick={() => setIsOpened(false)}>
          Resolução
        </Link>
        <BtnHideMenu isOpened={isOpened} onClick={() => setIsOpened(false)}>
          <img src={CloseIcon} alt="hide menu" />
        </BtnHideMenu>
      </NavContainer>
    </Container>
  );
};

export default Menu;
