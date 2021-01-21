import api from '../utils/api';

import {
    // GET_TRANSACTION,
    GET_TRANSACTIONS,
    GET_TRANSACTION_USERS,
    GET_USER_WANT_TRANSACTION,
    // GET_CHAT,
    GET_CHATS,
    // SET_DATE_TRANS,
    APPROVE,
    TRANSACTION_ERROR,
    GET_USER_WANT_1,
    GET_USER_WANT_2
} from './types';

// @route   GET transaction/
// @des     Get all transaction from user
// @access  Private
export const getAllTransaction = () => async dispatch => {
    try {

        const res = await api.get(`/transaction`);

        dispatch({
            type: GET_TRANSACTIONS,
            payload: res.data
        });
        
    } catch (err) {

        dispatch({
            type: TRANSACTION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    
    }
}

// @route   GET transaction/
// @des     Get all transaction from user
// @access  Private
export const getUserWantTransaction = () => async dispatch => {
    try {

        const res = await api.get(`/want`);

        dispatch({
            type: GET_USER_WANT_TRANSACTION,
            payload: res.data
        });
        
    } catch (err) {

        dispatch({
            type: TRANSACTION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    
    }
}

// @route   GET transaction/
// @des     Get all transaction from user
// @access  Private
export const getUserWant1 = () => async dispatch => {
    try {

        const res = await api.get(`/want/user/1`);

        dispatch({
            type: GET_USER_WANT_1,
            payload: res.data
        });
        
    } catch (err) {

        dispatch({
            type: TRANSACTION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    
    }
}

// @route   GET transaction/
// @des     Get all transaction from user
// @access  Private
export const getUserWant2 = () => async dispatch => {
    try {

        const res = await api.get(`/want/want/user/2`);

        dispatch({
            type: GET_USER_WANT_2,
            payload: res.data
        });
        
    } catch (err) {

        dispatch({
            type: TRANSACTION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    
    }
}

// @route   GET api/transaction/:id
// @des     Get all transaction from user
// @access  Private
export const getTrans = (con_id, trans_id) => async dispatch => {
    try {
        
        const res = await api.get(`/transaction/trans/chat/get/${con_id}/${trans_id}`);

        dispatch({
            type: GET_CHATS,
            payload: res.data
        });

    } catch (err) {
        
        dispatch({
            type: TRANSACTION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });

    }
}

// @route   GET api/transaction/match/chat/users/:id
// @des     Get all users by transaction
// @access  Private
export const getTransactionUsers = trans_id => async dispatch => {
    try {
        
        const res = await api.get(`/transaction/match/chat/users/${trans_id}`);

        dispatch({
            type: GET_TRANSACTION_USERS,
            payload: res.data
        });

    } catch (err) {
        
        dispatch({
            type: TRANSACTION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });

    }
}

// @route   POST api/transaction/swapped/:item_id
// @des     Get all users by transaction
// @access  Private
export const approve = (formData, item_id, owner_id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        
        const res = await api.post(`/transaction/swapped/${item_id}/${owner_id}`, formData, config);

        dispatch({
            type: APPROVE,
            payload: res.data
        });

    } catch (err) {
        
        dispatch({
            type: TRANSACTION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });

    }
}

export function useUpdateItem(){
    const updateItem = async (item_id, trans_id) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        let data = {
            item: item_id
        }

        try {
        
            const res = await api.put(`/want/change/owner/${trans_id}`, data, config);
            return res.data
        
        } catch (err) {
        
            console.error(err)

        }
    }
    return updateItem
}