import React from 'react'
import '../../CSS/Qualification.css'

const Qualification = () => {

 
    const openExperience = (e)=>{
        var a = document.getElementsByClassName('experience');
        var b = document.getElementsByClassName('qualification');
        var c = document.getElementsByClassName('qualification_section')[0].childNodes;
        c[0].style.color='white';
        c[1].style.color="yellow"
        a[0].style.display="block";
        b[0].style.display="none";
    }

    const openQualification = (e)=>{
        var a = document.getElementsByClassName('experience');
        var b = document.getElementsByClassName('qualification')
        var c = document.getElementsByClassName('qualification_section')[0].childNodes;
        c[1].style.color="white";
        c[0].style.color="yellow"
        b[0].style.display="block";
        a[0].style.display="none";
    }


  return (
    <>
     
      <div className='qualification_main' data-aos="fade-left" data-aos-delay="600">
          <div className='qualification_heading'>QUALIFICATION AND EXPERIENCE</div>
          <div className='qualification_section'>
               <div className='active' onClick={openQualification}><p>QUALIFICATION</p></div>
               <div className='non-active' onClick={openExperience}><p>EXPERIENCE</p></div>
          </div>


          <div className='qualification_content'>
               <div className='qualification'>

                    <ul className='ul_seperator'>
                        <li>
                            <div>
                                <h3>Graduation</h3>
                                <p>SHRI SHANKARACJARYA INSTITUTE OF PROFESSIONAL MANAGEMENT OF TECHNOLOGY , RAIPUR</p>
                                <p>2019-2023</p>
                            </div>
                        </li>
                        <hr/>
                        <li>
                            <div>
                                <h3>12TH</h3>
                                <p>CHAKARABORTY PUBLIC SCHOOL,BAIHAR</p>
                                <p>2018-2019</p>
                            </div>
                        </li>
                        <hr/>
                        <li>
                            <div>
                                <h3>10TH</h3>
                                <p>CHAKARABORTY PUBLIC SCHOOL,BAIHAR</p>
                                <p>2017-2018</p>
                            </div>
                        </li>
                    </ul>

               </div>
               <div className='experience'>
                    
                <ul className='ul_seperator'>
                            <li>
                                <div>
                                    <h3>TECH EXORDIUM</h3>
                                    <p>WEB DEVELOPMENT INTERSHIP WHERE WE HAVE TO DEVELOP THE FRONTEND OF WEBSITES.</p>
                                    <p>3 MONTHS</p>
                                </div>
                            </li>
                            <hr/>
                            <li>
                                <div>
                                    <h3>MICROSOFT EXCEL TRAINING</h3>
                                    <p>THE TRAINING PROGRAM CONSISTS OF VARIOUS EXCEL TRICKS AND LEARN ABOUT THE EXCEL CHARTS ETC.</p>
                                    <p>2 MONTHS</p>
                                </div>
                            </li>
                  </ul>

               </div>
          </div>  





      </div>

    </>
  )
}
export default Qualification;  

                  