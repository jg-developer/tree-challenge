import React, { useEffect, useState } from 'react';
import { Btn } from './styles';
import ArrowUpIcon from '../../assets/arrow-up.svg';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(window.scrollY > 200);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.onscroll = () => {
      setIsVisible(window.scrollY > 200);
    };
  }, []);

  return (
    <Btn
      type="button"
      data-testid="scroll-to-top"
      isVisible={isVisible}
      onClick={() => goToTop()}
    >
      <img src={ArrowUpIcon} alt="icon" />
    </Btn>
  );
};

export default ScrollToTop;
