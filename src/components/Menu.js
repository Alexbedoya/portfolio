import React from "react";
import '../style/menu.css'

function Menu() {

    return ( 
        
        <div className="container container-menu white">
            <div className="row">
                <div className="col-md col-sm-4"><a href="#Home">Home</a></div>
                <div className="col-md col-sm-4"><a href="#About_me">About Me</a></div>
                <div className="col-md col-sm-4"><a href='#Skills'>Skills</a></div>
                <div className="col-md col-sm-4"><a href='#Experience'>Experience</a></div>
                <div className="col-md col-sm-4"><a href='#Portfolio'>Portfolio</a></div>
            </div>
            <div className="row line-menu"></div>
        </div> 
        
    );
}

export default Menu;