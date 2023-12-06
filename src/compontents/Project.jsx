import './Home.css'
import './Pro.css'
import img1 from '../imgs/Screenshot 2023-12-06 225730.png' 
import BasicTable from '../functions/BasicTable'
import { Link } from 'react-router-dom'

export default function Project(){
    return(
        <div className="services-container">
             <div className="space-witi">
             <h1><span style={{ color: 'blueviolet' }}>Projects </span> We Created </h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius adipisci pariatur aliquid exercitationem debitis, necessitatibus recusandae eveniet dolorum sit quasi corrupti. Tenetur ab, rerum atque eius minus non inventore nesciunt.</p>
            </div>

     <div className="grid-card-pro">
        <div className="box-pro">
          <img src={img1} className='bold-img' alt="" />
          <div className="box-carf">
            <h3>Create web sites</h3>
            <a href='library-project-beta.vercel.app'><button className={`${'dis-btn'} ${'place'}`} >Go to the Project</button> </a>
          </div>
        </div>
        <div className="box-pro">
          <img src={''} className='bold-img' alt="" />
          <div className="box-carf">
            <h3>Create web sites</h3>
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