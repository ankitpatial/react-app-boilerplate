import * as React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import { AppBar, Container, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import Session from './components/Session';
import ErrorBoundary from './components/ErrorBoundary';
import useStyle from './App.css';

const App = () => {
  const css = useStyle({});
  return (
    <Session>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton href="" edge="start" className={css.menuButton} color="inherit" aria-label="menu">
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" className={css.title}>
              <Link to="/">Company Name</Link>
            </Typography>
            <Link to="/login" color="inherit">Login</Link>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg">
          <ErrorBoundary>
            <Suspense fallback={<div>Loading page...</div>}>
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={lazy(() => import('./pages/LoginPage'))}/>
                <Route path="/about-us" component={lazy(() => import('./pages/AboutUsPage'))}/>
                <Route path="/form-example" component={lazy(() => import('./pages/FormExample'))}/>
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </Container>

        <Container maxWidth="xs" className={css.footer}>
          All rights reserved
        </Container>
      </Router>
    </Session>

  )
};

export default App;
