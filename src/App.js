import { BrowserRouter } from 'react-router-dom'
import CustomRoutes from './custom-routes.component'
import Layout from './layout/layout.component'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <CustomRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
