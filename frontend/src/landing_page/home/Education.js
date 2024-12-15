import React from 'react';
function Education() {
    return ( 
        <div className='container mt-5'>
        <div className='row'>
        <div className='col-6'>
            <img src='media/images/education.svg' style={{width:'70'}}/>
            </div>
            <div className='col-6'>
                <h1 className='mb-3 fs-2'>Free and open market education</h1>
                <p>varsity,the largets online stock market education book in the world covering from basics to advanced trading.
                </p>
                <a href='' style={{textDecoration:'none'}}>Varsity<i class='fa fa-long-arrow-right'></i></a>
                <p className='mt-5'>Trading Q&A,most active trading and investment community in india for all market queries.
                </p>
                <a href='' style={{textDecoration:'none'}}>Trading Q&A.<i class='fa fa-long-arrow-right'></i></a>
            </div>
            
            
        </div>
    </div>
 );
     
}

export default Education;