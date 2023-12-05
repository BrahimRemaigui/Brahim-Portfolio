import img1 from './imgs/logo.png'
import { NavLink,Link,Outlet } from 'react-router-dom'
import Foter from './Foter';
import './Nav.css'
import { MdDarkMode } from "react-icons/md";
export default function Navbar()
{
    return (
        <>
        <div className="nav-bar">
            <img className='logo' src={img1}></img> 
            <div className='muno'>
                <ul>
                    <Link style={{textDecoration:'none'}} to="/"><li className='muno-item'><a>Home</a> </li></Link>
                    <Link style={{textDecoration:'none'}} to="services"><li className='muno-item'> Services</li></Link>
                    <Link style={{textDecoration:'none'}} to="Skills"><li className='muno-item'> Skils</li></Link>
                    <Link style={{textDecoration:'none'}} to="Contact"><li className='muno-item'> Projects</li></Link>

                    <Link style={{textDecoration:'none'}} to="Portfolio"><li className='muno-item'> Portfolio</li></Link>
                    <Link style={{textDecoration:'none'}} to="Contact"><li className='muno-item'> Contact</li></Link>
                 </ul>
            </div>
            <MdDarkMode className='darc-icon'/>

          </div>

          <main>
            <Outlet></Outlet>
          </main>
          </>


    )
        
}