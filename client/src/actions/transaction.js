import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_TRANSACTION,
    GET_TRANSACTIONS,
    GET_TRANSACTION_USERS,
    GET_CHAT,
    GET_CHATS,
    SET_DATE_TRANS,
    APPROVE,
    TRANSACTION_ERROR
} from './types';

// @route   GET transaction/
// @des     Get all transaction from user
// @access  Private
export const getAllTransaction = () => async dispatch => {
    try {

        const res = await axios.get('/api/transaction');

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

// @route   GET api/transaction/:id
// @des     Get all transaction from user
// @access  Private
export const getAllChat = trans_id => async dispatch => {
    try {
        
        const res = await axios.get(`/api/transaction/${trans_id}`);

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
        
        const res = await axios.get(`/api/transaction/match/chat/users/${trans_id}`);

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
export const approve = item_id => async dispatch => {
    try {
        
        const res = await axios.post(`/api/transaction/swapped/${item_id}`);

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
