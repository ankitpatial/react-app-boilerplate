import * as React from 'react';
import Layout from '../../layouts/LandingLayout';
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <Layout>
      <p>Some content</p>
      <p>Some content 2</p>
      <p>

        <Link to="form-example">For Example</Link>
      </p>
    </Layout>
  )

};

export default Home;
