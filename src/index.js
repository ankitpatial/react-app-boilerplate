import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import './index.css'
import ErrorBoundary from './components/ErrorBoundary';
import Routes from './components/Routes';
import createStore from './redux/store';

const app = (
  <Suspense fallback={<div>Loading page...</div>}>
    <ErrorBoundary>
      <Provider store={createStore()}>
        <Routes/>
      </Provider>
    </ErrorBoundary>
  </Suspense>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
