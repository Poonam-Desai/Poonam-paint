import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={function() {
        setCount(count + 1);
      }}>
        +
      </button><br /><br />

      <button onClick={function() {
        setCount(count - 1);
      }}>
        -
      </button><br /><br />

      <button onClick={function() {
        setCount(0);
      }}>
        Reset
      </button>
    </div>
  );
}

export default App;
