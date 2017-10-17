/**
 * Created by le on 2017-10-05.
 */
export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';


const newUniqid = require('uniqid');
console.log(newUniqid());

const initialUserState = {
    users: [
        {name: 'lela', id: newUniqid(), isSelected: false},
        {name: 'lelaa', id: newUniqid(), isSelected: false},
        {name: 'lelaaa', id: newUniqid(), isSelected: false}
    ],
    articles: [],
    messages: []
};


export default function UserReducer(state = initialUserState, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                users: state.users.concat(action.payload)
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(({ id }) => id !== action.payload)
            };
        default:
            return state;
    }
}
