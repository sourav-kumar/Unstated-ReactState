import React from 'react';
import { Subscribe } from 'unstated';
import CounterContainer from './CounterContainer';

const Counter = (props) => (
  <Subscribe to={[CounterContainer]}>
    {
      counterStore =>
      (
        <div>
            <h1> {props.header}</h1>
            <p>{counterStore.state.counter}</p>
            <button onClick={() => (counterStore.incCounter(2))}>Increase</button>
            <button onClick={() => counterStore.decCounter(1)}>Decrease</button>
        </div>
      )
    }
  </Subscribe>
);

export default Counter;