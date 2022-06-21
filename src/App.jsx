import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {

/*   const nombre = "Agustina"
  const edad = 18 */

  return (
    <div className='container'>
      {/* <div className="App">
       <p>{nombre}</p>
       <p>Ortiz</p>
       <p>{edad}</p>
      </div> */}
      <NavBar/>
    </div>
  );
}

export default App;
