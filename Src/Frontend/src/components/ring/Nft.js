

import React from "react";
import { connect } from 'react-redux';
import { toast } from 'react-toastify';



class Nft extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            selected_item: -1
        };
    }

    buyNft(type) {
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
        this.props.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perfrom: false } });
        this.props.dispatch({
            type: "BUY_NFT_ART",
            payload: {
                type: type
            }
        });
    }


    static getDerivedStateFromProps(props, state) {
        var count = 0;
        for (var index in props.my_nodes) {
            if (!props.my_nodes[index].masterNFT) {
                count++;
            }
        }
        var ret = {
            enableRegional: false,
            enableWorld: false
        }
        if (count >= 10) {
            ret.enableRegional = true;
        }

        if (count === 0 && props.my_nodes.length === 100 && !props.my_nodes[0].grandNFT) {
            ret.enableWorld = true;
        }
        return ret;
    }

    render() {
        const { pet_price } = this.props;
        return (

            <section id="section-app-nft">
                <div className="content mx-auto">
                    <div className="custom-container"
                        style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "fit-content", padding: "40px" }}>
                        <div className="create_title c-app fs-32">
                            Peace NFT Boosts
                        </div>
                        <p id="create-ring" className="c-app fs-24">Buy a Peace NFT to boost <span
                            className="c-l-blue noto-bold">$PET</span> token rewards.</p>
                        <div style={{ width: "100%" }}>
                            <div className="cards">
                                <div>
                                    <div className="card">
                                        <div className="card-img" style={{ backgroundImage: "url('img/nft_1.png')", backgroundSize: "contain" }}></div>
                                        <div className="card-item-title">
                                            <span className="text-center noto-bold">REGIONAL NFT</span>
                                        </div>
                                        <div className="card-item-price">
                                            {!isNaN(pet_price) ? pet_price : ''} BNB
                                        </div>
                                        <div className="card-item-info">
                                            The Regional NFT is available once you build over 10 Nodes. The Regional NFT will be applied to 10 Nodes and boosts rewards by 2,500 for each day. Each wallet will be limited to a total of 10 Regional NFT’s.
                                        </div>
                                        <button className="action-btn btn mx-auto w-full c-w buy_nft_btn m-t-20 fs-20"
                                        disabled={false} onClick={this.buyNft.bind(this, "master")}>Buy NFT</button>
                                    </div>
                                </div>
                                <div className="nft-margin-top">

                                    <div className="card">
                                        <div className="card-img" style={{ backgroundImage: "url('img/nft_2.png')", backgroundSize: "contain" }}></div>
                                        <div className="card-item-title">
                                            <span className="text-center noto-bold">WORLD NFT</span>
                                        </div>
                                        <div className="card-item-price">
                                            {!isNaN(pet_price) ? pet_price * 10 : ''} BNB
                                        </div>
                                        <div className="card-item-info">
                                            The World Regional NFT is available once you build all 100 NODES. The World Regional NFT boosts rewards by 4,000 for each Node per day. Each wallet will be limited to a total of one World Regional NFT.
                                        </div>
                                        <button className="action-btn btn mx-auto w-full c-w buy_nft_btn m-t-20 fs-20"
                                        disabled={false} onClick={this.buyNft.bind(this, "grand")}>Buy NFT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        grand_nft_url: state.grand_nft_url,
        master_nft_url: state.master_nft_url,
        pet_price: state.pet_price,
        can_perform: state.can_perform,
        my_nodes: state.my_nodes
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Nft);