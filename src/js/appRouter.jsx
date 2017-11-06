import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';

import Config from './configs/config';
import Master from './components/master.jsx';
import AddUserContainer from './containers/addUserContainer.jsx';

const AppRoutes = (
  <Route path={ Config.rootDir } component = { Master }>
    <IndexRoute component = { AddUserContainer } />
    <Route path = "index" component = { AddUserContainer } />
    <Route path = "/" component = { AddUserContainer } />
    {/* <Route path = "*" component = { NotFound } /> */}
  </Route>
);
export default AppRoutes;
