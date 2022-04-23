import React from "react";
import '../style/whoiam.css'

function WhoIAm() {
    return ( 
        <div id="Home" className="container font-color margin-top120">
            <div className="row">
                <div className="col pt60 math">Hi I am!</div>
            </div>
            <div className="row margin-top80">
                <div className="col offset-md-2 pt60 text-aling-center cursiva"> {'<'} Ricardo A. Bedoya {'>'} </div>
            </div>
            <div className="row">
                <div className="col offset-md-2 pt60 text-aling-center math">Web Developer</div>
            </div>
            <div className="row margin-top120">
                <div className="col pt30">Welcome to my curriculum {'>>'}</div>
            </div>
        </div>
     );
}

export default WhoIAm;