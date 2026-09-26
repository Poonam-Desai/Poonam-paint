import { useState } from "react";

function App() {
  const [name, setName] = useState("Poonam");

  return (
    <div>
      <h2>{name}</h2>

      

      <button onClick={function() {
        setName("Swara");
      }}>
        Friend's Name
      </button>
    </div>
  );
}

export default App;