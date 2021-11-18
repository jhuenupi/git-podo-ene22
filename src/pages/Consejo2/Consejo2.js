import React, { Component } from 'react'
import imgConsejo from "../../images/HomePage/Consejos/consejo2_apoyo2.jpg"

export default class Consejo2 extends Component {
    render() {
        return (
            <div className="container">    
            <h1 className="text-center" style={{paddingTop: "0%"}}>

            </h1>
            <div class="valign-wrapper">
              
            <div class="hide-on-small-only">

              <div className="row center">
                <img class="materialboxed" width="80%" src={imgConsejo}/>
              </div>

            </div>
            </div>
          </div>
        )
    }
}
