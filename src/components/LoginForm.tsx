import * as React from 'react';
import { Button, Grid } from '@material-ui/core'
import { Formik, Form } from 'formik'
import * as yup from 'yup';
import { TextField } from '../inputs';

const validationSchema = yup.object().shape({
  email: yup.string()
    .email('Invalid email')
    .required('Required'),
  password: yup.string()
    .min(5, 'Must be 5 char or more')
    .required('Required')
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => new Promise((resolve) => {
        setTimeout(() => {
          console.log('Posted data', values);
          setSubmitting(false);
          resolve();
        }, 2000);
      })}
    >
      {({ isSubmitting }) => (
        <Form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField name="email" type="email" label="Email" labelWidth={45}/>
            </Grid>

            <Grid item xs={12}>
              <TextField name="password" type="password" label="Password" labelWidth={75} />
            </Grid>

            <Grid item xs={12}>
              <Button variant="outlined" color="primary" type="submit" disabled={isSubmitting}>
                Submit{(isSubmitting ? '...' : '')}
              </Button>
            </Grid>

          </Grid>
        </Form>
      )}
    </Formik>

  );
};


export default LoginForm;
