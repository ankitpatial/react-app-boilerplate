import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

import useStyles from './TopBar.css';

interface OnOpenFunc {
  (): void
}

interface TopBarProps {
  onSidebarOpen?: OnOpenFunc
}

const TopBar = (props: TopBarProps) => {
  const { onSidebarOpen } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  return (
    <AppBar  className={classes.root}>
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            src={require("../images/logo-1.svg")}
          />
        </RouterLink>
        <div className={classes.flexGrow}/>
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon/>
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
          >
            <InputIcon/>
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon/>
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};


export default TopBar;
