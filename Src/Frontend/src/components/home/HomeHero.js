import { connect } from 'react-redux';

const HomeHero = (props) => {
  return (
    <>
      <section id="section-hero" className="pos-rel">
        <div className="content mx-auto">
          <div className="top-pattern">
            <img src="img/top_nav.png" alt='top'></img>
          </div>
          <div className="bottom-pattern">
            <img src="img/bottom_nav.png" alt='top'></img>
          </div>
          <img className="rect-pattern mobile-hidden" src="img/rect.png" alt='top'></img>
          <div className="hero-left">
            <div className="title">
              <div className="title-main c-w noto-bold">
                Peace Community Capital
              </div>
              <div className="title-sub">
                large-scale, high yield return investments
              </div>
              <div className="title-button">
                <button className="btn deaction-btn create-nest-btn btn-middle" onClick={() => { window.location.href = "/app" }}>
                  <div className="fs-18">
                    Create node
                  </div>
                </button>
                <button className="btn white-btn btn-middle" onClick={() => { window.open("https://www.hotbit.io/exchange?symbol=PEACE_USDT") }}>
                  <div className="fs-18">
                    Buy PET
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className='hero-right'></div>
        </div>
        <div className="statistics">
          <div className="stat_panel" >
            <div className="content">
              <span className="flex flex-col align-center statistics-item1">
                <div className=" statistics-item1-title">
                  Treasury Balance
                </div>
                <div className="c-w fs-30">
                  ${String(props.treasury_balance).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
              </span>
              <span className="flex flex-col align-center statistics-item2">
                <div className="statistics-item2-title">
                  Current Total investment
                </div>
                <div className="c-w fs-30">
                  $25,800
                </div>
              </span>
              <span className="flex flex-col align-center statistics-item3">
                <div className="statistics-item3-title">
                  Number of nodes
                </div>
                <div className="c-w fs-30">
                  {String(props.all_nodes).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = state => {
  return {
    all_nodes: state.all_nodes,
    treasury_balance: state.treasury_balance
  };
}

export default connect(mapStateToProps)(HomeHero);