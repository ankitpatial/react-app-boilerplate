import * as React from 'react'
import { Formik, Form } from 'formik'
import { Grid } from '@material-ui/core'

import DefaultLayout from '../../layouts/DefaultLayout'
import { TextField } from '../../inputs'
import * as yup from "yup";

interface FormData {
  firstName: string,
  lastName: string,
  address: string,
  note: string,
}

const validationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  address: yup.string().required(),
});


const FormExample = () => {
  const initialData = { // must pass all field initialised
    firstName: '',
    lastName: '',
    address: '',
    note: '',
  };

  const handleSubmit = (data: FormData) => {
    const timeout = 1000 * 3; //seconds

    console.log('save data', data);

    // simulate save
    setTimeout(() => {
      console.log('done saving');
    }, timeout)
  };

  return (
    <DefaultLayout>
      <br/>
      <br/>
      <Formik
        initialValues={initialData}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}

      >
        <Form>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField name="firstName" label="First Name" labelWidth={85}/>
            </Grid>
            <Grid item xs={6}>
              <TextField name="lastName" label="Last Name" labelWidth={85}/>
            </Grid>
            <Grid item xs={12}>
              <TextField name="address" label="Address" labelWidth={65}/>
            </Grid>

            <Grid item xs={12}>
              <TextField name="note" label="Note" labelWidth={40} multiline/>
            </Grid>

          </Grid>


        </Form>

      </Formik>
    </DefaultLayout>
  );
};

export default FormExample;