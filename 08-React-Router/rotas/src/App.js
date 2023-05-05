import './App.css';

import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom'
import Home from './pages/Home/Index';
import About from './pages/About';
import NavBar from './components/NavBar';
import Product from './pages/Product';
import Info from './pages/info';
import NotFound from './pages/not-found';
import FormSearch from './components/FormSearch';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <NavBar />
        <FormSearch />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='products/:id' element={<Product />} />
          <Route path='products/:id/info' element={<Info />} />
          <Route path='/search' element={<Search />} />
          <Route path='/company' element={<Navigate to='/about' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
