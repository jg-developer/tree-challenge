import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Challenge from '../pages/Challenge';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/resolucao" exact component={Challenge} />
  </Switch>
);

export default Routes;
