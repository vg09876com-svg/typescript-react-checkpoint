// Import the Greeting and Counter components.
import Greeting from "./Greeting";
import Counter from "./Counter";

// App is the main component of our React application.
function App() {
  return (
    <div>
      <h1>React TypeScript Checkpoint</h1>

      {/* Display the Greeting component and pass it a name. */}
      <Greeting name="Victor" />

      {/* Display the Counter component. */}
      <Counter />
    </div>
  );
}

// Export App so React can display it.
export default App;

