import api from '../utils/api';
import {
    GET_MATCH,
    MATCH_FOUND,
    ERROR_MATCH,
    SUPERWANT,
    ACCEPT_SUPERWANT,
    DECLINE_SUPERWANT
} from './types';

// @route   GET match/
// @des     Get all match
// @access  Private
export const getAllMatch = () => async dispatch => {
    try {

        const res = await api.get(`/match`);

        dispatch({
            type: GET_MATCH,
            payload: res.data
        });
        
    } catch (err) {

        dispatch({
            type: ERROR_MATCH,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    
    }
}

//Super Want
export const superWant = (itemID, ownerID) => async dispatch => {
    try {

        const res = await api.post(`/want/superwant/${itemID}/${ownerID}`);

        dispatch({
            type: SUPERWANT,
            payload: res.data
        });
        
    } catch (err) {

        dispatch({
            type: ERROR_MATCH,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    
    }
}

//Accept Super Want
export const acceptSuperWant = (transID, user_id) => async dispatch => {
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    let data = {
        user: user_id
    }

    try {

        const res = await api.put(`/want/${transID}`, data, config);

        dispatch({
            type: ACCEPT_SUPERWANT,
            payload: res.data
        });
        
    } catch (err) {

        dispatch({
            type: ERROR_MATCH,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    
    }
}

//Decline Super Want
export const declineSuperWant = (transID) => async dispatch => {
    try {

        const res = await api.put(`/want/dec/${transID}`);

        dispatch({
            type: DECLINE_SUPERWANT,
            payload: res.data
        });
        
    } catch (err) {

        dispatch({
            type: ERROR_MATCH,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    
    }
}