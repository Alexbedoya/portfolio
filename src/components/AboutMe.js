import React from "react";
import '../style/aboutme.css';

function AboutMe() {
    return ( 
        <div className="polygon  baground-gradiend">
            <div id="About_me" className="container padding135">
                <div className="row">
                    <div className="col-md-12 pt30">{'<?'}ABOUT ME</div>
                </div>
                <div className="row paddingtop30">
                    <div className="col-md-7 justify">
                        <p>Personally, I consider myself a cheerful and curious person about everything that surrounds me,
                            I am always in search of new knowledge, I am also a music lover attracted by different types of music,
                             I like to travel and get to know new cultures and places in definition, I am a calm person with a high 
                             degree of respect and determination.</p>
                    </div>
                </div>
                <div className="row paddingtop30">
                    <div className="col-md-6 offset-md-6 justify">
                        <p>
                        Professionally I am a Systems Engineer with 4 years of experience developing server administration activities, 
                        microservices development, participation in systems projects, requirements gathering, knowledge in various 
                        programming languages. With skills in managing office automation tools, managing web platforms with occupational 
                        interest in systems development, systems and information analyst.
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AboutMe;