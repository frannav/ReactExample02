import * as Redux from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { AppState } from './reducers';
import { decrementCounter, incrementCounter, resetCounter } from './actions';
import React from 'react';
import './App.css';
import { Hello } from "./components/hello/Hello";
import { NumberPicker } from './components/numberPicker/NumberPicker';
import Header from './containers/Header';

const store: Redux.Store<AppState> = Redux.createStore(rootReducer);

function increment() {
  store.dispatch(incrementCounter(1));
}

function decrement() {
  store.dispatch(decrementCounter(1));
}

function reset() {
  store.dispatch(resetCounter());
}


class App extends React.Component<{}, {}> {
  render() {
    return <Provider store={store}>
      <Header/>
      <Hello name="Pepe"/>
      <NumberPicker/>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </Provider>;
  }
}

export default App;
