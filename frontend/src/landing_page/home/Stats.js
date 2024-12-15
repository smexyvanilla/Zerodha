import React from 'react';
function Stats() {
    return ( 
        <div className='container'>
            <div className='row p-3'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>Thats why 1.3+ crore customers trust zerodha with 3.5+ lakh crores worth of equity investments</p>
                    <h2 className='fs-4'>No spams or gimmicls</h2>
                    <p className='text-muted'>No gimicks,spams,'gammification',or annoying push ,notifation.High quality apps that you use at your pace,the way you like</p>
                    <h2 className='fs-4'>The zerodha universe</h2>
                    <p className='text-muted'>Not just an app,but a whole ecossytem .Our investments in 30+ fintech startup offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nidge and kill switch,we don't just facilate transcation but actively help you do better.</p>

                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' style={{width:'90%'}}/>

                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:'none'}}>Explore our proucts <i class='fa fa-long-arrow-right'></i></a>
                        <a href='' style={{textDecoration:'none'}}>Try kite <i class='fa fa-long-arrow-right'></i></a>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;