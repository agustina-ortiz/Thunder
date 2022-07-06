//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
//import Input from './components/Input';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemListContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/category/:categoyId' element={<ItemListContainer/>}></Route>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
