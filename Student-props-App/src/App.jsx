function Student(props) {
  return (
    <div><br/>
      <h2>Student Details</h2><br/>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
      <p>College: {props.college}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Student
        name="Poonam Chandrakant Desai"
        course="Computer Science"
        college="Shivraj College"
      />
    </div>
  );
}

export default App;
