import React from 'react'

import Layout from './layout/layout.component'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import CustomRoutes from './custom-routes';

import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <CustomRoutes isLogged={true} />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
