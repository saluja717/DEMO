import React from 'react'
import '../../CSS/Project.css'
import CovidImg from '../Projects/Covid.JPG'
import IMG from '../Profile/image.jpg'

const Project = () => {
  return (
    <>

       {/* for above 620px */}
       
     <div className='project_root'>


      <div className='project_main'>
    
         <div className='project_heading'>
              PROJECTS
         </div>
       
        <div className='project_list'>
             <span className='project_image'>
                <img src={CovidImg}/>
                <div>
                    A Covid Website Project By Using React Js 
                </div>
             </span>
             <span className='project_image'><img src={IMG}/>
                 <div>
                    A Covid Website Project By Using React Js 
                </div>
             </span>
             <span className='project_image'><img src={CovidImg}/>
                <div>
                    A Covid Website Project By Using React Js 
                </div>
             </span>
             <span className='project_image'><img src={IMG}/>
                <div>
                    A Covid Website Project By Using React Js 
                </div>
             </span>
             <span className='project_image'><img src={IMG}/>
                <div>
                    A Covid Website Project By Using React Js 
                </div>
             </span>
             <span className='project_image'><img src={IMG}/>
                <div>
                    A Covid Website Project By Using React Js 
                </div>
             </span>
        </div>


      </div>  


      {/* for upto 620px */}
     
       <div className='responsive_project_main'>
           
           <div className='responsive_project_heading'>
                   PROJECTS
            </div> 

            <div className='responsive_project_list'>
            <span className='responsive_project_image'>
                <img src={CovidImg}/>
                <div>
                    A Covid Website Project By Using React Js 
                </div>
             </span>
             <span className='responsive_project_image'><img src={IMG}/>
                 <div>
                    A Covid Website Project By Using React Js 
                </div>
             </span>
             <span className='responsive_project_image'><img src={CovidImg}/>
                <div>
                    A Covid Website Project By Using React Js 
                </div>
             </span>
             <span className='responsive_project_image'><img src={IMG}/>
                <div style={{marginBottom:"15px"}}>
                    A Covid Website Project By Using React Js 
                </div>
             </span>
            </div>

       </div> 

      </div>

    </>
  )
}

export default Project
