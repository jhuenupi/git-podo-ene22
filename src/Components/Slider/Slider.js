import React, { Component } from 'react';
import M from "materialize-css";
//import { M } from '../../../node_modules/materialize-css/dist/js/materialize.min.js'
// '../../modules/materialize-css/dist/js/materialize.min.js';

export default class Slider extends Component {
  componentDidMount() {
   var elem = document.querySelector('.carousel');
   var instance = M.Carousel.init(elem, { duration: 200, fullWidth: false,
    indicators: true});
 }
render() {
 return (
     <>
        <div className="carousel carousel-slider">
            <a className="carousel-item" href="#one!">
                <img src="../../images/high-angle-of-footprint-in-the-sand-at-the-beach.jpg"></img></a>
        </div>
    </>
  );
 }
}