import React from 'react'

import Layout from './layout/layout.component'

import { BrowserRouter } from 'react-router-dom'

import CustomRoutes from './custom-routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        { <CustomRoutes isLogged={true} /> }
      </Layout>
    </BrowserRouter>
  );
}

export default App;
