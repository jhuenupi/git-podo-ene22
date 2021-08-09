import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';
import Slider2 from './Components/Slider2/Slider2';
import Sections from './Components/Sections/Sections';
import Carousel from './Components/Carousel/Carousel';
import HeroSlider from './Components/HeroSlider/HeroSlider';
import Bloguno from './pages/BlogUno/Bloguno';
import Blogdos from './pages/Blogdos/Blogdos';
import Blogtres from './pages/Blogtres/Blogtres';
import Blogcuatro from './pages/Blogcuatro/Blogcuatro'
import Consejo1 from './pages/Consejo1/Consejo1'
import Consejo2 from './pages/Consejo2/Consejo2'
import Consejo3 from './pages/Consejo3/Consejo3'

import './index.css'

const App = () => {
    
  return (
    
   <Router>
    <Navbar/> 
    <HeroSlider></HeroSlider>   

    <main>
      <Switch>
        <Route path="/" exact>
          <Card/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/service" exact>
          <Services/>
        </Route>
        <Route path="/testimonial" exact>
          <Testimonial/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/bloguno" exact>
          <Bloguno/>
        </Route>
        <Route path="/blogdos" exact>
          <Blogdos/>
        </Route>
        <Route path="/blogtres" exact>
          <Blogtres/>
        </Route>
        <Route path="/blogcuatro" exact>
          <Blogcuatro/>
        </Route>
        <Route path="/consejo1" exact>
          <Consejo1/>
        </Route>   
        <Route path="/consejo2" exact>
          <Consejo2/>
        </Route>   
        <Route path="/consejo3" exact>
          <Consejo3/>
        </Route>                                      
        <Redirect to="/" />
      </Switch>
    </main>

    <Footer/>    
   </Router>
  );
}

export default App;
