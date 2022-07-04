//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
//import Input from './components/Input';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemListContainer/ItemDetailContainer';

function App() {

  return (
    <div className='container'>
      <NavBar/>
      {/* <ItemListContainer greeting={"Bienvenidos a Thunder"}/> */}
      {/* <Input/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
