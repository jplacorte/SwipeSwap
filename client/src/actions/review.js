import api from '../utils/api';

import {
    GET_REVIEWS,
    REVIEW,
    GET_SWAPPED_ITEMS, 
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

// @route   GET item/swapped/items
// @des     Get swapped items
// @access  Private
export const getSwappedItems = () => async dispatch => {
    try {

        const res = await api.get(`/review/revs`);

        dispatch({
            type: GET_SWAPPED_ITEMS,
            payload: res.data
        });
        
    } catch (err) {

        dispatch({
            type: REVIEW_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    
    }
}

export function useSubmitReview() {
    const submitReview = async (item_id, owner_id, formData) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {

            const res = await api.post(`/review/${item_id}/${owner_id}`, formData, config);

            return res.data

        } catch (err) {
        
            console.error(err)

        }
    }
    return submitReview
}