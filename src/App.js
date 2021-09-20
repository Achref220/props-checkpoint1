import './App.css';
import Profile1 from './Profile/Profile1';


function App() {
  const styleImg = {borderRadius: "50%", marginTop: "20px", width: "200px"};
 
  const handleName=(name)=> {
    
    alert(`${name}`);
  }
  return (
    <div className="App">
      <Profile1   handleName={handleName} name="achref najeh" bio="exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" profession="isi ut aliquip ex ea commodo consequat">
        <img style={styleImg} src="me.jpg" alt="me" />
      </Profile1>
    </div>
  );
}


export default App;
