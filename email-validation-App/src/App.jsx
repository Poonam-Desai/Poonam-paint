import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function email1(event) {
    setEmail(event.target.value);
  }

  function validateEmail(event) {
    event.preventDefault();

    var pattern = /^[a-z0-9]+@[a-z]+\.[a-z]+$/;

    if (email === "") {
      setError("Email is required");
    }
    else if (!pattern.test(email)) {
      setError("Invalid Email");
    }
    else {
      alert("Valid Email: " + email);
      setError("");
    }
  }

  return (
    <div><br />
      <h2>Email Validation</h2><br />
      <form onSubmit={validateEmail}>
        <input type="text" onChange={email1}
          placeholder="Enter Email" /> <br /><br />
        <button type="submit">Validate</button>
        <p style={{ color: "red" }}>{error}</p>
      </form>
    </div>
  );
}

export default App;