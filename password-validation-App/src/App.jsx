import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } 
    else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } 
    else {
      setError("Password is valid");
    }
  }

  return (
    <div>
      <h2>Password Validation</h2>

      <form onSubmit={handleSubmit}>
        <label>Password: </label>

        <input
          type="password"
          onChange={function(event) {
            setPassword(event.target.value);
          }}
        />

        <br /><br />

        <label>Confirm Password: </label>

        <input
          type="password"
          onChange={function(event) {
            setConfirmPassword(event.target.value);
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
