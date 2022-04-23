import React from "react";
import '../style/footer.css'

import InstragramIcon from '../img/icon/1x/instagram.png'
import LinkedinImg from '../img/icon/1x/linkedin.png'
import GithubImg from '../img/icon/1x/github.png'
import CopyRight from '../img/icon/1x/CopyRight.png'

function Footer() {
    return ( 
        <div className="shapeFooter  baground-gradiend">
             <div className="container paddingtop140 ">
                    <div className="row footer">
                        
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col pt30">Follow Me</div> 
                            </div>
                            <div className="row center">
                                <div className="col-sm-12 col-md-4 paddingtop20">
                                    <a href="https://www.instagram.com/alexbedoya30/" target="_blank">
                                        <img className="socialmedia" src={InstragramIcon}></img></a>
                                </div>
                                <div className="col-sm-12 col-md-4 paddingtop20">
                                    <a href="https://www.linkedin.com/in/ricardo-alexis-bedoya-valencia-0896b6ba/" target="_blank">
                                        <img className="socialmedia" src={LinkedinImg}></img></a>
                                </div>
                                <div className="col-sm-12 col-md-4 paddingtop20">
                                    <a href="https://github.com/Alexbedoya" target="_blank">
                                        <img className="socialmedia" src={GithubImg}></img></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-5 right footer">
                            <div className="row">
                                <div className="col pt30 borderleft">Contact Me</div>
                            </div>
                            <div className="row">
                                <div className="col borderleft">Email:  
                                <a href="mailto: alex.bedoyav@gmail.com" className="mail">  alex.bedoyav@gmail.com</a></div>
                            </div>
                            <div className="row">
                                <div className="col borderleft"><img className="copyrigth" src={CopyRight}></img></div>
                            </div>
                        </div>
                        
                    </div>
            </div>

        </div>
     );
}

export default Footer;