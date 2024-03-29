import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

// const Counter = () => {
//     const dispatch = useDispatch();
//     const counter = useSelector((state) => state.counter);
//     const show = useSelector((state) => state.showCounter);

//     const incrementHandler = () => {
//         dispatch({ type: 'increment' });
//     };

//     const increaseHandler = () => {
//         dispatch({ type: 'increase', amount: 5 });
//     };

//     const decrementHandler = () => {
//         dispatch({ type: 'decrement' });
//     };

//     const toggleCounterHandler = () => {
//         dispatch({ type: 'toggle' });
//     };

//     return (
//         <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             {show && <div className={classes.value}>{counter}</div>}
//             <div>
//                 <button onClick={decrementHandler}>Decrement</button>
//                 <button onClick={increaseHandler}>Increase by 5</button>
//                 <button onClick={incrementHandler}>Increment</button>
//             </div>
//             <button onClick={toggleCounterHandler}>Toggle Counter</button>
//         </main>
//     );
// };

// export default Counter;

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase(5));
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={incrementHandler}>Increment</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
