import * as React from 'react';
import {AppBar, Container, IconButton, Toolbar, Typography} from '@material-ui/core'
import {Menu as MenuIcon} from '@material-ui/icons';
import {Link} from 'react-router-dom';
// @ts-ignore
import useStyle from './DefaultLayout.css'

import Session from '../components/Session'


export interface DefaultLayoutProps {
  children: any,
  className?: string,
}


const DefaultLayout = ({children}: DefaultLayoutProps) => {
  const css = useStyle({});
  return (
    <Session>
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
        {children}
      </Container>

      <Container maxWidth="xs" className={css.footer}>
        All rights reserved
      </Container>

    </Session>
  )
};

export default DefaultLayout;
