import React from 'react';
import VishalIMAGE from '../../vishalrec2.jpeg';
import './intro.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Intro() {
    return (
        <div className="intro">
       
        <Zoom>
        <div className='intro__image'> 
        <div className='intro__imageBack'>
        </div> 
        <img className="vkImage" src={VishalIMAGE} alt=""/>
        </div>
       </Zoom>
  
        <div className='intro__desc'>
        <Fade bottom><p className='intro__msg'>Hi, my name is</p></Fade>
        <Fade bottom><h1 className='intro__head'>Vishal Kumar Anand.
        </h1></Fade>
        <Fade bottom><h1 className='intro__text'>I design and develop web apps that promote people 24/7.</h1></Fade>
        <Fade bottom> <a href="#about" className='intro__aboutLink'>More About Me</a></Fade>
          </div>
      </div>
    )
}

export default Intro;
