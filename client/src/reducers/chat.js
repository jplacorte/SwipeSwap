import {
    CONVERSATION_ERROR,
    GET_CONVERSATIONS
} from '../actions/types';

const initialState = {
    conversations: [],
    error: [],
    loading: true,
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_CONVERSATIONS:
            return {
                ...state,
                loading: false,
                conversations: payload
            };
        case CONVERSATION_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return state;
    }
}