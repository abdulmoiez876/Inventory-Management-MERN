import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from 'react-toastify';
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
            state.isAuthenticated = true;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;

            localStorage.setItem('authToken', action.payload.token);
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
                
                localStorage.setItem('authToken', token);

                const decoded = jwt_decode(token);
                dispatch(authActions.login(decoded))
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
        }
        catch (error) {
            console.error(error);
        }
    }
}

const loginUser = (userDate, navigate) => {
    
}

export {
    authActions,
    registerUser
}

export default authSlice;