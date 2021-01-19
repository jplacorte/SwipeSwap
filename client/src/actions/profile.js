import api from '../utils/api';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    GET_RECEIVED_ITEM,
    UPDATE_AVATAR,
    PROFILE_ERROR
} from './types';


// Get current users profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await api.get(`/profile/me`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
        
    } catch (err) {

        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

//Create or update profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await api.post(`/profile/`, formData, config)

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created'));

        if(!edit){
            history.push('/profile')
        }

    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

//Update avatar
export const updateAvatar = file => async dispatch => {

    const photoData = new FormData();
    photoData.append('file', file);

    try {

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const res = await api.put(`/profile/upload/photo`, photoData, config)

        dispatch({
            type: UPDATE_AVATAR,
            payload: res.data
        });

    } catch (err) {

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
        
    }
}

//Get received item
export const getReceivedItem = () => async dispatch => {
    try {
        const res = await api.get(`/transaction/swap/received`);

        dispatch({
            type: GET_RECEIVED_ITEM,
            payload: res.data
        });
    } catch (err) {

        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}
