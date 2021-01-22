import { GET_REVIEWS, REVIEW, REVIEW_ERROR, GET_SWAPPED_ITEMS } from '../actions/types';

const initialState = {
    review: null,
    reviews: [],
    swappedItems:[],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_REVIEWS:
            return {
                ...state,
                reviews: payload,
                loading: false
            };
        case GET_SWAPPED_ITEMS:
            return {
                ...state,
                swappedItems: payload,
                loading: false
            };
        case REVIEW_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return state;
    }
}