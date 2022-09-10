import React,{useState} from 'react';
import './about.css';
import Fade from 'react-reveal/Fade';
import Welcome from '../../Welcome.svg';

const About = () => {
   const [show,Setshow] = useState({type:"quote"})
 return (
    <div className='about' id='about'>
    <h1 className='section__heading'>About</h1>
        <div className="about__section">
         <Fade bottom><div className='about__text'>
         Hii I am Vishal Kumar Anand. I am currently pursuing B.Tech in CSE from Indian Institute of Information Technology Vadodara, Gujarat. I like to build things on web.
         I am currently designing and developing websites using Javascript that enhance user experience.
         </div></Fade>
         <Fade bottom><img src={Welcome} alt="" className="about__sectionImage"/></Fade>
         </div>
        <Fade bottom> 
        <div className="about__sideParent">
         <div className="about__buttons">
            <button className={show.type==='quote'? "about__button about__button--active":"about__button"} onClick={() => Setshow({type:'quote'})}>Favourite Quote</button>
            <button className={show.type==='interest'? "about__button about__button--active":"about__button"} onClick={() => Setshow({type:'interest'})}>Interests</button>
            <button className={show.type==='recentTech'? "about__button about__button--active":"about__button"} onClick={() => Setshow({type:'recentTech'})}>Recent Tech</button>
         </div>
         <div className="about__side">
        {
           show.type === "quote" && <div className="about__quote">
           He who has a why to live can bear almost any how.
           <span className="about__quoteAuthor"><em>Friedrich Nietzsche</em></span>
           </div> 
         }
        { show.type === "interest" && (
           <div className="about__subSection">
            <ul>
               <li className='about__subSectionitem'>Business</li>
               <li className='about__subSectionitem'>Music</li>
               <li className='about__subSectionitem'>Working out</li>
               <li className='about__subSectionitem'>Sports</li>
               <li className='about__subSectionitem'>Web</li>
            </ul>
         </div>
        )
        }
        { show.type === "recentTech" && (
           <div className="about__subSection">
            <ul>
               <li className='about__subSectionitem'>React.js</li>
               <li className='about__subSectionitem'>Node.js</li>
               <li className='about__subSectionitem'>Express.js</li>
               <li className='about__subSectionitem'>MongoDB</li>
               <li className='about__subSectionitem'>MySQL</li>
         
            </ul>
         </div>
        )
        }
        </div>

      </div>
      </Fade>
     <Fade bottom><div className="about__message">
     <h1 className="about__messageHead">Get In Touch</h1>
     <p className='about__text--light'>If you have any business idea or just want to connect or collaborate on any interesting project, I would love to interact with you. Send me a message by <a href="#contact" className='about__contact'>Contact</a> form.</p>
     </div>
     </Fade>
    </div>
 )
}

export default About;