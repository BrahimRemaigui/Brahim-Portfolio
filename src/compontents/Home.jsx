import './Home.css'
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import img from '../imgs/brahim-photo-removebg-preview.png'
export default function Home() {
    return (
        <div className="home-container">
            <div className="space-witi">
                <h4>Hi I'am</h4>
                <h1><span style={{color:'blueviolet'}}>Brahim </span> Remaigui </h1>
                <p> I am a passionate front-end developer specializing in the React framework, with a keen eye for crafting engaging and user-friendly web experiences. Proficient in HTML and CSS, I leverage these technologies to bring designs to life, ensuring seamless and visually appealing interfaces. My commitment to writing clean, efficient code and staying abreast of the latest industry trends allows me to create dynamic and responsive applications that prioritize user experience. With a love for problem-solving and a dedication to staying at the forefront of web development, I strive to contribute to innovative and impactful projects.</p>
                <div className="icons">
                <FaFacebook className='fb-icon'/>
                <GrLinkedin className='fb-icon'/>
                <FaGithub className='fb-icon'/>
                <FaInstagramSquare className='fb-icon'/>
                </div>
            </div>
            <div className='space-imag'>
                <div className="back-img">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )

}