import './Home.css'
import './Pro.css'
import img1 from '../imgs/Screenshot 2023-12-06 225730.png' 
import img2 from '../imgs/logo.png'
import img22 from '../imgs/Screenshot 2023-12-09 222030.png'
import img3 from '../imgs/template 3 zero.png'
import BasicTable from '../functions/BasicTable'
import { Link } from 'react-router-dom'

export default function Project(){
    return(
        <div className="services-container">
             <div className="space-witi">
             <h1><span style={{ color: 'blueviolet' }}>Projects </span> We Created </h1>
             <p>I created a semple project through wich i show some books i use react js and html css js</p>
            </div>

     <div className="projects-container">
        <div className="box-pro">
          <img src={img22} className='bold-img' alt="" />
          <div className="box-carf">
            <h3>React Deepth toturial</h3>
            <p>I created a semple project through wich i show some books i use react js and html css js</p>
            <a href='library-project-beta.vercel.app'><button className={`${'dis-btn'} ${'place'}`} >Go to the Project</button> </a>
          </div>
        </div>

        <div className="box-pro">
          <img src={img1} className='bold-img' alt="" />
          <div className="box-carf">
            <h3>Create web sites</h3>
            <a href='library-project-beta.vercel.app'><button className={`${'dis-btn'} ${'place'}`} >Go to the Project</button> </a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, neque!</p>
          </div>
        </div>
        <div className="box-pro">
          <img src={img3} className='bold-img' alt="" />
          <div className="box-carf">
            <h3>Portfolio </h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, soluta?</p>
            <a href='library-project-beta.vercel.app'><button className={`${'dis-btn'} ${'place'}`} >Go to the Project</button> </a>
          </div>
        </div>

        <div className="box-pro">
          <img src={img2} className='bold-img' alt="" />
          <div className="box-carf">
            <h3>Create Logo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nesciunt?</p>
            <button className={`${'dis-btn'} ${'place'}`} >Go to the Project</button>
          </div>
        </div>
        <div className="box-pro">
          <img src={''} className='bold-img' alt="" />
          <div className="box-carf">
            <h3>Create web sites</h3>
            <button className={`${'dis-btn'} ${'place'}`} >Go to the Project</button>
          </div>
        </div>
    </div>

        </div>
    )

}