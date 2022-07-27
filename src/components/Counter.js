import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementX,
  toggleCounter,
} from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const showCounter = useSelector((state) => state.counter.showCounter);
  console.log(count);
  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(increment());
  };

  const incrementXHandler = () => {
    dispatch(incrementX(5));
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{count}</div>}

      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={incrementXHandler}>increase by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
