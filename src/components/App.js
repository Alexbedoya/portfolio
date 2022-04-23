import React from 'react';
import Menu from '../components/Menu.js'
import WhoIAm from './WhoIAm.js';
import AboutMe from './AboutMe.js';
import Skills from './skills.js';
import Experience from './Experience.js';
import Portfolio from './portfolio.js';
import Footer from './footer.js'

function App() {
  return (
    <div className='container-fluid'>
      <Menu></Menu>
      <WhoIAm></WhoIAm>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <div className='heptagon baground-gradiend'></div>
      <Experience></Experience>
      <div className='triangulo height100 baground-gradiend'></div>
      <Portfolio></Portfolio>
      <div className='baground-gradiend margin-top120'></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
