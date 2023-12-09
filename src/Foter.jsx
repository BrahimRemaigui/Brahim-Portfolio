import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import { FiMapPin } from "react-icons/fi";
import { TbClockHour3 } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import img1 from './imgs/build-web.png'
import img2 from './imgs/descktop-app.jpg'
import img3 from './imgs/frent-end.jpg'
import img4 from './imgs/db.jpg'
export default function Foter() {
  return (

    <div class="footer-con">
      <div className='diff-self'>
        <h1>Brahim Remaigui</h1>
        <p>Front-end web developer i am junior react developer </p>
        <div className="footer-icons">
          <FaFacebook className='fb-icon' />
          <GrLinkedin className='fb-icon' />
          <FaGithub className='fb-icon' />
          <FaInstagramSquare className='fb-icon' />
        </div>
      </div>
      <div className="import-link">
        <span className='spann'>
          <GrFormNextLink className='link-icon' />
          <p>About Brahim</p>
        </span>
        <span className='spann'>
          <GrFormNextLink className='link-icon' />
          <p>Services Provid</p>
        </span>
        <span className='spann'>
          <GrFormNextLink className='link-icon' />
          <p>Projects </p>
        </span>
        <span className='spann'>
          <GrFormNextLink className='link-icon' />
          <p>Skills of Brahim</p>
        </span>
        <span className='spann'>
          <GrFormNextLink className='link-icon' />
          <p>Contact Brahim</p>
        </span>
      </div>
      <div className="job-info">
      <span className='spann'>
          <FiMapPin className='link-icon' />
          <p>Zribet el Ouad biskra, Algeria</p>
        </span>
        
        <span className='spann'>
          <TbClockHour3 className='link-icon' />
          <p>Business Hours: From 10:00 To 22:00</p>
        </span>
        
        <span className='spann'>
          <FaPhoneVolume className='link-icon' />
          <p>+213 665830677</p>
        </span>
 
        <span className='spann'>
        <MdOutlineEmail className='link-icon' />
          <p>ibrahimremaigui@gmail.com </p>
        </span>
      </div>
      <div className="footer-imgs">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
    </div>

  )
}