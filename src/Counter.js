import React from 'react';
import { Subscribe } from 'unstated';
import CounterContainer from './CounterContainer';

const Counter = () => (
  <Subscribe to={[CounterContainer]}>
    {
      counterStore =>
      (
        <div>
            <p>{counterStore.state.counter}</p>
            <button onClick={() => (counterStore.incCounter(2))}>Increase</button>
            <button onClick={() => counterStore.decCounter(1)}>Decrease</button>
        </div>
      )
    }
  </Subscribe>
);

export default Counter;