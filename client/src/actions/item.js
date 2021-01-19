import api from '../utils/api';
import { setAlert } from './alert';

import {
    GET_ITEMS,
    GET_ITEM,
    ADD_ITEMS,
    UPDATE_ITEMS,
    WANT_ITEM,
    RATE_ITEMS,
    ITEMS_ERROR,
    GET_SWAPPED_ITEMS, 
    OPEN_ITEM_MODAL,
    UPLOAD_ITEM_IMAGE,
    GET_RECEIVED_ITEM,
    GET_RECEIVED_ITEM_MODAL
} from './types';

// @route   GET item/
// @des     Get all item from user
// @access  Private
export const getAllItemsByUser = () => async dispatch => {
    try {

        const res = await api.get(`/item`);

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

        const res = await api.get(`/item/swapped/items`);

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

        const res = await api.get(`/item/${itemID}`);

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

export const openItemModal = id => async dispatch => {
    try {

        const res = await api.get(`/item/${id}`);

        dispatch({
            type: OPEN_ITEM_MODAL,
            payload: res.data
        });
        
    } catch (err) {
        
        dispatch({
            type: ITEMS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// @route   GET item/swipe/items/all
// @des     Get all item except from logged in user
// @access  Private
export const getAllItem = () => async dispatch => {
    try {

        const res = await api.get(`/item/swipe/items/all`);

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

// @route   POST item/
// @des     Add Item
// @access  Private
export const addItem = (formData) => async dispatch => {

    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await api.post(`/item`, formData, config);

        dispatch({
            type: ADD_ITEMS,
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
export function useUploadPhoto(){

    const uploadPhoto = async (file) => {
        const photoData = new FormData();
        photoData.append('file', file);

        try {

            const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
            const res = await api.post(`/item/upload/image`, photoData, config);

            return res.data

        } catch (err) {
            console.log(err)
        }
    }
    return uploadPhoto
}
// @route   Put item/:itemID
// @des     Update Item
// @access  Private
export const updateItem = (formData, itemID) => async dispatch => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await api.put(`/item/${itemID}`, formData, config);

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
export const rateItem = (formData, itemID) => async dispatch => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await api.put(`/item/review/${itemID}`, formData, config);

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

//Upload Item Image
export const uploadImage = (file, item_id) => async dispatch => {

    const photoData = new FormData();
    photoData.append('file', file);

    try {

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const res = await api.put(`/item/upload/photo/${item_id}`, photoData, config)

        dispatch({
            type: UPLOAD_ITEM_IMAGE,
            payload: res.data
        });

    } catch (err) {

        dispatch({
            type: ITEMS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
        
    }
}

//Want an item
export const wantItem = (itemID, userID) => async dispatch => {
    try {

        const res = await api.post(`/want/${itemID}/${userID}`);

        dispatch({
            type: WANT_ITEM,
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

// @route   GET api/transaction/swap/received/
// @des     Get received from swap transaction
// @access  Private
export const getReceivedItems = () => async dispatch => {
    try {

        const res = await api.get(`/transaction/swap/received/`)

        dispatch({
            type: GET_RECEIVED_ITEM,
            payload: res.data
        });
        
    } catch (err) {

        dispatch({
            type: ITEMS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
        
    }
}

// @route   GET api/transaction/swap/received/
// @des     Get received from swap transaction
// @access  Private
export const getReceivedItemsModal = (itemID) => async dispatch => {
    try {

        const res = await api.get(`/profile/swap/received/${itemID}`)

        dispatch({
            type: GET_RECEIVED_ITEM_MODAL,
            payload: res.data
        });
        
    } catch (err) {

        dispatch({
            type: ITEMS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
        
    }
}