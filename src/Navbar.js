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
  const [hr,setHr]=useState("home")
    return (
      <div className='page-conainter'>
        <div className="nav-bar">
            <img className='logo' src={img1}></img> 
            <div className='muno'>
                <ul className={`nav ${isLiked ? "menu-responsive" :"muno_normale" }`}onMouseLeave={changefalse} >
                
                    <Link  style={{textDecoration:'none'}} to="/"><li onClick={()=>{setHr("home")}} className='munoitem'>Home{hr==="home"?<hr/>:<></>}  </li></Link>
                    <Link style={{textDecoration:'none'}} to="services"><li onClick={()=>{setHr("services")}} className='munoitem'> Services {hr==="services"?<hr/>:<></>} </li></Link>
                    <Link style={{textDecoration:'none'}} to="Skills"><li onClick={()=>{setHr("skils")}} className='munoitem'> Skils {hr==="skils"?<hr/>:<></>} </li></Link>
                    <Link style={{textDecoration:'none'}} to="project"><li onClick={()=>{setHr("projects")}} className='munoitem'> Projects {hr==="projects"?<hr/>:<></>} </li></Link>
                    <NavLink style={{textDecoration:'none'}} to="Contact" className='munoitem'><li  onClick={()=>{setHr("contact")}} > Contact {hr==="contact"?<hr/>:<></>} </li></NavLink>
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
