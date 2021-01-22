import { ADD_ITEMS, UPDATE_ITEMS, GET_ITEMS, ITEMS_ERROR, GET_ITEM, OPEN_ITEM_MODAL, UPLOAD_ITEM_IMAGE, GET_RECEIVED_ITEM, GET_RECEIVED_ITEM_MODAL } from '../actions/types';

const initialState = {
    item: null,
    items: [],
    receivedItems: [],
    receivedItemsModal: null,
    itemImage: [],
    itemModal: null,
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch(type){
        case GET_ITEMS:
            return {
                ...state,
                items: payload,
                loading: false
            };
        case GET_ITEM: 
            return {
                ...state,
                item: payload,
                loading: false
            };
        case OPEN_ITEM_MODAL:
            return {
                ...state,
                itemModal: payload,
                loading: false
            };
        case ADD_ITEMS:
        case UPDATE_ITEMS:
            return {
                ...state,
                item: payload,
                loading: false
            };
        case UPLOAD_ITEM_IMAGE:
            return {
                ...state,
                itemImage: payload,
                loading: false
            };
        case GET_RECEIVED_ITEM:
            return {
                ...state,
                receivedItems: payload,
                loading: false
            };
        case GET_RECEIVED_ITEM_MODAL:
            return {
                ...state,
                receivedItemsModal: payload,
                loading: false
            };
        case ITEMS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}