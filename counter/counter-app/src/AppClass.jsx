import React from "react";
import './App.css';

class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter - 1,
            });
          }}
        >
          -
        </button>
        <div className="counter">{this.state.counter}</div>
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default AppClass;