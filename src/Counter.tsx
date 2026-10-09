// Import Component so we can create a class component in React.
import { Component } from "react";

// This interface defines the type of the Counter's state.
// The count property must always be a number.
interface CounterState {
  count: number;
}

// Create a class component.
// The first type ({}) means this component has no props.
// The second type (CounterState) defines its state.
class Counter extends Component<{}, CounterState> {
  // Set the initial state. The counter starts at zero.
  state: CounterState = {
    count: 0,
  };

  // This function increases the count by one.
  // void means the function does not return a value.
  increment = (): void => {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  };

  // The render method displays the counter and button.
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>

        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

// Export the component so App.tsx can use it.
export default Counter;

