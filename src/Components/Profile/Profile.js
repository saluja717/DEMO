import React from 'react'
import '../../CSS/Profile.css'
import img from './photo.png'
import { FaGithub,FaLinkedin,FaWhatsapp,FaTwitter} from "react-icons/fa";
import Partical_Component from '../Profile/Partical_Component';


const Profile = () => {
  return (
   <>

    <div className='profile_main'>

        <Partical_Component/>  

       <div className='heading'>PROFILE</div>

       <div className='section' data-aos="fade-left" data-aos-delay="300">
       
            <div className='section_1'>
                <img src={img} alt="img" />
            </div>
            <div className='section_2'>
                {/* <p>I am a passionate computer science enthusiast with a deep understanding of data structures, algorithms, and core CSE subjects.I have hands-on experience in web development and have completed an internship at Tech Exordium, where I honed my skills in this area. I enjoy taking up new challenges and constantly strive to expand my knowledge and skills in the field of computer science.</p> */}
                <p style={{textTransform:'camelcase'}}>My name is Manpreet Singh Saluja .I am a passionate computer science enthusiast with a deep understanding of data structures, algorithms, and core CSE subjects. My recent achievement of securing an All India Rank of 315 in GATE 2023 reflects my dedication and perseverance toward my academic goals. Additionally, I have hands-on experience in web development and have completed an internship at Tech Exordium, where I honed my skills in this area. I enjoy taking up new challenges and constantly strive to expand my knowledge and skills in the field of computer science.</p>
            </div>
       
       </div>

       <div className='social_media'>
          <ul className='list_social_media'>
            <div data-aos="fade-right" data-aos-delay="300"><li><a href="#">{<FaGithub/>}</a></li></div>
            <div data-aos="fade-right" data-aos-delay="300"><li><a href="#">{<FaLinkedin/>}</a></li></div>
            <div data-aos="fade-right" data-aos-delay="300"><li><a href="#">{<FaWhatsapp/>}</a></li></div>
            <div data-aos="fade-right" data-aos-delay="300"><li><a href="#">{<FaTwitter/>}</a></li></div>
          </ul>
       </div>

    </div>
    </>
  )
}

export default Profile
