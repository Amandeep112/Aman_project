import React from 'react'
import Nav from './Navv.css'
// import SEARCH from '../Search/Search'

import {  Link } from 'react-router-dom';
 
export default function Navv(prop) {

    return (
        
        <div className='Navbar'>
            <div className='Navbutton'>
                <ul>
                    <li>
                        <Link exact to='/' style={{textDecoration:'none'}}><button>HOME</button></Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to='/business' style={{textDecoration:'none'}}><button>BUSINESS</button></Link>
                        
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/world'style={{textDecoration:'none'}}><button>WORLD</button></Link>
                        
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/movies'style={{textDecoration:'none'}}><button>MOVIES</button></Link>
                        
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/scencei'style={{textDecoration:'none'}}><button>SCIENCE</button>  </Link>
                        
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/search' style={{textDecoration:'none'}}><button><i class="fa-solid fa-magnifying-glass"></i>SEARCH</button>  </Link>
                        
                    </li>
                </ul>
                 </div>
            {/* <SEARCH onSr={prop.onSearch} /> */}
            <div className='icon'>
                <button onClick={prop.onclick}>Dark Mode</button>
                <div><i class="fa-solid fa-newspaper"></i></div>
            </div>
        </div>
         
    )
}
