import api from '../utils/api';

import {
    GET_REVIEWS,
    REVIEW,
    REVIEW_ERROR
} from './types'

export const getReviews = () => async dispatch => {
    try {
        
        const res = await api.get('/review');

        dispatch({
            type: GET_REVIEWS,
            payload: res.data
        });

    } catch (err) {
        
        dispatch({
            type: REVIEW_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

export const submitReview = (item_id, owner_id, formData) => async dispatch => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await api.post(`/review/${item_id}/${owner_id}`, formData, config);

        dispatch({
            type: REVIEW,
            payload: res.data
        });

    } catch (err) {
        
        dispatch({
            type: REVIEW_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}