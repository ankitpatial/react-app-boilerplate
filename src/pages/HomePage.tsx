import * as React from 'react';
import Layout from '../layout/DefaultLayout';
import { Link } from 'react-router-dom'


const HomePage = () => {

  return (
    <Layout>
      <p>Some content</p>
      <p>Some content 2</p>
      <p>

        <Link to="form-example" >For Example</Link>
      </p>
    </Layout>
  )

};

export default HomePage;
