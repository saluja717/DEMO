import React from 'react'
import '../../CSS/Skill.css'
import { FaReact , FaHtml5, FaBootstrap ,FaGithub,FaNodeJs } from "react-icons/fa";
import { DiJavascript , DiCss3 , DiMongodb} from "react-icons/di";
import { SiThealgorithms,SiFirebase } from "react-icons/si";
// import { TiHtml5 } from "react-icons/ti";

const Skill = () => {
  return (
    <>
     
      <div data-aos="fade-left" className='skill_main'>
        
         <div className='skill_heading'>SKILLS</div>
         
         <div className='skill_list'>
                
               <div data-aos="fade-left" className='skill_list_no'>
                     <div style={{ color:"blue"}}><FaReact/></div>
                     <p>REACT</p>
                </div> 

                <div  data-aos="fade-right" className='skill_list_no'>
                     <div style={{ color:"yellow"}}><DiJavascript/></div>
                     <p>JAVASCRIPT</p>
                </div> 

                <div  data-aos="fade-left" className='skill_list_no'>
                     <div style={{ color:"red"}}><FaHtml5/></div>
                     <p>HTML</p>
                </div> 

                <div data-aos="fade-right" className='skill_list_no'>
                     <div style={{ color:"white"}}><DiCss3/></div>
                     <p>CSS</p>
                </div> 

                <div  data-aos="fade-left" className='skill_list_no'>
                     <div style={{ color:"violet"}}><FaBootstrap/></div>
                     <p>BOOTSTRAP</p>
                </div> 
                <div data-aos="fade-right" className='skill_list_no'>
                     <div style={{ color:"white"}}><FaGithub/></div>
                     <p>GITHUB</p>
                </div> 
                <div  data-aos="fade-left"className='skill_list_no'>
                     <div style={{ color:"green"}}><DiMongodb/></div>
                     <p>MONGODB</p>
                </div> 

                 <div data-aos="fade-right" className='skill_list_no'>
                     <div style={{ color:"yellow"}}><FaNodeJs/></div>
                     <p>NODE JS</p>
                </div> 
                
                <div  data-aos="fade-left" className='skill_list_no'>
                     <div style={{ color:"white"}}><SiThealgorithms/></div>
                     <p>ALGORITHM</p>
                </div> 

                <div style={{marginBottom:"3em"}} data-aos="fade-right" className='skill_list_no'>
                     <div style={{ color:"yellow"}}><SiFirebase/></div>
                     <p>FIREBASE</p>
                </div> 

         </div>


      </div>


    </>
  )
}

export default Skill
