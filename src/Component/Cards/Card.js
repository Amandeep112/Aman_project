import React,{useState,useEffect, useContext} from 'react'
import Store from '../stoe/Context'
import Banner from '../banner/Banner'
// import NAV from '../Navbar1/Navbar'
import ard from './card.css' 
export default function Card(prop) {
   
const theme=useContext(Store)

 
 const [articals,setArticals]=useState([])
 const [stext,setStext] = useState('ELECTION')

 useEffect(()=>{
  // ztCSndhR4ZuGVd5UvkACgaq11ukjIK5R
  // https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
  const fetchapi=async()=>{
    try{
   const res=await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${stext}&api-key=ztCSndhR4ZuGVd5UvkACgaq11ukjIK5R`)
   const artical= await res.json()
   setArticals(artical.response.docs)
  //  console.log(artical.response.docs);
  }catch(erroe){
    console.log(erroe)
  }
}
   

   fetchapi() 
 },[stext])
      
  return (
    <>
  

    <Banner prop={stext} onSearch={setStext}/>
 <div className= {!theme?'searchContainer':'searchContainerNight'}>
    
     { articals.map((newsobj)=>(
        <div className={!theme?'Card':'CardNight'}      key={newsobj.length++}>
           <img src= {`https://www.nytimes.com/${newsobj.multimedia[0].url}`}   alt={newsobj }></img> 
          <h3 className='HEADING'>Headline:<p>{newsobj.abstract}</p></h3>
          <h5 className="card-title" >{newsobj.byline.original}</h5>
           <div className='PTAG'><p className="card-text">{newsobj.lead_paragraph}</p></div>  
         
  
           <div className={!theme?'Readmor':'ReadmorNight'}><a href={newsobj.web_url}>Readmore</a></div>
       </div>  
        
     ))
     }
 </div>
 </>
  )
}
 