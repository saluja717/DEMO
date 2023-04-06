import React from 'react'
import '../CSS/Name_Section.css'
import Typewriter from 'typewriter-effect';


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
             <button><a href="../Components/Resume_Manpreet.pdf" target="_blank" >Download Cv</a></button>
             <button>Contact Me</button> 
        </div>

      </div> 

    </>
  )
}

export default Name_Section
