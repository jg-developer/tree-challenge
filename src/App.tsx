import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './routes';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Menu />
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
    <ScrollToTop />
    <Footer />
  </>
);

export default App;
