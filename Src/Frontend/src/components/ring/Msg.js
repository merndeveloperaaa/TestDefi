import React from "react";
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import { StyledEngineProvider } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TokenChart from "../common/chart";
import Nodes from "./Nodes";
import RtChart from '../common/rt_chart'
import SwapList from "../common/SwapList";




class RingMsg extends React.Component {

    constructor(props) {
        super(props);
        this.handleConnect = this.handleConnect.bind(this);
        this.createNode = this.createNode.bind(this);
    }

    async handleConnect() {
        if (window.ethereum) {
            await window.ethereum.enable();
            this.props.dispatch({
                type: "CONNECT_WALLET"
            });
        } else {
            toast.info("Please install metamask on your device.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    createNode() {
        if (!this.props.can_perform) {
            toast.info("Please wait. Another transaction is running.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        this.props.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: false } });
        this.props.dispatch({
            type: "CREATE_NODE"
        });
    }



    render() {
        return (
            <>
                {/* <div id="launch_sm_connect_btn" className="flex">
                    <div>
                        {
                            !this.props.account ?
                                <div className="action-btn outline flex align-center justify-center fs-15" style={{ width: "90px", height: "40px" }} onClick={this.handleConnect}>
                                    <span><i className="fas fa-wallet"></i>

                                    </span>
                                </div>
                                :
                                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                    <div className="c-green connected-account-text">{this.props.account.slice(0, 8) + "..." + this.props.account.slice(34)}</div>
                                    <div className="connected-text">WALLET CONNECTED</div>
                                </div>
                        }
                    </div>
                </div> */}
                <section id="section-msg">
                    <div className="content mx-auto">
                        <div className="top-pattern">
                            <img src="img/top_nav.png" alt='top'></img>
                        </div>
                        <div className="bottom-pattern">
                            <img src="img/bottom_nav.png" alt='top'></img>
                        </div>
                        <div className="row m-t-60 mb-6 msg-content">
                            <div className="col-md-4 col-sm-6">
                                <div className="msg-content-item">
                                    <img src="img/nest-ex.png" alt=""></img>
                                    <div className="fs-32 c-app">My Nodes</div>
                                    <div className="fs-32 c-app"><span className="c-l-blue">{this.props.my_nodes.length}</span> / 100</div>
                                    <div className="fs-26 c-app">All nodes: {this.props.all_nodes}</div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="msg-content-item">
                                    <img src="img/reward.png" alt=""></img>
                                    <div className="fs-32 c-app">My Rewards</div>
                                    <div className="fs-32 c-app">{Number(this.props.cur_all_reward).toFixed(6)}</div>
                                    <div className="fs-26 c-app">PET</div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="msg-content-item" style={{ justifyContent: "center" }}>
                                    <img src="img/treasury.png" alt=""></img>
                                    <div className="fs-32 c-app">Treasury Balance</div>
                                    <div className="fs-26 c-l-blue">${this.props.treasury_balance ? String(this.props.treasury_balance).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 0}</div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="msg-content-item">
                                    <img src="img/daily.png" alt=""></img>
                                    <div className="fs-32 c-app">Daily Rewards</div>
                                    <div className="fs-32 c-l-blue">20,000 PET</div>
                                    <div className="fs-26 c-app">Per Node</div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="msg-content-item" style={{ justifyContent: 'center' }}>
                                    <ShoppingCartIcon  style={{fontSize: '90px'}}/>
                                    <div className="fs-32 c-app">Buy PET</div>
                                    <a id='buy_pet'>
                                        <StyledEngineProvider injectFirst>
                                            <SwapList />
                                        </StyledEngineProvider>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="msg-content-item" style={{ justifyContent: "center" }}>
                                    <img src="img/invest.png" alt=""></img>
                                    <div className="fs-32 c-app">Total Investments</div>
                                    <div className="fs-26 c-l-blue">$25,800</div>
                                </div>
                            </div>
                            {/* <div className="col-md-12">
                                <div className="token_chart flex justify-center">
                                    <RtChart></RtChart>
                                    <div className="c-w fs-20">{this.props.fire_value}</div>
                                    <TokenChart></TokenChart>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return { dispatch };
}

const mapStateToProps = state => {
    return {
        account: state.account,
        my_nodes: state.my_nodes,
        cur_all_reward: state.cur_all_reward,
        all_nodes: state.all_nodes,
        can_perform: state.can_perform,
        treasury_balance: state.treasury_balance,
        fire_value: state.fire_value
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(RingMsg);