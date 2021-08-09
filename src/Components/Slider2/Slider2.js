import React, { Component } from 'react'
import M from "materialize-css";
//import '../../../node_modules/css/styles.css'
import './style.css'

export default class Slider2 extends Component {
    componentDidMount(){
        M.Sidenav.init(this.sidenav);
      }
      
    render() {
        return (
                
            <>

            <div id="index-banner" className="parallax-container">
            <div className="section no-pad-bot">
                {/* <div className="container left col">
                <br /><br />
                <h3 className="left teal-text text-lighten-2">Podologos Profesionales</h3>
                <div className="row left">
                    <h4 className="col s2 light">Encuentra el podologo mas cercano a tu domicilio</h4>
                </div>

                <br /><br />
                
                </div> */}
                <div className="row"></div>
                <div className="row"></div>
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card blue-grey darken-1 transparent">
                            <div class="card-content white-text">
                            <span class="card-title">Podologos Profesionales</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div class="card-action">
                                <a href="#">Ver mas...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">

                    </div>
                    <div className="col s12 m6">
                        
                    </div>                    
                </div>
                
            </div>                    
                    <div className="parallax" index><img src="../../images/background3.jpg" alt="Unsplashed background img 1" /></div>
            </div>                
            </>
        )
    }
}
