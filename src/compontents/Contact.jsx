import './Home.css'
import './Contact.css'
import img1 from '../imgs/contact-us.jpg'
import BasicTable from '../functions/BasicTable'
export default function Contact(){
    return(
        <div className="Contact-con">
            <div className="space-witing">
                <h1>Contact us </h1>
                <input type="email"className='name' />
                <input type="text"className='name' />
                <textarea className='textarea'></textarea>
                <button className='sent-mess'>send Message</button>
            </div>
           
            <div className="image-cover">
                <img src={img1} alt="" />
            </div>
        
        </div>
    )

}