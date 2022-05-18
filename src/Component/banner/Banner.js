import React,{useState}  from 'react'
// import Store from '../stoe/Context'


export default function Banner(prop) {
   const [text,settext]=useState('')
  //  const theme=useContext(Store)


  const searchHandler=(e)=>{
    e.preventDefault()
    prop.onSearch(text) 
     
  }

    const inputhandler=(e)=>{
     settext(e.target.value.toUpperCase())
      
    //  console.log(e.target.value);
      
  }

  return (
    <>

     {/* <div className='darkbutton'>
       <button className='day' onClick={prop}> Dark Mode</button></div> */}

    <div className='Bannercontainter '>
            <div className='Inner '>
            <h5>SEARCHING FOR:{prop.prop}</h5>
            <form onSubmit={searchHandler}>
          
            <input type='text '  onChange={inputhandler}></input>
            <button type='submit'>Search</button>
            </form>
         
            
        </div>

    </div>
    </>
  )
}
