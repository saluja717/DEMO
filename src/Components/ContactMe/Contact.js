import React from 'react'
import '../../CSS/Contact.css'

const Contact = () => {
  return (
    <>
       <div className='contact_main'>
          <div className='contact_heading'>
              <p>CONTACT ME</p>
          </div>
         
          <div className='form_class'>
                <p className='form_class_heading'>Send a Message!</p>
                <form>
                   <input type="name" placeholder='Enter Your Name' autoComplete='false' required/>
                   <input type="email" placeholder='Enter Your Email' autoComplete='false' required/>
                   <textarea placeholder='Enter Your Message' required/>
                   <button>Send</button> 
                </form>
          </div>

       </div>
    </>
  )
}

export default Contact



