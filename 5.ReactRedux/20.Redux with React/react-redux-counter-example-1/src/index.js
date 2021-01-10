import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import './style.css';

// 1.Create action and reducer
function incrementCounter(num) {
  return {
    type: 'INCREMENT',
    num: num
  }
}

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + action.num };
    default:
      return state;
  }
}

// 2.Create and connecting to the Store
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  incrementCounter
}

const store = createStore(reducer);

// 3.Accessing The Store
function Counter(props) {
  function handleClick() {
     props.incrementCounter(1);
  }
  return <div>
  <p>{props.count}</p>
  <button onClick={handleClick}>Increment</button>
  </div>;
}

const CounterConnect = connect(mapStateToProps, mapDispatchToProps)(Counter);

const el =
  <Provider store={store}>
    <CounterConnect/>
  </Provider>;

ReactDOM.render(
  el,
  document.getElementById('root')
);
