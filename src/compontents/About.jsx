import './Home.css'
import {motion} from 'framer-motion'
export default function About(){
    return(
        
        <motion.div initial={{visibility:'hidden',opacity:0 }} whileInView={{opacity:1 ,visibility:'visible',x:0,opacity:1}} transition={{delay:1, duration:1.5}} className="About-section">
         <motion.h1 initial={{y:-100}} animate={{fontSize : 50,x:10,y:10}}>Who is  <span style={{color:'blueviolet'}}>Brahim </span></motion.h1>
         <motion.p initial={{x:-100}} animate={{x:0, background:'#e3e3e3', padding:'2px'}}>
         I am Brahim Remaigui i am Algerian. I h working as a software engineer in a private company and I'am Freelancer Front-end Developer. I am 24 years old. I have a master’s degree in software engineering and distributed systems 
         </motion.p>
         <p style={{background:'#e3e3e3', padding:'2px'}}>I am a passionate front-end developer specializing in the React framework, with a keen eye for crafting engaging and user-friendly web experiences. Proficient in HTML and CSS, I leverage these technologies to bring designs to life, ensuring seamless and visually appealing interfaces. My commitment to writing clean, efficient code and staying abreast of the latest industry trends allows me to create dynamic and responsive applications that prioritize user experience. With a love for problem-solving and a dedication to staying at the forefront of web development, I strive to contribute to innovative and impactful projects.</p>
        <h1>Educations</h1>
        <div style={{background:'#e3e3e3', padding:'2px', width:'100%'}}>
                <p >-Master In Software Engineering And Distributed Systems Mohamed Khider University Biskra 2020-2022</p>
                <p>
                    -License In Computer System Information System 2015-2019 University Mohamed Khider Biskra
                </p>
        </div>
        </motion.div>
        
    )

}