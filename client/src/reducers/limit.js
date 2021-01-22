import { GET_ALL_LIMITS, ADD_LIMITS, LIMIT_ERROR } from '../actions/types'

const initialState = {
    limit: null,
    limits: [],
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch(type){
        case GET_ALL_LIMITS:
        case ADD_LIMITS:
            return {
                ...state,
                limits: payload,
                loading: false
            };
        case LIMIT_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}