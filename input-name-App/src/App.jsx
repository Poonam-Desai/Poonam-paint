import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div><br />
      <h2>Enter Your Name</h2><br />

      <input
        type="text"
        onChange={function(event) {
          setName(event.target.value);
        }}
      /> <br /><br />

      <h2>Your Name: {name}</h2>
    </div>
  );
}

export default App;
