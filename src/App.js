import React from 'react';
import Menu from './Components/Menu_Section/Menu';
import Profile from './Components/Profile/Profile.js';
import Qualification from './Components/Qualification/Qualification.js'
import Skills from './Components/Skills/Skill.js'

function App() {
  return (
    <div>
       <Menu/>
       <Profile/>
       <Qualification/>
       <Skills/>
    </div>
  );
}

export default App;
