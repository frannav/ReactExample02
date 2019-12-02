import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../../actions/index";
import { AppState } from "../../reducers";

interface NumberPickerProps {
  initialCounter?: number;
  onIncrement?: (newValue: number) => void;
}

interface NumberPickerState {
  counter: number;
}

export class NumberPicker extends React.Component<NumberPickerProps, NumberPickerState> {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.initialCounter || 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  updateCounter(delta: number) {
    this.setState({
      counter: this.state.counter + delta
    });
  }

  decrementCounter() {
    this.updateCounter(-1);
  }

  incrementCounter() {
    this.updateCounter(1);
    if (this.props.onIncrement) {
      this.props.onIncrement(this.state.counter);
    }
  }

  render() {
    return <div>
      <button onClick={this.incrementCounter}>+</button>
      <h1>{this.state.counter}</h1>
      <button onClick={this.decrementCounter}>-</button>
    </div>
  }
}

const mapStateToProps = (state: AppState) => {
  return { counter: state.counter.value };
};

const mapDispatchToProps = dispatch => ({
  incrementCounter: (value: number) => dispatch(incrementCounter(value)),
  decrementCounter: (value: number) => dispatch(decrementCounter(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(NumberPicker);