import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (name === "") {
      setMessage("Name is required");
    }
    else if (email === "" || !email.includes("@") || !email.includes(".")) {
      setMessage("Enter a valid email");
    }
    else if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
    }
    else {
      setMessage("Form submitted successfully");
    }
  }

  return (
    <div>
      <h2>Form Validation</h2>

      <form onSubmit={handleSubmit}>

        <label>Name: </label>
        <input
          type="text"
          onChange={function(event) {
            setName(event.target.value);
          }}
        />

        <br /><br />

        <label>Email: </label>
        <input
          type="text"
          onChange={function(event) {
            setEmail(event.target.value);
          }}
        />       <br /><br />

        <label>Password: </label>
        <input
          type="password"
          onChange={function(event) {
            setPassword(event.target.value);
          }}
        />       <br /><br />

        <button type="submit">Submit</button>

        <p>{message}</p>

      </form>
    </div>
  );
}

export default App;




