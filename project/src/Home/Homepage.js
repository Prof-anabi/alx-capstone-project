import React, { Component } from 'react';
import Home from './Home';
import About from '../About/About';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Porfolio';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';
import Data from '../Utils/Data'; 
import '../App.css'

class Homepage extends Component {
  state = {
    data: Data
  }

  render() {
    return (
      <div className='.App'>
        
        <Home />
        <About/>
        <Services data={this.state.data}/>
        <Portfolio data={this.state.data}/>
        <Testimonial data={this.state.data}/>
        <Contact />
        
      </div>
    );
  }
}

export default Homepage;
