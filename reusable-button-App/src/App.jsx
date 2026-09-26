      function Button({ children }) {
  return (
    <button>{children}</button>
  );
}

function App() {
  return (
    <div>
      <h1>reusable Buttons</h1>

      <Button>Login</Button><br/>
     <Button>Register</Button><br/>
      <Button>Submit</Button> <br/>
      <Button>Logout</Button> 
   
    </div>
  );
}

export default App;
    
