import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="support-hero">
      <div className="p-3" id="supportWrapper">
        <h5>Support portal</h5>
        <a href="">Track tickets</a>
      </div>
      <div className="row p-3 m-3">
        <div className="col-6 p-3">
            <h1 className="fs-3">Search for an answer </h1>
            <input placeholder="Eg. How do I activate F&O"/><br></br>
            <a href="">Track your openings</a><br></br>
            <a href="">Track segment activation</a><br></br>
            <a href="">Intraday margins</a><br></br>
            <a href="">Kite user manual</a>

        </div>
        <div className="col-6 p-3 ">
            <h1 className="fs-3">Featured</h1>
            <ol>
                <li><a href="">Current Takeovers and Delisting-January 2024</a></li>
                <li><a href="">Latest Intraday leverages-MIS & CO</a></li>
            
            
            </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
