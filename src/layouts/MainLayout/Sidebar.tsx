import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer, Theme } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import SidebarNav from './SidebarNav';

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));


interface OnCloseFunc {
  (): void
}

export interface Page {
  title: string,
  href: string,
  icon: JSX.Element
}

interface SidebarProps {
  onClose: OnCloseFunc,
  open: boolean,
  variant?: any
}

const Sidebar = (props: SidebarProps) => {
  const { open, variant, onClose } = props;
  const classes = useStyles();
  const pages : Array<Page> = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon/>
    },
    {
      title: 'Users',
      href: '/users',
      icon: <PeopleIcon/>
    },
    {
      title: 'Products',
      href: '/products',
      icon: <ShoppingBasketIcon/>
    },
    {
      title: 'Authentication',
      href: '/sign-in',
      icon: <LockOpenIcon/>
    },
    {
      title: 'Typography',
      href: '/typography',
      icon: <TextFieldsIcon/>
    },
    {
      title: 'Icons',
      href: '/icons',
      icon: <ImageIcon/>
    },
    {
      title: 'Account',
      href: '/account',
      icon: <AccountBoxIcon/>
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: <SettingsIcon/>
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div className={classes.root}>
        <Divider className={classes.divider}/>
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

export default Sidebar;
