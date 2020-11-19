import { GET_MATCH, MATCH_FOUND, ERROR_MATCH } from '../actions/types';

const initialState = {
    match: null,
    matches: [],
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch(type){
        case GET_MATCH:
            return {
                ...state,
                matches: payload,
                loading: false
            };
        case ERROR_MATCH:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}