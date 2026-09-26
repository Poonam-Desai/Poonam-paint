import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [displayAge, setDisplayAge] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setDisplayName(name);
    setDisplayAge(age);
  }

  return (
    <div>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          onChange={function(event) {
            setName(event.target.value);
          }}
        />

        <br /><br />

        <label>Age: </label>
        <input
          type="number"
          onChange={function(event) {
            setAge(event.target.value);
          }}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <h3>Name: {displayName}</h3>
      <h3>Age: {displayAge}</h3>
    </div>
  );
}

export default App;

