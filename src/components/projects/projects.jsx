import React from 'react';
import './projects.css';
import Project from '../project/project';
import Fade from 'react-reveal/Fade';
function Projects() {
    return (
        <div className='projects' id='projects'>
            <Fade bottom><h1 className='section__heading'>Projects</h1></Fade>
           
            <div className="projects__projectCont">

            {/* Vartalap App project */}
              <Project title="Vartalap App (Team Project)" 
              desc="It is an end-to-end encrypted chat application.We have developed a simple user friendly realtime chat application
              using Elliptic Curve Cryptography (curve 25519) to encrypt messages,whose 256 bit key is as much stronger as 3072 bit key of RSA."
              langs={['Kotlin','Jetpack compose','Javascript','Node.js','Express.js','MongoDB','ECC']} 
              githubLink="https://github.com/gulshanpatidar/Vartalap-App"
              />

            {/* Institute Attendance Management System project */}
             <Project title="Institute Attendance Management System"
             desc="Developed a web application for realtime attendance logging of students in an Institute.
             Contains authentication of Users and Admin using OAuth."
             langs={['HTML','CSS','Javascript','React.js','Node.js','Express.js','Google sheets API','MongoDB']}
             githubLink="https://github.com/ajnabee22/Institute-Attendance-Management-System" />

             {/* Amazon clone Project */}
             <Project title="Amazon clone"
             desc="Developed a simple clone of e-commerce giant 'Amazon'. User can register, login, search products, add products to cart, remove products from
             cart"
             langs={['HTML','CSS','Javascript','React.js','Node.js','Express.js','MongoDB']}
             githubLink="https://github.com/ajnabee22/amazon-clone"
             />

             {/* Keeper Project */}
             <Project title="Keeper"
             desc="A simple web application for writing and saving notes"
             langs={['HTML','CSS','Javascript','React.js','Node.js','Express.js','Google sheets API','MongoDB']}
             githubLink="https://github.com/ajnabee22/Keeper"
             />

             {/* Cricstats Project */}
             <Project title="Cricstats"
             desc="It is mini DBMS Project.Developed a website that shows stats from ODI career of players from different countries
             and contains authentication of Users and Admin."
             langs={['HTML','CSS','Bootstrap 4','php','Javascript','MySQL','MySQL Workbench','Xampp']}
             githubLink="https://github.com/ajnabee22/Cricstats"
             />
             
            </div>
        </div>
    )
}

export default Projects;