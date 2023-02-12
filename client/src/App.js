import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-overlays/Modal";
import jwtDecode from 'jwt-decode';

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';
import Products from './components/products/Products';
import Loading from './components/ui/loading/Loading';
import Login from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';

import { getAllProducts } from './store/productsSlice';
import { authActions } from './store/authSlice';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(state => state.ui.loading);
  const auth = useSelector(state => state.auth);

  const renderBackdrop = (props) => <div className={`backdrop`} {...props} />;

  useEffect(() => {
    dispatch(getAllProducts());
    
    if(localStorage.getItem('authToken')) {
      dispatch(authActions.login(localStorage.getItem('authToken')));
    }
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
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
