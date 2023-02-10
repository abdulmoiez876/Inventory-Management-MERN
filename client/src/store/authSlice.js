import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token'),
        _id: '',
        name: '',
        email: '',
    },
    reducers: {

    }
})

const authActions = authSlice.actions;

const registerUser = () => {
    return (dispatch) => {
        try {
            axios.post('http://localhost:8000/addNewUser', {})
            .then((response) => {
                console.log(response);
                localStorage.setItem('token', response.message.data)
            })
            .catch((error) => {
                console.error(error);
            })
        }
        catch (error) {
            console.error(error);
        }
    }
}

export {
    authActions
}

export default authSlice;