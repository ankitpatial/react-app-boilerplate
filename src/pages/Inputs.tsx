import * as React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({});

interface InputsProps {
}

export default class Inputs extends React.Component<InputsProps> {

  validateFromServer = () => {

  };

  handleSubmit = (data: any) => {
    console.log('data', data)
  };

  render(): React.ReactElement<any, React.JSXElementConstructor<any>> {

    const initialValues = {};

    return (
      <div>
        <h2>Form with lots of elements</h2>

        <Formik initialValues={initialValues} onSubmit={this.handleSubmit} validationSchema={validationSchema}>
          <Form>

          </Form>
        </Formik>
      </div>
    );
  }
}
