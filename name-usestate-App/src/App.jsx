import { useState } from "react";

function App() {
  const [name, setName] = useState("Poonam");

  return (
    <div><br />
      <h1>{name}</h1>

      <button onClick={function() {
        setName("Swara");
      }}>
        Friend's Name
      </button>
    </div>
  );
}

export default App;
