import * as React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <DefaultLayout>
      <p>Some content</p>
      <p>Some content 2</p>
      <p>
        <Link to="/form-example">For Example</Link>
      </p>
      <p>
        <Link to="/dashboard">Dashboard</Link>
      </p>
    </DefaultLayout>
  )

};

export default Home;
