import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger'


import AmountReducer from './AmountReducer';
import UsersReducer from './UsersReducer';


const logger = createLogger({});

const rootReducer = combineReducers({
    counter: AmountReducer,
    users: UsersReducer
});

let store = createStore(
    rootReducer,
    applyMiddleware(logger)
);

export default store;