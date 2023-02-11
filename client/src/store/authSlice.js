import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from 'react-toastify';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token'),
        _id: '',
        name: '',
        email: '',
        isAuthenticated: false,
    },
    reducers: {

    }
})

const authActions = authSlice.actions;

const registerUser = (userData) => {
    return () => {
        try {
            axios.post('http://localhost:8000/addNewUser', userData)
            .then((response) => {
                const token = response.data;
                
                localStorage.setItem('authToken', token);
                toast.success("User registered successfully!", {
                    position: 'bottom-left'
                });
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

export {
    authActions,
    registerUser
}

export default authSlice;