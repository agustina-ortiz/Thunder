//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
//import Input from './components/Input';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  return (
    <div className='container'>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a Thunder"}/>
      {/* <Input/> */}
    </div>
  );
}

export default App;
