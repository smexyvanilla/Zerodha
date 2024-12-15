import React from "react";
function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p>
              &copy; 2010 - 2024,Not Zerodha Broking Ltd.All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>About</a>
            <br></br>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>Products</a>
            <br></br>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>Pricing</a>
            <br></br>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>Referal programs</a>
            <br></br>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>Creers</a>
            <br></br>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>Zerodha tech</a>
            <br></br>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>Press and media</a>
            <br></br>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>Zerodha cares(CSR)</a>
            <br></br>
          </div>
          <div className="col">
            <p>Support</p>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>Contact</a>
            <br></br>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>Support portal</a>
            <br></br>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>Z-connect blog</a>
            <br></br>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>List of charges</a>
            <br></br>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>Downloads and resources</a>
            <br></br>
          </div>
          <div className="col">
            <p>Account</p>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>Open an account</a>
            <br></br>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>Fund transfer</a>
            <br></br>
            <a href="" className="text-muted mb-5" style={{textDecoration:'none'}}>60 day challenge</a>
            <br></br>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            {" "}
            Zerodha, India's largest stock brokerage firm, has revolutionized
            the trading industry with its innovative technology and low-cost
            business model. Founded in 2010 by Nithin Kamath and Nikhil Kamath,
            the company aimed to simplify stock market participation for retail
            investors. Zerodha operates primarily as a discount broker, offering
            a flat fee structure for trades instead of the traditional
            percentage-based model. This pricing strategy has democratized
            access to financial markets, especially for young investors and
            traders, enabling them to save significantly on brokerage fees.
          </p>

          <p>
            The firm's flagship trading platform, Kite, is a user-friendly and
            feature-rich application that provides real-time market data,
            advanced charting tools, and seamless execution of
            trades.Furthermore, the company has consistently reinvested its
            profits into improving infrastructure and user experience rather
            than advertising, a strategy that has paid off well.
          </p>

          <p>
            Apart from its business operations, Zerodha has actively contributed
            to building a culture of financial literacy in India. Its
            educational initiatives, such as webinars, blogs, and the Varsity
            app, cater to both beginners and experienced traders.{" "}
          </p>

          <p>
            Zerodha’s success story is a testament to the power of innovation
            and customer focus in a traditionally conservative industry. Today,
            with over 12 million active clients, it processes millions of trades
            daily, making it one of the largest brokerage firms globally in
            terms of active retail investors. By staying true to its core values
            of simplicity, transparency, and affordability, Zerodha has not only
            disrupted the brokerage industry but also set a benchmark for others
            in the fintech ecosystem. Its journey continues to inspire countless
            startups aiming to bring transformative changes to their respective
            sectors.
          </p>
        </div>
        <div className="text-center mt-4">
        <a href='' className="mx-2" style={{textDecoration:'none'}}>NSE</a>
        <a href='' className="mx-2" style={{textDecoration:'none'}}>BSE</a>
        <a href='' className="mx-2" style={{textDecoration:'none'}}>MCX</a>
        <a href='' className="mx-2" style={{textDecoration:'none'}}>Terms & conditions</a>
        <a href='' className="mx-2" style={{textDecoration:'none'}}>Policies & procedure</a>
        <a href='' className="mx-2" style={{textDecoration:'none'}}>Privacy policy</a>
        <a href='' className="mx-2" style={{textDecoration:'none'}}>Disclosure</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
