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

const Login = () => {


  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField name="email" type="email" label="Email"/>
          </Grid>

          <Grid item xs={12}>
            <TextField name="password" type="password" label="Password"/>
          </Grid>

          <Grid item xs={12}>
            <Button variant="outlined" color="primary" type="submit">Submit</Button>
          </Grid>

        </Grid>
      </Form>
    </Formik>

  );
};


export default Login;
