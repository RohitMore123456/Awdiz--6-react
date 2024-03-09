import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Counter from './components/02.03/counter';
import EffectOne from './components/03.03/Effectone';
import EffectTwo from './components/03.03/EffectTwo';
import EffectThree from './components/03.03/EffectThree';
import EffectFour from './components/03.03/EffectFour';
import Register from './components/06.03/Register';


function App(){
  return(
    <div className  = "App">
      <Routes>
        <Route path='/' element = {<Home />} /> 
        <Route path='/Login' element = {<Login />} />
        <Route path='/Counter' element = {<Counter />} />
        <Route path='/Effectone' element = {<EffectOne />} />
        <Route path='/EffectTwo' element = {<EffectTwo />} />
        <Route path='/EffectThree' element = {<EffectThree />} />
        <Route path='/EffectFour' element = {<EffectFour />} />
        <Route path='/EffectFour' element = {<EffectFour />} />
        <Route path='/Home' element = {<Home />} />
        <Route path='/Register' element = {<Register />} />
      </Routes>
    </div>
  );
}

export default App;
