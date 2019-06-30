import axios from 'axios'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types'
import { setAlert } from './alert'

//REGISTER USER
export const register = ({ name , email , password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({ name , email , password})

    try {
        const res = await axios.post('/api/users' , body , config);

        dispatch({
            type : REGISTER_SUCCESS,
            payload : res.data
        })
    } catch (err) {

        const errors = err.response.data.errors;
        console.log("Server error")
        if(errors){
            errors.forEach(err => dispatch(setAlert(errors.msg)));    //error array from backend 
        }

        dispatch({
            type : REGISTER_FAIL
        })


    }
}