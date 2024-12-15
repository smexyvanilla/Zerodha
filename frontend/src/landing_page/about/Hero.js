import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pionnered the discount broking model in India.
          <br />
          Now are breaking ground with our technology.
        </h1>
      </div>
      <div className="row p-5 mt-5 border-top text-muted"style={{lineHeight:'1.8',fontSize:'1.2em'}}>
        <div className="col-6 p-5">
          <p>
            We kick-started operations on the 15th of August,2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost,support and technology.We named the company Zerodha a
            combination of Zero and "Rodha", sanskrit word for barrier.
          </p>
          <p>
            Today,our disruptive pricing models and in house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ crore clients place millions of orders evryday through our
            powerful ecosystem of investment platforms, contributing over 15% of
            Indian retail trading volume.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition,we run a number of popular open online educational nad
            community initiatives to empower retail and investors.
          </p>
          <p>
            Rainmatter,our fintech fund and incubator,has invested in several
            fintech startups with the goal of growing the indain capital
            markets.
          </p>
          <p>
            And yet,we are always upto something new evryday. Catch up on the
            latest updates on our blog or social media is saying about us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
