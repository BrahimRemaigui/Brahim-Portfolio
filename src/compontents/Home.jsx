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
                <p>I'am frent-end web devloper i worked at react js Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus at suscipit fugit voluptatem soluta vitae dignissimos saepe illum doloribus, maiores vel non. Eum cum eligendi, aperiam nobis delectus id tenetur.</p>
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