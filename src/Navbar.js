import img1 from './imgs/logo.png'
import { NavLink,Link,Outlet } from 'react-router-dom'
import Foter from './Foter';
import './Nav.css'
import { MdDarkMode } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from 'react';

export default function Navbar()
{
  const[isLiked,setIsLiked]=useState(false)
  const showMe =()=>{
    setIsLiked(true)
  }
  const changefalse=()=>{
    setIsLiked(false)
  }
    return (
      <div className='page-conainter'>
        <div className="nav-bar">
            <img className='logo' src={img1}></img> 
            <div className='muno'>
                <ul className={`nav ${isLiked ? "menu-responsive" :"muno_normale" }`}onMouseLeave={changefalse} >
                
                    <NavLink activeClassName="active-class" style={{textDecoration:'none'}} to="/"><li className='muno-item'><a>Home</a> </li></NavLink>
                    <NavLink style={{textDecoration:'none'}} to="about" activeClassName="active-class"><li className='muno-item'><a>About</a> </li></NavLink>
                    <Link style={{textDecoration:'none'}} to="services"><li className='munoitem'> Services</li></Link>
                    <Link style={{textDecoration:'none'}} to="Skills"><li className='munoitem'> Skils</li></Link>
                    <Link style={{textDecoration:'none'}} to="project"><li className='munoitem'> Projects</li></Link>
                    <NavLink style={{textDecoration:'none'}} to="Contact" className='munoitem' activeClassName="active-class"><li > Contact</li></NavLink>
                 </ul>
            </div>
            
            <FiAlignJustify className={`${'hid-media'}`} onClick={showMe}/>
            
          </div>
          
          
          <main>
            <Outlet></Outlet>
          </main>
      </div>


    )
        
}
