import React from 'react';
import Hero from './Hero';
import Leftimage from './Leftimage';
import Rightimage from './Rightimage';
import Universe from './Universe';

import Navbar from '../Navbar';
import Footer from '../footer';
function PricingPage() {
    return (
        <>
        <Navbar/>
        <Hero/>
       <Leftimage/>
        <Rightimage/>
        <Universe/>
        <Footer/>
        </>
      );
}

export default PricingPage;