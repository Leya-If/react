export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DEVADE = 'DEVADE'

export default function AmountReducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT: {
            return state + action.payload;
        }
        case DECREMENT: {
            return state - action.payload;
        }
        case DEVADE: {
            if (action.payload !== 0) {
                return state / action.payload;
            } else {
                return state = 0;
            }
        }
        default:
            return state;
    }
}
