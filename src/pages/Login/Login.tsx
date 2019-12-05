import * as React from 'react';
import Layout from '../../layouts/DefaultLayout';
import LoginForm from '../../components/LoginForm';
import {
  Grid,
  IconButton,
  Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import styles from './Login.css'

const Login = () => {
  const classes = styles();
  return (
    <Layout>
      <div className={classes.root}>
        <Grid
          className={classes.grid}
          container
        >
          <Grid
            className={classes.quoteContainer}
            item
            lg={5}
          >
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography
                  className={classes.quoteText}
                  variant="h1"
                >
                  Some text that will come here
                </Typography>
                <div>
                  <Typography
                    className={classes.name}
                    variant="body1"
                  >
                    Ankit
                  </Typography>
                  <Typography
                    className={classes.bio}
                    variant="body2"
                  >
                    Manager at CodeNext
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            className={classes.content}
            item
            lg={7}
            xs={12}
          >
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton>
                  <ArrowBackIcon/>
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <LoginForm/>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

    </Layout>
  )

};

export default Login;
