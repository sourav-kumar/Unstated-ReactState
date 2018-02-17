import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'unstated';
import Counter from './Counter';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div>
    <Counter header="This is a unstated Program"/>
  </div>
);

render(<Provider><App /></Provider>, document.getElementById('root'));
