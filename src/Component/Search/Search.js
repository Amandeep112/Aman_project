import React,{useState} from 'react'
import './search.css';

export default function Search(prop) {
   const [text,settext]=useState('')
    
    
 
 
 
 
   const searchHandler=(e)=>{
     e.preventDefault()
     prop.onSr(text) 
   } 
 
 
     const inputhandler=(e)=>{
      settext(e.target.value.toUpperCase())
     }
  return (
    <div className='Navsearch'> 
     <form onSubmit={searchHandler}>
     <input type='text' onChange={inputhandler}></input>
     <button type='submit'>  <i class="fa-solid fa-magnifying-glass"></i>Search</button>
     </form>  
     </div> 

  )
}
