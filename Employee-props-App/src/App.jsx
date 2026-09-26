function Employee(props) {
  return (
    <div><br />
      <h2>Employee Details</h2><br />
      <p>Name: {props.name}</p>
      <p>Designation: {props.designation}</p>
      <p>Department: {props.department}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Employee
        name=" Poonam Chandrakant Desai"
        designation=" Software Developer"
        department=" IT"
      />
    </div>
  );
}

export default App;