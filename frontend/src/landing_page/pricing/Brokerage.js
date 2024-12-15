import React from "react";
function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3>Brokerage calculator</h3>
            <ul className='text-muted' style={{textAlign:'left',lineHeight:'2.3'}}>
                <li>India's largest stockbroker platform.</li>
                <li>Offers low-cost trading solutions.</li>
                <li>Pioneer in discount brokerage services.</li>
                <li>User-friendly trading interface, Kite.</li>
                <li>Focuses on education through Varsity.</li>
                <li>No hidden charges, transparent pricing.</li>
            </ul>
          </a>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3>List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
