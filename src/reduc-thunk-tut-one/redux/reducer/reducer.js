
import {ACTIONS} from '../actions/actionTypes';

const initialState = {
    posts:[],
    post:null,
}

export const postReducer = (state = initialState, {type,payload}) => {

    switch (type) {

        case ACTIONS.GET_POSTS:
            return {
                ...state,
                posts:payload
            }

        case ACTIONS.CREATE_POST:
            return {
                ...state,
                posts:[payload, ...state.posts]
            }
        
        case ACTIONS.GET_POST:
            return {
                ...state,
                post: payload,
            };

        case ACTIONS.UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map((postItem) =>
                postItem.id === payload.id ? payload : postItem
                ),
            };

        case ACTIONS.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((postItem) => postItem.id !== payload),
            };
    
        default:
            return state;
    }
};


