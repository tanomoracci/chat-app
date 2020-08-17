import React from 'react';
import './App.css';
import Contact from './Contact';

function App() {
  return (
    <>
      <Contact avatar='https://randomuser.me/api/portraits/men/63.jpg' name='Roger Lewis' online={true} />
      <Contact avatar='https://randomuser.me/api/portraits/men/41.jpg' name='Charles Coleman' online={false} />
      <Contact avatar='https://randomuser.me/api/portraits/men/97.jpg' name='Antonio Robertson' online={true}/>
    </> 
  );
}

export default App;
