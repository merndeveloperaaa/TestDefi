import React from 'react';
import { connect } from 'react-redux';

class HomeVision extends React.Component {


    render() {
        return (
            <>
                <section id="section-vision">
                    <div id="vision-content" className="container mx-auto c-w">
                        <div className="title noto-bold">
                            Peace Community Capital Vision
                        </div>
                        <div className="subtitle" data-nsfw-filter-status="swf">
                            Completely incentivize high-payoff testing procedures rather than ethical schemas. Holisticly
                        </div>
                        <div className="vision-container">
                            <div className="vision-item">
                                <div className='vision-image'>
                                    <img src="img/vision1.png" alt=""></img>
                                </div>
                                <p className='vision-item-info mobile-hidden'>
                                    Peace Community Capital will take community recommendations combined with independent research, and qualify each protocal prior to investment, to spread risk across short, medium, and long term ROI.
                                </p>
                                <a href='/app' className='vision-button'>More details<i className="fas fa-arrow-right"></i></a>
                            </div>
                            <div className="vision-item mobile-hidden">
                                <div className='vision-next'>
                                    <span>{">>"}</span>
                                </div>
                            </div>
                            <div className="vision-item">
                                <div className='vision-image'>
                                    <img src="img/vision2.png" alt=""></img>
                                </div>
                                <p className='vision-item-info mobile-hidden'>
                                    Peace Community Capital exposes the community to a multitude of on‑chain and off‑chain physical investments, while reducing fees through consolidation.
                                </p>
                                <a href='/app' className='vision-button'>More details<i className="fas fa-arrow-right"></i></a>
                            </div>
                            <div className="vision-item mobile-hidden">
                                <div className='vision-next'>
                                    <span>{">>"}</span>
                                </div>
                            </div>
                            <div className="vision-item">
                                <div className='vision-image'>
                                    <img src="img/vision3.png" alt=""></img>
                                </div>
                                <p className='vision-item-info mobile-hidden'>
                                    Peace Community Capital allows our users to get maximum benefits with a few investment.
                                </p>
                                <a href='/app' className='vision-button'>More details<i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="section-nft">
                    <div className='nft-title'>
                        <div className='title noto-bold'>REGIONAL AND WORLD</div>
                        <div className="subtitle" data-nsfw-filter-status="swf">
                            NFTs are available for purchase upon certain milestones. Our NFTs boost your daily reward rate and increase your earning potential. For more information regarding out NFT's, please see our whitepaper.
                        </div>
                        <button className='nft-whitepaper' onClick={() => { window.open("/docs/PeaceWorldFinance.pdf") }}>See Whitepaper</button>
                    </div>
                    <div className='nft-content'>
                        <div className="row">
                            <div className="col-md-6 col-xm-12 nft-item nft-left-top-item mobile-hidden">
                                <div className='nft-card'>
                                    <img src="img/nft_1.png" alt="NFT" width={'300px'}></img>
                                </div>
                            </div>
                            <div className="col-md-6 col-xm-12 nft-item nft-right-top-item" style={{ background: "url('img/nft_card1.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                                <div className="nft-subcard">
                                    <h3 className='nft-item-title'>REGIONAL</h3>
                                    <div className="nft-item-info">The Regional NFT is available once you build at least 10 Nodes. The Regional NFT will be applied to 10 Nodes and boosts rewards by 2,500 for each day. Each wallet will be limited to a total of 10 Regional NFT’s.</div>
                                    <a href='/app' className='nft-item-details'>Details More<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="col-md-6 col-xm-12 nft-item nft-left-bottom-item" style={{ background: "url('img/nft_card2.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                                <div className='nft-subcard'>
                                    <h3 className='nft-item-title'>WORLD</h3>
                                    <div className="nft-item-info">The World Master NFT is available once you build all 100 Nodes. The World Master NFT boosts rewards by 4,000 for each Node per day. Each wallet will be limited to a total of one Grand Master NFT.</div>
                                    <a href='/app' className='nft-item-details'>Details More<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className='col-md-6 col-xm-12 nft-item nft-right-bottom-item mobile-hidden'>
                                <div className='nft-card'>
                                    <img src="img/nft_2.png" alt="" width={'300px'}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        grand_nft_url: state.grand_nft_url,
        master_nft_url: state.master_nft_url
    };
}

export default connect(mapStateToProps)(HomeVision);
