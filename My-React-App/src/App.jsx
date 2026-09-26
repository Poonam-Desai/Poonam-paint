function Header() {
  return (
    <header>
      <h1>Welcome to React js </h1> <br />
    </header>
  ); }
function Content() {
  return (
    <main>
      <h2>This is the main Content of the webpage</h2>
      <p>we are using multiple functional component in react.</p> <br />
    </main>
  ); }
  
function Footer() {
  return (
    <footer>
      <p> © 2026 Shivraj College, Gadhinglaj.</p>
    </footer>
  ); }

function App() { 
  return (
   <div>
    <Header/>
    <Content/>
    <Footer/>
   </div>    
    );
}
export default App
