import React from 'react';
import Menu from './Components/Menu_Section/Menu';
import Profile from './Components/Profile/Profile.js';
import Qualification from './Components/Qualification/Qualification.js'
import Skills from './Components/Skills/Skill.js'
import Project from './Components/Projects/Project.js'
import Contact from './Components/ContactMe/Contact.js'

function App() {
  return (
    <div>
       <Menu/>
       <Profile/>
       <Qualification/>
       <Skills/>
       <Project/>
       <Contact/>
    </div>
  );
}

export default App;
