import { useState } from 'react';
import classes from './Counter.module.scss'

function Counter() {
  const [count, setCount] = useState(0);


  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };


  return (
    <div className={classes.counter}>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter;
