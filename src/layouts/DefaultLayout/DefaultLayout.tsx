import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import useStyles from './DefaultLayout.css';

interface LandingLayoutProps {
  children: any,
}

const DefaultLayout = (props: LandingLayoutProps) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopBar/>
      <main className={classes.content}>
        {children}
        <Footer/>
      </main>
    </div>
  );
};


export default DefaultLayout;
