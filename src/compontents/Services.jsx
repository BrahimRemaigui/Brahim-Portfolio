import './Skills.css'
import img1 from '../imgs/build-web.png'
import img2 from '../imgs/ricardo-viana--tYsPFKMm7g-unsplash.jpg'
import img3 from '../imgs/frent-end.jpg'
import img4 from '../imgs/descktop-app.jpg'
import { GrFormNextLink } from "react-icons/gr";
import React, { Component } from "react";
import Slider from "react-slick";
import img5 from '../imgs/db.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Services() {

  const class1 = 'dis-btn';
  const class2 = 'place';

  
  return (
    <div className='servises-con'>
      <div className="space-witi">
        <h1><span style={{ color: 'blueviolet' }}>Services </span> We Provide </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius adipisci pariatur aliquid exercitationem debitis, necessitatibus recusandae eveniet dolorum sit quasi corrupti. Tenetur ab, rerum atque eius minus non inventore nesciunt.</p>
      </div>
      
      <div className="grid-card">
        <div className="box">
          <img src={img1} className='bold-img' alt="" />
          <div className="box-carf">
            <h3>Create web sites</h3>
            <p>Transform your ideas into a stunning online presence! we specialize in creating custom websites that captivate and engage.</p>
            <div className='request-service'>Request Sercices <GrFormNextLink className='RequestIcon'/> </div>
          </div>
        </div>
        <div className="box">
          <img src={img2} className='bold-img' alt="" />
          <div className="box-carf">
            <h3>Create & Design Logo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cumque.</p>
            <div className='request-service'>Request Sercices <GrFormNextLink className='RequestIcon'/> </div>
          </div>
        </div>
        <div className="box">
          <img src={img3} className='bold-img' alt="" />
          <div className="box-carf">
            <h3>Participation in Frent-end Projects</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cumque.</p>
            <div className='request-service'>Request Sercices <GrFormNextLink className='RequestIcon'/> </div>
          </div>
        </div>

        <div className="box" S>
          <img src={img4} className='bold-img' alt="" />
          <div className="box-carf">
            <h3>Create Desktop Applications</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cumque.</p>
            <div className='request-service'>Request Sercices <GrFormNextLink className='RequestIcon'/> </div>
          </div>
        </div>
        <div className="box">
          <img src={img5} className='bold-img' alt="" />
          <div className="box-carf">
            <h3>Create & Manager Databases</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cumque.</p>
            <div className='request-service'>Request Sercices <GrFormNextLink className='RequestIcon'/> </div>
          </div>
        </div>

      </div> 
    </div>
  )

}
