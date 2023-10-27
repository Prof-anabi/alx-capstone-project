import React, { Component } from 'react';

import Navbar from './Header/Navbar'
import Data from './Data';
import About from './About/About';
import Services from './Services/Services';
import Portfolio from './Portfolio/Porfolio';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Homepage';


class App extends Component {
  state = {
    data: Data
  }

  render() {
    return (
      <div>
        
        <Router>
        <Navbar />
        
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services data={this.state.data} />} />
                <Route path='/projects' element={<Portfolio data={this.state.data}/>} />
                <Route path='/testimonials' element={<Testimonial data={this.state.data}/>} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
        <Footer />
      </div>
    );
    
  }

  }


export default App;
