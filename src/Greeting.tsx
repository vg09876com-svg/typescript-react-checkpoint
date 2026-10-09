// This interface defines the props that Greeting will receive.
// The name prop must be a string.
interface GreetingProps {
  name: string;
}

// This component receives the name prop and displays a greeting.
function Greeting({ name }: GreetingProps) {
  return <div>Hello, {name}!</div>;
}

// Export the component so other files can use it.
export default Greeting;
