import React from 'react';

export interface CounterButtonState {
  numberOfClicks: number;
}

export class CounterButton extends React.Component<{}, CounterButtonState> {
  constructor(props) {
    super(props);
    this.state = {
      numberOfClicks: 0
    };
  }

  render() {
    return <button>{this.state.numberOfClicks}</button>;
  }
}

