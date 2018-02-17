//import React from 'react';
import { Container } from 'unstated';

class CounterContainer extends Container {
  state = {
    counter: 0
  }
  incCounter(num) {
    this.setState({ counter: this.state.counter + num});
  }

  decCounter(num) {
    this.setState({ counter: this.state.counter - num});
  }
}
//const countCont = new CounterContainer();
export default CounterContainer;

