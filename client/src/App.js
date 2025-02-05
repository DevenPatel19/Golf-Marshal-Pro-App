import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
// import PersonCard from './components/PersonCard';
import TTimeForm from './views/TTimeForm';

function App() {

  // const liveTitle = "Sanity Test"

  return (
    <div className="App">
      <Header />
      <Navbar />
      <TTimeForm />
      {/* <PersonCard   
        firstName={"Instructor Bob"} 
        age={"32"} 
        hairColor={"red"} 
        hairLikes={0}/>
        */}

      <header className="App-header">

        {/* <h1>{liveTitle}</h1> */}

      {/*<PersonCard 
        firstName={"Instructor Winter"} 
        age={"32"} 
        hairColor={"purple"} 
        hairLikes={4}/>
        */}

      {/* <PersonCard  
        firstName={"Instructor Heidi"} 
        age={"32"} 
        hairColor={"midnight"}  
        hairLikes={4}/>
      */}
      </header>
      
      {/* <PersonCard  
        firstName={"Instructor Narciso"} 
        age={"32"} 
        hairColor={"black"}  
        hairLikes={0}/>
*/}
    </div>
  );
}

export default App;
