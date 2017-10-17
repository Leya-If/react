/**
 * Created by le on 2017-10-05.
 */
import {DECREMENT, INCREMENT, DEVADE} from '../reducers/AmountReducer';

export function Increment(value) {
    return {
        type: INCREMENT,
        payload: value
    }
}


export function Decrement(value) {
    return {
        type: DECREMENT,
        payload: value
    }
}



export function Devide(value) {
    return {
        type: DEVADE,
        payload: value
    }
}



export default  {
    Increment,
    Decrement,
    Devide
}