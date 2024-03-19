// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true,
};

// Sice of global state. Every slice needs a name
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        // (state, action) - no need to pass actions, it will be tracked automatically
        increment(state) {
            // state CAN BE MUTATED
            // Immer.js automatically clones state object to prevent mutations
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});
// // Old way of handling actions.
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         };
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         };
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         };
//     }
//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter,
//         };
//     }
//     return state;
// };
// const store = createStore(counterReducer);

// // To see automatically generated action tags
// console.log(counterSlice.actions.toggleCounter)

const store = configureStore({
    //  // A "map" of reducers
    //  reducer: { counter: counterSlice.reducer },
    // A single reducer
    reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
export default store;
