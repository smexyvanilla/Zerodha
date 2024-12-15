import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-botton text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equality investments and flat 20% traday and F&O trades
        </h3>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-4 p-4 text-center">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">All equity investments(NSE,BSE),are absolutely free-0 brokerage.</p>
        </div>

        <div className="col-4 p-4 text-center">
          <img src="media/images/pricingEquity.svg" />
          <h1  className="fs-3">Intraday and F&O</h1>
          <p className="text-muted">Flat Rs.20 or 0.03% per executed order on intraday across equity,currency and commodity trades.</p>
        </div>

        <div className="col-4 p-4 text-center">
          <img src="media/images/intradayTrades.svg" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">All direct mutual funds are absolutely free.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
