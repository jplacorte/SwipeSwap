import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_ITEMS,
    ITEMS_ERROR
} from './types';

// @route   GET item/
// @des     Get all item from user
// @access  Private
export const getAllItemsByUser = () => async dispatch => {
    try {

        const res = await axios.get('api/item');

        dispatch({
            type: GET_ITEMS,
            payload: res.data
        });
        
    } catch (err) {
        
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: ITEMS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    
    }
}