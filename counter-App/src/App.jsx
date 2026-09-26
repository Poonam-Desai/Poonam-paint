import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={function() {
        setCount(count + 1);
      }}>
        +
      </button><br />

      <button onClick={function() {
        setCount(count - 1);
      }}>
        -
      </button><br />

      <button onClick={function() {
        setCount(0);
      }}>
        Reset
      </button>
    </div>
  );
}

export default App;
