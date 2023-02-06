import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-overlays/Modal";

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';
import Products from './components/products/Products';
import Loading from './components/ui/loading/Loading';

import { getAllProducts } from './store/productsSlice';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.ui.loading);

  const renderBackdrop = (props) => <div className={`backdrop`} {...props} />;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])

  return (
    <>
      {loading &&
        <Modal
          // className={`${styles.modal}`}
          show={true}
          renderBackdrop={renderBackdrop}
        >
          <Loading />
        </Modal>
      }
      <ToastContainer/>
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
