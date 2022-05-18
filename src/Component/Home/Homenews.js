import React,{useState,useEffect,useContext} from 'react'
import Store from '../stoe/Context'
import home from './Homenews.css'

export default function Homenews() {
   const theme= useContext(Store)
    const [homeN,setHomeN]=useState([])
    useEffect(()=>{
        const HomeApi=async()=>{
            try{
                const res=await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=home&api-key=ztCSndhR4ZuGVd5UvkACgaq11ukjIK5R`)
                const newss= await res.json()
                setHomeN(newss.response.docs)
                console.log(newss.response.docs)
            }catch(erroe){
                console.log(erroe);
            }
        
            
        }
    HomeApi()    
  },[setHomeN])
  return (
    <div className={!theme? 'newscontainer':'newscontainernight'}>
    
    {homeN.map((newsobj)=>(
       <div className={!theme?'newsboj':'newsbojnight'}   key={newsobj.length++}>
          <img src= {`https://www.nytimes.com/${newsobj.multimedia[0].url}`}   alt={newsobj}></img> 
         <h3 className='HEADING'>Headline:<p>{newsobj.abstract}</p></h3>
         <h4 className="card-title" >{newsobj.byline.original}</h4>
          <p  className="card-text">{newsobj.lead_paragraph}</p>
         <div className={!theme?'Readmor':'Readmornight'}><a  href={newsobj.web_url}>Readmore</a></div>
        
 
      </div>  
       
    ))
    }
</div>
  )
}
