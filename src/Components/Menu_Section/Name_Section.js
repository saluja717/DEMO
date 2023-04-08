import React from 'react'
import '../../CSS/Name_Section.css'
import Typewriter from 'typewriter-effect';
import PDF from '../../Components/Menu_Section/Resume_Manpreet.pdf'


const Name_Section = () => {
  return (
    <>
      <div className='name_section'>
        
        <p id='type-writer'>Hello I am a {
           <Typewriter
           options={{
             strings: ['<p style="display:inline; color:white;">React Developer</p>', '<p style="display:inline; color:brown;">Computer Science Enthuiastic</p>','<p style="display:inline; color:white;">Web Developer</p>'],
             autoStart: true,
             loop: true,
           }}
         />   
        }</p>
        

        <div className='button'>
             <button data-aos="zoom-in" data-aos-delay="1000"><a href="#" target="_blank" >Download CV</a></button>
             <button data-aos="zoom-in" data-aos-delay="1000">Contact Me</button> 
        </div>

      </div> 

    </>
  )
}

export default Name_Section
