import { Home } from './pages/Home';
import { HomeLayout } from './components/templates';
import { ProductDetails } from './pages/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
        <HomeLayout>
          <Routes>
            <Route
              path='/'
              element={<Home />}></Route>
            <Route
              path='/product/:id'
              element={<ProductDetails />}></Route>
          </Routes>
        </HomeLayout>
      </Router>
    </div>
  );
}

export default App;
