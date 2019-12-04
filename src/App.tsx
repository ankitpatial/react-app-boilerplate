import * as React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Home from './pages/Home/Home';
import Session from './components/Session';
import ErrorBoundary from './components/ErrorBoundary';
import theme from './theme';

const loadingRoute = (
  <div style={{ position: "relative", float: "left", top: 10, left: 10 }}>Loading page...</div>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Session>
        <Router>
          <ErrorBoundary>
            <Suspense fallback={loadingRoute}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={lazy(() => import('./pages/Login/Login'))}/>
                <Route path="/about-us" component={lazy(() => import('./pages/AboutUs/AboutUs'))}/>
                <Route path="/form-example" component={lazy(() => import('./pages/FormExample/FormExample'))}/>
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </Router>
      </Session>
    </ThemeProvider>
  )
};

export default App;
