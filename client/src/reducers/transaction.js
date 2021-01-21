import { GET_TRANSACTION, GET_TRANSACTIONS, GET_TRANSACTION_USERS,GET_CHAT, GET_CHATS, TRANSACTION_ERROR, APPROVE, GET_USER_WANT_TRANSACTION, GET_USER_WANT_1, GET_USER_WANT_2 } from '../actions/types';

const initialState = {
    transaction: null,
    transactions: [],
    transaction_users: [],
    userwanttransaction: [],
    transaction1: [],
    transaction2: [],
    approve:[],
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
        case GET_TRANSACTION_USERS: 
            return {
                ...state,
                transaction_users: payload,
                loading: false
            }
        case GET_USER_WANT_TRANSACTION: 
            return {
                ...state,
                userwanttransaction: payload,
                loading: false
            }
        case GET_USER_WANT_1: 
            return {
                ...state,
                transaction1: payload,
                loading: false
            }
        case GET_USER_WANT_2: 
            return {
                ...state,
                transaction2: payload,
                loading: false
            }
        case GET_CHAT:
            return {
                ...state,
                chat: payload,
                loading: false
            }
        case APPROVE:
            return {
                ...state,
                approve: payload,
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