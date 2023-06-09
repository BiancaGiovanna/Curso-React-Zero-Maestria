import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/NavBar';

import Home from './pages/Home/Index';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/not-found';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
