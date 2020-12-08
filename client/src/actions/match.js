import axios from 'axios';
import {
    GET_MATCH,
    MATCH_FOUND,
    ERROR_MATCH,
    SUPERWANT,
    ACCEPT_SUPERWANT
} from './types';

// @route   GET match/
// @des     Get all match
// @access  Private
export const getAllMatch = () => async dispatch => {
    try {

        const res = await axios.get(`/api/match`);

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

        const res = await axios.post(`/api/want/superwant/${itemID}/${ownerID}`);

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
export const acceptSuperWant = (transID) => async dispatch => {
    try {

        const res = await axios.put(`/api/want/${transID}`);

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