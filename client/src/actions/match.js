import axios from 'axios';
import {
    GET_MATCH,
    MATCH_FOUND,
    ERROR_MATCH,
    SUPERWANT
} from './types';

// @route   GET match/
// @des     Get all match
// @access  Private
export const getAllMatch = () => async dispatch => {
    try {

        const res = await axios.get('/api/match');

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

        const res = await axios.get(`api/want/superwant/${itemID}/${ownerID}`);

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