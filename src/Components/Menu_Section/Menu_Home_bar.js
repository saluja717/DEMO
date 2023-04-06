import React from 'react'
import '../../CSS/Menu_Home_bar.css'
import {FaBars} from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Menu_Home_bar = () => {

    function change(){
        var a = document.getElementById('show');
        var b = document.getElementById('menu_list_media');
        a.style.display='block';
        // b.style.display='none';
        b.style.transform= `translateX(100%)`;
       }
    
       function open(){
          var a = document.getElementById('show');
          var b = document.getElementById('menu_list_media');
          a.style.display='none';
        //   b.style.display='block';
          b.style.transform= `translateX(0%)`;
       }
     
  return (
    <div>
       <div className='menu_main'>

        <div className='menu_name'>PORTFOLIO</div>

        <div className='menu_list'>
        <ul className='menu_ul_list'>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ACADEMICS</a></li>
            <li><a href="#">PROJECT</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>
        </div>
        
        <div className='media_show'>
        <div id='show' className='show' onClick={open}>{<FaBars/>}</div>
        <div id="menu_list_media" className='menu_list_media'>
        <div id='open' className='open' onClick={change}>{<MdClose/>}</div>
        <ul className='menu_ul_list_media'>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ACADEMICS</a></li>
            <li><a href="#">PROJECT</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>
        </div>
        </div>

        </div>
    </div>
  )
}

export default Menu_Home_bar
