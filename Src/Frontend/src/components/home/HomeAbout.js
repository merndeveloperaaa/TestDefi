import React from 'react';

class HomeAbout extends React.Component {
    render() {
        return (
            <>
                <section id="section-nest">
                    <div className="content mx-auto">
                        <div className="nest-left">
                            <div className="nest-left-about">
                                <span style={{color: '#04B0FA'}}>About us</span>
                            </div>
                            <div className="nest-left-content">
                                <span>How does your wealth grow?</span>
                            </div>
                            <div className="m-t-30 m-b-30 nest-left-content">
                                Peace world DAO is the part of utility created for peaced tokens .Investors can utilise the peace tokens to buy nodes which deliver 20,000 tokens per day. Each can hold upto 100 nodes.
                            </div>
                            {/* <div className="mobile-show w-full flex justify-center">
                                <div className="nest-right mx-auto"></div>
                            </div> */}
                            <button className="btn action-btn">Learn more<i className="fas fa-arrow-right"></i></button>
                        </div>
                        <div className="nest-right mobile-hidden"></div>
                        <div className="nest-video-right mobile-hidden"></div>
                    </div>
                </section>
            </>
        );
    }
}

export default HomeAbout;
