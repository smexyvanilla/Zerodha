import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg'></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million zerodha clients contribute to over
                        15% of all retail order
                        volumes in India daily by trading and investing in:
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                        <ul>
                        <li>
                            <p>Futures and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                        </div>
                    
   

                    
                        <div className='col-6'>
                        <ul>
                        <li>
                            <p>Stcoks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutial funds</p>
                        </li>
                        <li>
                            <p>Bonds</p>
                        </li>
                    </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"90%"}}/>

                   
                </div>
            </div>
         </div>
     );
}

export default Awards;