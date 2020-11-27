import axios from 'axios';
import { setAlert } from './alert';

import { GET_CONVERSATIONS, CONVERSATION_ERROR } from './types';

export const getUserConversation = () => async dispatch => {
    try {

        const res = await axios.get('/api/chat');

        dispatch({
            type: GET_CONVERSATIONS,
            payload: res.data
        });
        
    } catch (err) {

        dispatch({
            type: CONVERSATION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    
    }
}
// Get list of users conversations
export function useGetConversations() {
    const requestOptions = {
        method: 'GET'
    };

    const getConversations = () => {
        return fetch(
            `http://localhost:5000/api/chat/`,
            requestOptions
        )
            .catch((err) =>
                console.log(err)
            );
    };

    return getConversations;
}

export function useSendConversationMessage() {

    const sendConversationMessage = (id, body) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({ to: id, body: body }),
        };

        return fetch(
            `${process.env.REACT_APP_API_URL}/api/messages/`,
            requestOptions
        )
            .catch(err => {
                console.log(err)
            });
    };

    return sendConversationMessage;
}