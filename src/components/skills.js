import React from "react";
import '../style/skills.css'
import AngularImg from '../img/4x/angular.svg'
import JavaScriptImg from '../img/4x/js.svg'
import CssImg from '../img/4x/css-logo.svg'
import ReacImg from '../img/4x/react.svg'
import VueImg from '../img/4x/vue.svg'
import HtmlImg from '../img/4x/html-logo.svg'



function Skills() {

    return ( 
        <div id="Skills" className="container padding135 font-color">
            <div className="col-md-12 pt30 center">function Skills {'() {'}</div>
            <div className="col-md-12 margin-top80">Technologies with which I have worked in different projects</div>
            <div className="row row-cols-md-3 margin-top80 center">
                <div className="col-md-4 col-sd-12 paddingtop20"><img className="imgSkills" src= {HtmlImg} /></div>
                <div className="col-md-4 col-sd-12 paddingtop20"><img className="imgSkills" src= {AngularImg} /></div>
                <div className="col-md-4 col-sd-12 paddingtop20"><img className="imgSkills" src= {JavaScriptImg} /></div>
                <div className="col-md-4 col-sd-12 paddingtop20"><img className="imgSkills" src= {CssImg} /></div>
                <div className="col-md-4 col-sd-12 paddingtop20"><img className="imgSkills" src= {ReacImg} /></div>
                <div className="col-md-4 col-sd-12 paddingtop20"><img className="imgSkills" src= {VueImg} /></div>
            </div>
                     
        </div>
     );

     

     
}


export default Skills;