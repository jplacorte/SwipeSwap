import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_ITEMS,
    GET_ITEM,
    ADD_ITEMS,
    UPDATE_ITEMS,
    RATE_ITEMS,
    ITEMS_ERROR,
    GET_SWAPPED_ITEMS
} from './types';

// @route   GET item/
// @des     Get all item from user
// @access  Private
export const getAllItemsByUser = () => async dispatch => {
    try {

        const res = await axios.get('/api/item');

        dispatch({
            type: GET_ITEMS,
            payload: res.data
        });
        
    } catch (err) {

        dispatch({
            type: ITEMS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    
    }
}

// @route   GET item/swapped/items
// @des     Get swapped items
// @access  Private
export const getSwappedItems = () => async dispatch => {
    try {

        const res = await axios.get('/api/item/swapped/items');

        dispatch({
            type: GET_SWAPPED_ITEMS,
            payload: res.data
        });
        
    } catch (err) {

        dispatch({
            type: ITEMS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    
    }
}

// @route   GET item/:id
// @des     Get item by id
// @access  Private
export const getItemById = itemID => async dispatch => {
    try {

        const res = await axios.get(`/api/item/${itemID}`);

        dispatch({
            type: GET_ITEM,
            payload: res.data
        });
        
    } catch (err) {

        dispatch({
            type: ITEMS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    
    }
}

// @route   POST item/
// @des     Add Item
// @access  Private
export const addItem = (formData, edit = false) => async dispatch => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('/api/item', formData, config);

        dispatch({
            type: ADD_ITEMS,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Item Updated' : 'Item Created'));


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

// @route   Put item/:itemID
// @des     Update Item
// @access  Private
export const updateItem = itemID => async dispatch => {
    try {

        const res = await axios.put(`/api/item/${itemID}`);

        dispatch({
            type: UPDATE_ITEMS,
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

// @route   PUT api/item/review/:item_id
// @des     Rate and review an item
// @access  Private
export const rateItem = itemID => async dispatch => {
    try {

        const res = await axios.put(`/api/item/review/${itemID}`);

        dispatch({
            type: RATE_ITEMS,
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