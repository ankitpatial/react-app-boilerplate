import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Theme, useMediaQuery } from '@material-ui/core';
import clsx from '../../helpers/classNames';
import Sidebar from './Sidebar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
}));

interface MainProps {
  children: any
}

const MainLayout = (props: MainProps) => {
  const { children } = props;

  const classes = useStyles();
  const theme: Theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop || openSidebar ;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <TopBar onSidebarOpen={handleSidebarOpen}/>
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        {children}
        <Footer/>
      </main>
    </div>
  );
};


export default MainLayout;
