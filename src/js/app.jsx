import React from 'react';
import ReactDOM from 'react-dom';

/* react-router */
import { Router, browserHistory } from 'react-router';

/* react-redux */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';

/* custom */

import AppRoutes from './appRouter.jsx';
import reducer from './reducers';

//const appHistory = browserHistory;

const middleware = process.env.NODE_ENV === 'production'
?[ thunk ] :[ thunk, logger() ];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);


const appHistory = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={ appHistory }
      onUpdate={() => {window.scrollTo(0, 0);}}
    >
      {AppRoutes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
