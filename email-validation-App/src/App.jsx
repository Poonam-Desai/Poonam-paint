import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (email.includes("@") && email.includes(".")) {
      setMessage("Valid Email");
    } else {
      setMessage("Invalid Email");
    }
  }

  return (
    <div>
      <h2>Email Validation</h2>

      <form onSubmit={handleSubmit}>
        <label>Email: </label>

        <input
          type="text"
          onChange={function(event) {
            setEmail(event.target.value);
          }}
        />

        <br /><br />

        <button type="submit">Submit</button>

        <p>{message}</p>
      </form>
    </div>
  );
}

export default App;

