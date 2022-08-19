import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Layout from './components/layout/layout';
import Landing from './views/landing';
import Dashboard from './views/dashboard';
import Page404 from './views/404';
import ProductDetail from './views/product';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
