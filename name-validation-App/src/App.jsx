import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (name === "") {
      setError("Name is required");
    } else {
      setError("");
    }
  }

  return (
    <div>
      <h2>Name Validation</h2>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>

        <input
          type="text"
          onChange={function(event) {
            setName(event.target.value);
          }}
        />

        <br /><br />

        <button type="submit">Submit</button>

        <p>{error}</p>
      </form>
    </div>
  );
}

export default App;

