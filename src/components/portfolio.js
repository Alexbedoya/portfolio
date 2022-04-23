import React from "react";
import '../style/portfolio.css'
import CorantioquiaImg from '../img/PortfolioImg/corantioquia.jpg'
import CuentaAhorros from '../img/PortfolioImg/cuentas-de-ahorros.jpg'
import MapDeProcesos from '../img/PortfolioImg/mapa-de-procesos.jpg'

function Portfolio() {
    return (  
        <div>
            <div id="Portfolio" className="container black-background">
                <div className="row paddingtop150">
                    <div className="col-md-12 pt30">Class Porfolio {'(){'}</div>

                    <div className="row margin-top120">
                        <div className="col-md-6 margin-top20">
                            <img src={CorantioquiaImg} className='width100'></img>
                        </div>
                        <div className="col-md-6 margin-top20">
                            <img src={CuentaAhorros} className='width100'></img>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 margin-top20">
                            <img src={MapDeProcesos} className='width100'></img>
                        </div>
                        <div className="col-md-6 margin-top20">
                            <iframe className="width100 height100per" src="https://www.youtube.com/embed/k1GHflMVrCo" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
}

export default Portfolio;