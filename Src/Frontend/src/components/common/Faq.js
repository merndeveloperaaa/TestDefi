import React from "react";

class Faq extends React.Component {

    constructor() {
        super();
        this.state = { selId: -1 };
    }
    clickItem(index) {
        if (this.state.selId === index) {
            this.setState({ selId: -1 });
        } else {
            this.setState({ selId: index });
        }
    }

    render() {
        return (
            <section id="section-faq" className="mx-auto">
                <div className="faq-title">
                    <span>Frequently Asked Questions</span>
                </div>
                <div id="faq-content">
                    <button className={this.state.selId === 1 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(1) }} >What is the PET token ?</button>
                    <div className="panel" >
                        <p data-nsfw-filter-status="swf">
                        Peace token is a experiment in Decentralised Finance with a goal to make amateur investors<br />
                        financially independent.
                        </p>
                    </div>

                    <button className={this.state.selId === 2 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(2) }}>How do I get rewarded ?</button>
                    <div className="panel" >
                        <p data-nsfw-filter-status="swf">
                            PET uses a simple mechanism to redistribute the yield while<br />
                            supporting the growth of the project. The reward rate has been balanced for maximum<br />
                            sustainability. You can create a Peace Node with 1,000,000 PET tokens. Once your Node is<br />
                            created, it will generate rewards on an ongoing basis.
                        </p>
                    </div>

                    <button className={this.state.selId === 3 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(3) }}>
                        What happens to the 1,000,000 PET used to create a Peace Node ?
                    </button>
                    <div className="panel" >
                        <p data-nsfw-filter-status="swf">
                            When a Peace Node is created, 700,000 PET are transferred to the rewards pool,<br />
                            300,000 PET are transferred to the treasury wallet to be used for investments and future liquidity pool.
                        </p>
                    </div>

                    <button className={this.state.selId === 4 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(4) }}>
                        How are investments chosen ?
                    </button>
                    <div className="panel" >
                        <p data-nsfw-filter-status="swf">
                            Peace Finance represent the idea of DeFi as a Service (DaaS), and<br />
                            as such, investments are decided by the Peace Finance investment advisors. The community will<br />
                            kept aware of the investments, and we welcome investment suggestions on our Discord server,<br />
                            however, investments will be decided ultimately by the Peace Finance team for the betterment<br />
                            of the project and sustainability of the investments. We will display an investment<br />
                            ledger for the community to see what is invested, when it was invested, and the return on<br />
                            investment status.

                        </p>
                    </div>

                    <button className={this.state.selId === 5 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(5) }}>
                        Why is PET on the Binance Chain?
                    </button>
                    <div className="panel" >
                        <p data-nsfw-filter-status="swf">
                            Our goal is to bring DeFi into the average household. Ethereum's<br />
                            high gas fees make it impossible for most people to access the<br />
                            Ethereum network.<br />
                            <br />
                            We want PET to be<span className="c-purple" data-nsfw-filter-status="swf"> accessible to everyone</span>, including<br />
                            smallholders, so we chose to be on the Binance Chain. However,<br />
                            this does not prevent us from taking advantage of DeFi yield<br />
                            protocols on Ethereum.
                        </p>
                    </div>

                    <button className={this.state.selId === 6 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(6) }}>
                        What is a Peace Node ?
                    </button>
                    <div className="panel" >
                        <p data-nsfw-filter-status="swf">
                            A Node is a term used to describe an initial deposit holding. When<br />
                            you create a Node, you are depositing funds to the treasury to be used for the project's<br />
                            investments.
                        </p>
                    </div>

                    <button className={this.state.selId === 7 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(7) }}>
                        Where can I buy $PET and where can I create my NODE ?
                    </button>
                    <div className="panel" >
                        <p data-nsfw-filter-status="swf">You can easily buy PET. <br/>
                        <a href="https://www.hotbit.io/exchange?symbol=PEACE_USDT" className="c-purple" data-nsfw-filter-status="swf" style={{ textDecoration: "none" }}>https://www.hotbit.io/exchange?symbol=PEACE_USDT</a><br/>
                        <a href="https://p2pb2b.io/trade/PET_USDT/" className="c-purple" data-nsfw-filter-status="swf" style={{ textDecoration: "none" }}>https://p2pb2b.io/trade/PET_USDT/</a><br/>
                        <a href="https://www.cointiger.com/en-us/#/trade_center?coin=pet_usdt" className="c-purple" data-nsfw-filter-status="swf" style={{ textDecoration: "none" }}>https://www.cointiger.com/en-us/#/trade_center?coin=pet_usdt</a><br/>
                        <a href="https://coinsbit.io/trade_classic/PET_USDT" className="c-purple" data-nsfw-filter-status="swf" style={{ textDecoration: "none" }}>https://coinsbit.io/trade_classic/PET_USDT</a><br/>
                        <a href="https://www.koinbazar.com/trade/PET-USDT" className="c-purple" data-nsfw-filter-status="swf" style={{ textDecoration: "none" }}>https://www.koinbazar.com/trade/PET-USDT</a><br/>
                        <a href="https://m.indoex.io/orderbookmobile/PET_USDT" className="c-purple" data-nsfw-filter-status="swf" style={{ textDecoration: "none" }}>https://m.indoex.io/orderbookmobile/PET_USDT</a><br/>
                        <a href="https://m.indoex.io/orderbookmobile/PET_BNB" className="c-purple" data-nsfw-filter-status="swf" style={{ textDecoration: "none" }}>https://m.indoex.io/orderbookmobile/PET_BNB</a><br/>
                            The contract address of the PET token is :<br />
                            <b>0x9CA00f0B5562914bcD84Ca6e0132CaE295cc84B7</b><br />
                            You can create your PET-NODEs and collect your PET rewards on our web app: peaceworld.finance/app. <br/>
                            <a href="/app" className="c-purple" data-nsfw-filter-status="swf"
                                style={{ textDecoration: "none" }}> Click here </a>to go to the web app.</p>
                    </div>
                </div >
            </section >
        )
    }
}

export default Faq;