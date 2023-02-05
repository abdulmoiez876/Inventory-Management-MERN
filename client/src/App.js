import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';
import Products from './components/products/Products';

import { getAllProducts } from './store/productsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());  
  }, [dispatch])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
