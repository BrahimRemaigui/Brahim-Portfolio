import './Home.css'
import img from '../imgs/skills.png'
export default function Skills(){
    return(
        <div className="con-skill">
        <div className="our-skills" id="our-skills">
        <h2 className="main-title">Our Skills</h2>
        <div className="container">
          <img decoding="async" src={img} alt="" />
          <div className="skills">
            <div className="skill">
              <h3>HTML <span>80%</span></h3>
              <div className="the-progress">
                
              </div>
            </div>
            <div className="skill">
              <h3>CSS <span>85%</span></h3>
              <div className="the-progress">
                
              </div>
            </div>
            <div className="skill">
              <h3>JavaScript <span>70%</span></h3>
              <div className="the-progress">
             
              </div>
            </div>
            <div className="skill">
              <h3>Python <span>80%</span></h3>
              <div className="the-progress">
             {<span style={{width: '80%'}}></span>
             } 
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  
    )

}