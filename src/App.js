

import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes,Route,Link} from "react-router-dom";

import Todo from './Pages/Todo';
import Weather from './Pages/Weather';
import Counter from './components/Counter';
import Cart from './Pages/Cart';
import Products from './Pages/Products';
import { useState } from 'react';
import Home from './components/Home';
import { useSelector } from 'react-redux';


function App() {
   const cart=useSelector((state)=>state.cart);
  
 
 
  return (

    <BrowserRouter>
     <div className='navbar'>
      <h1>My React App</h1>

      <nav className='navbar'>
        <Link to="/">Home</Link> | 
        <Link to="/counter">Counter</Link> | 
        <Link to="/products">Products</Link> | 
        <Link to="/cart">Cart({cart.length})</Link> | 
        <Link to="/todo">Todo</Link> | 
        <Link to="/weather">Weather</Link>
      </nav>
      </div>
      <div className='container'>
      <Routes>
           <Route path="/" element={<Home />} />
         <Route path="/counter" element={<Counter />} />
         <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
     </div>
    </BrowserRouter>
    
  );

}


export default App;