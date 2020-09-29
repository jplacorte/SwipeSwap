import { GET_TRANSACTION, GET_TRANSACTIONS, GET_CHAT, GET_CHATS, SET_DATE_TRANS ,TRANSACTION_ERROR } from '../actions/types';

const initialState = {
    transaction: null,
    transactions: [],
    chat: null,
    chats: [],
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch(type){
        case GET_TRANSACTION:
            return {
                ...state,
                transaction: payload,
                loading: false
            };
        case GET_TRANSACTIONS: 
            return {
                ...state,
                transactions: payload,
                loading: false
            }
        case GET_CHAT:
            return {
                ...state,
                chat: payload,
                loading: false
            }
        case GET_CHATS:
            return {
                ...state,
                chats: payload,
                loading: false
            }
        case TRANSACTION_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}