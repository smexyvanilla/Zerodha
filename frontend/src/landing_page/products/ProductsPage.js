import React from "react";
import Hero from "./Hero";
import Leftimage from "./Leftimage";
import Rightimage from "./Rightimage";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";
function PricingPage() {
  return (
    <>
      <Hero />
      <Leftimage
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra trading platform with straming market data,advanced charts,an elegant UI and more.Enjoy the kite
        experience seamlessly on your android and iOS devices"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />


      <Rightimage 
      imageURL="media/images/console.png"
      productName="Console"
      productDescription="The central dashboard for your Zerodha account.
      Gain insights into your trades and investment with in-depth reports and visualization."
     
      learnMore=""/>


      <Leftimage
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online,commision-free
        ,deliverable directly to your Demat account.Enjoy the investment experience on your
        android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />


      <Rightimage 
      imageURL="media/images/kiteconnect.png"
      productName="Kite Connect API"
      productDescription="Build powerful trading platforms and experience with our super 
        simple HTTP/JSON APIs."
      
      learnMore=""/>


      <Leftimage
        imageURL="media/images/varsity.png"
        productName="Varsity"
        productDescription="In easy to grasp,collection of stock market lessons with in depth
      coverage and illustration.Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />


     <p className="text-center mt-5 mb-5">Want to know about our technologu stack?Check out the Zerodha.tech blog.</p>


      <Universe />
    </>
  );
}

export default PricingPage;
