 
 import React,{useState}  from 'react';
 import Store from './Component/stoe/Context';
import CARD from './Component/Cards/Card';
import Homenews from './Component/Home/Homenews';
import Business from './Component/Businessnews/Business';
import Movies from './Component/Movies/Movies';
import World from './Component/World/World';
import Scitech from './Component/Science/Scitech';
import NAV from './Component/Navbar1/Navbar';
 
import {BrowserRouter as Router, Routes, Route,   } from 'react-router-dom';
 
 

 
 

function App( ) {
  const [dark,setdark]=useState(false)
 const darkHandler=()=>{
   setdark(!dark)
   console.log(dark);
 }

  return (
     <Store.Provider  value={dark}>
    < Router > 
    <NAV  onclick={darkHandler}/>
    <Routes>
                <Route exact path='/' element={<Homenews/>}></Route>
                <Route exact path='/business' element={<Business/>}></Route>
                <Route exact path='/world' element={<World/>}></Route>
                <Route exact path='/movies' element={<Movies/>}></Route>
                <Route exact path='/scencei' element={<Scitech/>}></Route> 
                <Route exact path='/search' element={<CARD/>}></Route> 
                </Routes>
    </Router>
    </Store.Provider>
    
    
    
  
       
  );
}

export default App;
