import { connect } from "react-redux";
import React from 'react'


class HomeStart extends React.Component {

  constructor(props) {
    super(props);
    this.goAppPage = this.goAppPage.bind(this);
  }

  goAppPage() {
    window.open("/app");
  }
  render() {
    return (
      <>
        <section id="section-started">
          < div id="started-content" className="container mx-auto" >
            <div className="lifetime-title">
              <div className="lifetime-title-main">
                Start Earning Rewards
              </div>
              <button className="action-btn btn mobile-hidden" onClick={this.goAppPage}>Try it<i className="fas fa-arrow-right"></i></button>
            </div>

            <div className="flex justify-between card-action-container">
              <div className="card-action">
                <div className="card-title c-w fs-20">
                  <img src="img/reward1.png" width={70} alt=""></img>
                  <h3>Buy PET</h3>
                </div>
                <p data-nsfw-filter-status="swf" className="c-purple">
                  $PET is available on the
                  Binance Network. You can swap USDT for $PET in listed exchanges.
                </p>
              </div>
              <div className="card-action">
                <div className="card-title c-w fs-20">
                  <img src="img/reward2.png" width={70} alt=""></img>
                  <h3>Build node</h3>
                </div>
                <p data-nsfw-filter-status="swf" className="c-purple">
                  A PEACEWORLD-NODE costs only 1,000,000 $PET plus a minimal $10 NODE price.
                </p>
              </div>
              <div className="card-action">
                <div className="card-title c-w fs-20">
                  <img src="img/reward3.png" width={70} alt=""></img>
                  <h3>Enjoy rewards</h3>
                </div>
                <p data-nsfw-filter-status="swf">
                  You can create up to 100 PEACEWORLD Nodes per wallet. Claim accrued rewards at your convenience.
                </p>
              </div>
              <button className="action-btn btn mobile-show m-t-40" onClick={this.goAppPage}>Try it</button>
            </div>
          </div>
        </section>
        <section id="chip-vision">
          <div className="chips-container">
            <div id="chips-header">Peace Community Capital Member Benefits</div>
            <div className="chips">
              <div className=" chip">
                <img alt="" className="m-r-20" src="/img/icon1.png" />
                Lowered Risk
              </div>
              <div className=" chip">
                <img alt="" className="m-r-20" src="/img/icon2.png" />
                Less Fees
              </div>
              <div className=" chip">
                <img alt="" className="m-r-20" src="/img/icon3.png" />
                Less Hassle
              </div>
              <div className=" chip">
                <img alt="" className="m-r-20" src="/img/icon4.png" />
                Less Research
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

export default connect(mapStateToProps)(HomeStart);