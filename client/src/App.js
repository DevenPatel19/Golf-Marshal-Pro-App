import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  const liveTitle = "Sanity Test"

  return (
    <div className="App">
      <PersonCard firstName={"Instructor Bob"} age={"32"} hairColo={"purple"} msg={"Bob!"}/>
      <header className="App-header">
        <h1>{liveTitle}</h1>
      <PersonCard firstName={"Instructor Winter"} age={"32"} hairColo={"purple"} msg={"Winter!"}/>
      <PersonCard firstName={"Instructor Heidi"} age={"32"} hairColo={"purple"}  msg={"Heidi!"}/>
      
      
      </header>
      
      <PersonCard firstName={"Instructor Narciso"} age={"32"} hairColo={"purple"}  msg={"Ciso"}/>
    </div>
  );
}

export default App;
