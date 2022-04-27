import React from 'react';
import './Footer.css';
 import {Link, Router} from "react-router-dom";

 export default function Footer(){
     return(
         <div className='footer--1'>
             <p><Link to="/"><div className='footer--text'>Home</div></Link></p>
             <p><Link to="/rooms"><div className='footer--text'>Rooms</div></Link></p>
             <p><Link to="/"><div className='footer--text'>Contact</div></Link></p>
             <p><div className='footer--contact'>Contact us : +355 69 XXX XXXX</div></p>
         </div>
     )
 }