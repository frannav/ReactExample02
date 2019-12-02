import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter, resetCounter } from "../actions/index";
import { AppState } from "../reducers";

export interface HeaderProps {
  counter: number;
  incrementCounter?: (value: number) => {};
  decrementCounter?: (value: number) => {};
}

class Header extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.props.incrementCounter(2);
  }
  decrement() {
    this.props.decrementCounter(2);
  }
  reset() {
    this.props.resetCounter();   
  }
  render() {
    return (
      <ul>
        <li>Number of movies: {this.props.counter}</li>
        <li>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.reset}>RESET</button>
        </li>
      </ul>
    );
  }
}
const mapStateToProps = (state: AppState) => {
  return { counter: state.counter.value };
};

const mapDispatchToProps = dispatch => ({
  incrementCounter: (value: number) => dispatch(incrementCounter(value)),
  decrementCounter: (value: number) => dispatch(decrementCounter(value)),
  resetCounter: (value: number) => dispatch(resetCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
