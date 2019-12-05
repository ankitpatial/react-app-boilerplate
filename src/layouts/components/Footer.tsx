import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, Theme } from '@material-ui/core';
import clsx from '../../helpers/classNames';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root)} >
      <Typography variant="body1">
        &copy;{' '}
        <Link
          component="a"
          href="https://ankitpatial.com/"
          target="_blank"
        >
          My Site
        </Link>
        . 2019
      </Typography>
      <Typography variant="caption">
        Created with love for the environment. By designers and developers who
        love to work together in offices!
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
