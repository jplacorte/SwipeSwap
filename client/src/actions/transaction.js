import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_TRANSACTION,
    GET_TRANSACTIONS,
    GET_CHAT,
    GET_CHATS,
    SET_DATE_TRANS,
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

// @route   GET transaction/
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