import * as React from 'react';
import {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from "../pages/HomePage";

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/login" component={lazy(() => import('../pages/LoginPage'))}/>
          <Route path="/about-us" component={lazy(() => import('../pages/AboutUsPage'))}/>
          <Route path="/form-example" component={lazy(() => import('../pages/FormExample'))}/>
        </Switch>
      </Suspense>
    </Router>
  )
};

export default Routes;
