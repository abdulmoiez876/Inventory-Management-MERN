import {
    createSlice
} from '@reduxjs/toolkit';
import axios from 'axios';
import {
    toast
} from 'react-toastify';
import jwt_decode from 'jwt-decode';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token'),
        name: '',
        email: '',
        isAuthenticated: false,
    },
    reducers: {
        login(state, action) {
            const token = action.payload;
            
            const decoded = jwt_decode(token);
            state.isAuthenticated = true;
            state.name = decoded.name;
            state.email = decoded.email;
            state.token = token;
        },
        logout(state) {
            localStorage.removeItem('authToken');

            state.name = '';
            state.email = '';
            state.isAuthenticated = false;
            state.token = '';
        },
    }
})

const authActions = authSlice.actions;

const registerUser = (userData, navigate) => {
    return (dispatch) => {
        try {
            axios.post('http://localhost:8000/addNewUser', userData)
                .then((response) => {
                    const token = response.data;
                    
                    localStorage.setItem('authToken', JSON.stringify(token));

                    dispatch(authActions.login(token))
                    toast.success("User registered successfully!", {
                        position: 'bottom-left'
                    });
                    navigate('/cart')
                })
                .catch((error) => {
                    toast.error(`${error.response.data}`, {
                        position: 'bottom-left'
                    })
                })
        } catch (error) {
            console.error(error);
        }
    }
}

const loginUser = (userData, navigate) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:8000/authenticateUser', userData);
            
            if(response.data.status) {
                const token = response.data.message;
                
                localStorage.setItem('authToken', token);
                dispatch(authActions.login(token));
                toast.success('Login Successful!', {
                    position: 'bottom-left'
                })
                navigate('/cart')
            }
        } catch (error) {
            toast.error(error.response, {
                position: 'bottom-left'
            })
        }
    }
}

export {
    authActions,
    registerUser,
    loginUser
}

export default authSlice;