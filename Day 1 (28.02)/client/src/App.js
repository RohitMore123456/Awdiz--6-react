import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/Register';

function App(){
  return(
    <div className  = "App">
      <Routes>
        <Route path='/' element = {<Home />} /> 
        <Route path='/Login' element = {<Login />} />
        <Route path='/Register' element = {<Register />} />
      </Routes>
    </div>
  );
}

export default App;
