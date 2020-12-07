import axios from 'axios';
import { setAlert } from './alert';

import { GET_CONVERSATIONS, CONVERSATION_ERROR } from './types';

const url = "http://localhost:5000";
export const getUserConversation = () => async dispatch => {
    try {

        const res = await axios.get(`${url}/api/chat`);

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

    const getConversations = async () => {
        try {

            const res = await axios.get(`${url}/api/chat`);
    
            return res.data

        } catch (err) {
            
            console.log(err)
        
        }
    };

    return getConversations;
}

export function useGetConversationMessages() {

    const getConversationMessages = async (id) => {
        try {

            const res = await axios.get(`${url}/api/chat/${id}`);
    
            return res.data

        } catch (err) {
            
            console.log(err)
        
        }
    }

    return getConversationMessages;
}


export function useSendConversationMessage() {

    const sendConversationMessage = async (id, convID, body, trans_id) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let data = {
            to: id, convID: convID, body: body
        }
        try{
            const res = await axios.post(`${url}/api/chat/messages/${trans_id}`, data, config)
            return res.data
        }
        catch(err)
        {
            console.log(err)
        }
    };

    return sendConversationMessage;
}

export const createConversation = async (id, trans_id) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let data = {
        to: id
    }
    try {

        const res = await axios.post(`${url}/api/chat/${trans_id}`, data, config)
        return res.data

    } catch (err) {
        console.log(err)
    }
}