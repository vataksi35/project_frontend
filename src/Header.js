import React from 'react';
import './Header.css';
 import {Link} from "react-router-dom";

export default function Header(){
    return(
         
        <nav>
        <h4  ><Link to ="/"><div className="nav--home">Home</div></Link></h4>
        <h4 ><Link to ="/rooms"><div className="nav--rooms">Rooms</div></Link></h4>
        <h4 ><Link to ="/activities"><div className="nav--activities">Activities</div></Link></h4>
            <h3 className ="nav--logo_text"><Link to ="/">GRANDPA'S</Link></h3> 
        <Link to ="/"><img
          src="http://shpijaegjyshit.al/wp-content/uploads/2020/12/logo.png"
         className = "nav--icon" /></Link>
         <h4><Link to ="/"><div className='nav--house'>HOUSE</div></Link></h4>
      </nav>
    
    )
}