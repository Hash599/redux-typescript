import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router';
import Home from './component/Home';
import Cart from './component/Cart';
import NavBar from './component/NavBar';
import {Provider} from 'react-redux';
import store from './component/store/Store';
function App() {
  return (
    <div className="App">
      <Provider store={store}> 

     <NavBar/>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
     </Routes>
      </Provider>
    </div>
  );
}

export default App;
