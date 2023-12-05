import './Home.css'
import './Skills.css'
import img from '../imgs/skills.png'
export default function Skills(){
  const degre="80%"
    return(
      <div className="skills-container">
        <div className="space-witi">
                <h1><span style={{color:'blueviolet'}}>Our </span> Skills </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius adipisci pariatur aliquid exercitationem debitis, necessitatibus recusandae eveniet dolorum sit quasi corrupti. Tenetur ab, rerum atque eius minus non inventore nesciunt.</p>
        </div>
        <div className="con-skill">
        <div className="our-skills" id="our-skills">
        <h2 className="main-title"></h2>
        <div className="container">
          <img decoding="async" src={img} alt="" />
          <div className="skills">
            <div className="skill">
              <h3>HTML <span>80%</span></h3>
              <div className="the-progress">
              <span style={{width: "80%"}}></span>  
              </div>
            </div>
            <div className="skill">
              <h3>CSS <span>85%</span></h3>
              <div className="the-progress">
              <span style={{width: "85%"}}></span> 
              </div>
            </div>
            <div className="skill">
              <h3>JavaScript <span>70%</span></h3>
              <div className="the-progress">
              <span style={{width: "70%"}}></span>
              </div>
            </div>
            <div className="skill">
              <h3>Python <span>80%</span></h3>
              <div className="the-progress">
              <span style={{width: "80%"}}></span>
              </div>
            </div>
            <div className="skill">
              <h3>React.js <span>50%</span></h3>
              <div className="the-progress">
              <span style={{width: "50%"}}></span>  
              </div>
            </div>
            <div className="skill">
              <h3>Vue.js <span>40%</span></h3>
              <div className="the-progress">
              <span style={{width: "40%"}}></span>  
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    )

}