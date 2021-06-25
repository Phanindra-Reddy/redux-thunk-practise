

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'

import {postReducer} from './reducer/reducer';

const rootReducer = combineReducers({
    post:postReducer,
})

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;