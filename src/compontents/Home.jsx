import './Home.css'
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import About from './About'
import Services from './Services'
import Skils from './Skills'
import Project from './Project'
import Contact from './Contact'
import {Link} from 'react-router-dom'
import img from '../imgs/brahim-photo-removebg-preview.png'
import { useState } from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";
import useScroll from '../useScroll'


export default function Home() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    const handleDownload = () => {
        
        
        // Replace 'your_file_url' with the actual URL of the file to be downloaded
        const fileUrl = '/cv.doxc';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Cv-BRAHIM-REMAIGUI.docx'; // You can set the desired filename here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      const scrollPosition = useScroll();

    return (
        <div>
        <div className="home-container">
            <div className="space-witi">
                <h4>Hi I'am</h4>
                <h1><span style={{color:'blueviolet'}}>Brahim </span> Remaigui </h1>
                <h1 style={{fontSize:'37px'}}>I'am <span style={{color:'blueviolet'}}>Freelancer Front-end </span> Developer </h1>
                <div className="icons">
               <a href="www.facebook.com"> <FaFacebook className='fb-icon'/></a>
                <a href="www.facebook.com"><GrLinkedin className='fb-icon'/></a>
                <FaGithub className='fb-icon'onClick={()=>{ navigate("https://github.com/BrahimRemaigui") }}/> 
                <FaInstagramSquare className='fb-icon'/>
                </div>
                <div className="btns">
                    <button className='dis-btn' onClick={handleDownload}>Download CV</button>
                    <Link style={{textDecoration:'none'}} to="Contact"><button className='dis-btn'>Contact Us</button></Link>
                </div>
                
            </div>
            <div className='space-imag'>
                <div className="back-img">
                    <img src={img} alt="" />
                </div>
            </div>
            
        </div>
        <a href="#about"><FaAngleDoubleDown  className='Double-Down'/> </a>
        <div id='about'> {  <About></About> }   </div>
        <div className="separeteur"></div>
        <div> {  <Services></Services> }   </div>
        <div className="separeteur"></div>
        <div> {  <Skils></Skils> }   </div>
        <div className="separeteur"></div>
        <div> {  <Project></Project> }   </div>
        <div className="separeteur"></div>
        <div> {  <Contact></Contact> }   </div>

       
      
   
     </div>
    )

}