
import axios from 'axios';

import {ACTIONS} from './actionTypes';


export const getAll = () => async (dispatch) => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts/")
    
    dispatch({
        type:ACTIONS.GET_POSTS,
        payload:result.data
    })
}

export const createPost = (post) => async (dispatch) => {
    const result = await axios.post("https://jsonplaceholder.typicode.com/posts/", post);
    
    dispatch({
        type:ACTIONS.CREATE_POST,
        payload:result.data,
    })
}

export const getPost = (id) => async (dispatch) => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
    dispatch({
        type:ACTIONS.GET_POST,
        payload: result.data
    })
}

export const deletePost = (id) => async (dispatch) => {

    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
   
    dispatch ({
        type:ACTIONS.DELETE_POST,
        payload:id
    })
}

export const updatePost = (post) => async (dispatch) => {
    const result = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,post);
    
    dispatch ({
        type:ACTIONS.UPDATE_POST,
        payload:result.data
    })
}

