import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Enter Your Name</h2>

      <input
        type="text"
        onChange={function(event) {
          setName(event.target.value);
        }}
      />

      <h2>Your Name: {name}</h2>
    </div>
  );
}

export default App;
