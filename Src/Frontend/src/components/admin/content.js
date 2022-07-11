import React from "react";
import { create } from 'ipfs-http-client'
import Web3 from "web3";
import config from "../../contract/config";
import { connect } from 'react-redux';


const client = create('https://ipfs.infura.io:5001/api/v0');

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            master_nft_url: props.master_nft_url,
            grand_nft_url: props.grand_nft_url,
            claim_fee: 0,
            maintenance_fee: 0,
            pet_price: 0,
            node_price: 0,
            max_prenode_count: 0,
            ownUpdate: false,
            whitelist: '',
            isWhitelist: false
        }

        this.onSelectFile = this.onSelectFile.bind(this);
        this.setContractStatus = this.setContractStatus.bind(this);
        this.changeOwnerShip = this.changeOwnerShip.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);

        this.props.dispatch({ type: "GET_ADMIN_PRICE" });
        // this.handleConnect = this.handleConnect.bind(this);
    }

    // async handleConnect() {
    //     await window.ethereum.enable();
    //     this.props.dispatch({
    //         type: "CONNECT_WALLET"
    //     });
    // }

    static getDerivedStateFromProps(props, state) {
        var ret = {
            master_nft_url: props.master_nft_url,
            grand_nft_url: props.grand_nft_url
        }
        if (!state.ownUpdate) {
            ret.pet_price = props.pet_price;
            ret.claim_fee = props.claim_fee;
            ret.maintenance_fee = props.maintenance_fee;
            ret.node_price = props.node_price;
            ret.max_prenode_count = props.max_prenode_count;
            ret.whitelist = props.whitelist;
            ret.isWhitelist = props.isWhitelist;
        } else {
            ret.ownUpdate = false;
        }
        return ret;
    }


    async onSelectFile(event, type) {
        const file = event.target.files[0]
        try {
            const added = await client.add(file)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            // const tokenObject = {
            //     tokenName: "Fire NFT",
            //     tokenSymbol: "Fire",
            //     metaData: {
            //         type: type,
            //         hash: url,
            //     },
            // };
            // const cid = await client.add(JSON.stringify(tokenObject));
            // let tokenURI = `https://ipfs.infura.io/ipfs/${cid.path}`;

            let temp_url = {};
            temp_url[type + "_nft_url"] = url;
            this.setState(temp_url);
            this.props.dispatch({
                type: "SET_NFT_URL",
                payload: {
                    type: type,
                    url: url
                }
            });
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }
    setPresaleStatus(param) {
        this.props.dispatch({
            type: "SET_PRESALE_STATUS",
            payload: { param: param }
        });
    }
    setContractStatus(param) {
        this.props.dispatch({
            type: "SET_CONTRACT_STATUS",
            payload: { param: param }
        });
    }
    setClaimStatus(param) {
        this.props.dispatch({
            type: "SET_CLAIM_STATUS",
            payload: { param: param }
        });
    }

    changeOwnerShip() {
        this.props.dispatch({
            type: "CHANGE_REWARD_OWNER"
        })
    }


    onChangeValue(event, type) {
        var value = event.target.value;
        if (type === "claim_fee") {
            this.setState({ claim_fee: value, ownUpdate: true });
        } else if (type == "maintenance_fee") {
            this.setState({ maintenance_fee: value, ownUpdate: true });
        } else if (type == "node_price") {
            this.setState({ node_price: value, ownUpdate: true });
        } else if (type === "pet_price") {
            this.setState({ pet_price: value, ownUpdate: true });
        } else if (type === "max_prenode_count") {
            this.setState({ max_prenode_count: value, ownUpdate: true });
        } else if (type === "whitelist") {
            this.setState({ whitelist: value, ownUpdate: true });
        } else if (type === "isWhitelist") {
            this.setState({ isWhitelist: value, ownUpdate: true });
        }
    }

    setValue(type) {

        if (type === "claim_fee") {
            this.props.dispatch({ type: "SET_PRICE_VALUE", payload: { type: type, value: this.state.claim_fee } });
        } else if (type == "maintenance_fee") {
            this.props.dispatch({ type: "SET_PRICE_VALUE", payload: { type: type, value: this.state.maintenance_fee } });
        } else if (type == "node_price") {
            this.props.dispatch({ type: "SET_PRICE_VALUE", payload: { type: type, value: this.state.node_price } });
        } else if (type === "pet_price") {
            this.props.dispatch({ type: "SET_PRICE_VALUE", payload: { type: type, value: this.state.pet_price } });
        } else if (type === "max_prenode_count") {
            this.props.dispatch({ type: "SET_PRICE_VALUE", payload: { type: type, value: this.state.max_prenode_count } });
        } else if (type == "whitelist") {
            this.props.dispatch({ type: "SET_PRICE_VALUE", payload: { type: type, value: 'this.state.whitelist' } });
        } else if (type == "isWhitelist") {
            this.props.dispatch({ type: "SET_PRICE_VALUE", payload: { type: type, value: this.state.isWhitelist } });
        }
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
                <section id="section-started" className="admin c-w flex flex-col align-center" style={{ height: "1200px", padding: "30px" }}>
                    <h2 className="c-app">Setting All Infos</h2>
                    <span className="subtitle c-app" data-nsfw-filter-status="swf"> Only owners can change Data.</span>

                    <div id="admin-started-content" className="flex mx-auto m-t-40 mb-3 started-content-admin" style={{ justifyContent: "space-around" }}>
                        <div className="card-action admin-card">
                            <div className="c-app fs-30" style={{ marginTop: "10px" }}>Regional</div>
                            <img alt="" className="card-img" style={{ height: "250px", width: "250px", marginTop: "20px", marginBottom: "20px" }} src="/img/nft_1.png"></img>
                            {/* <a className="breath border-purple" data-nsfw-filter-status="swf" style={{ position: "relative" }}>
                                Create & Change
                                <input type="file" style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", opacity: "0" }} onChange={(event) => this.onSelectFile(event, "master")} />
                            </a> */}
                        </div>
                        <div className="card-action admin-card">
                            <div className="c-app fs-30" style={{ marginTop: "10px" }}>World</div>
                            <img alt="" className="card-img" style={{ height: "250px", width: "250px", marginTop: "20px", marginBottom: "20px" }} src="img/nft_2.png"></img>
                            {/* <a className="breath border-pink" data-nsfw-filter-status="swf" style={{ position: "relative" }}>
                                Create & Change
                                <input type="file" style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", opacity: "0" }} onChange={(event) => this.onSelectFile(event, "grand")} />
                            </a> */}
                        </div>
                    </div>

                    <div className="mb-1" style={{ display: "flex", justifyContent: "center" }}>
                        {
                            this.props.presale_status == 0 ?
                                <button className="btn action-btn outline" onClick={this.setPresaleStatus.bind(this, 1)}>Start Presale</button> :
                                <button className="btn action-btn" onClick={this.setPresaleStatus.bind(this, 0)}>Stop Presale</button>
                        }
                    </div>

                    <div className="mb-1" style={{ display: "flex", justifyContent: "center" }}>
                        {
                            this.props.contract_status == 0 ?
                                <button className="btn action-btn" onClick={this.setContractStatus.bind(this, 1)}>Stop Service</button> :
                                <button className="btn action-btn outline" onClick={this.setContractStatus.bind(this, 0)}>Start Service</button>
                        }
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {
                            this.props.claim_status == 0 ?
                                <button className="btn action-btn" onClick={this.setClaimStatus.bind(this, 1)}>Stop Claim</button> :
                                <button className="btn action-btn outline" onClick={this.setClaimStatus.bind(this, 0)}>Start Claim</button>
                        }
                    </div>
                    <div className="m-t-40">
                        <div className="admin-input-item">
                            <label className="admin-input-label">MAX Presale Node Count: </label>
                            <div className="flex align-center">
                                <input type="number" className="form-contral admin-input-content" min={0} value={this.state.max_prenode_count}
                                    onChange={(event) => { this.onChangeValue(event, "max_prenode_count") }} />
                                <button className="btn action-btn admin-setting-btn mx-3" onClick={() => { this.setValue("max_prenode_count") }}>SET</button>
                            </div>
                        </div>
                        <div className="admin-input-item">
                            <label className="admin-input-label">Claim Fee (BNB): </label>
                            <div className="flex align-center">
                                <input type="number" className="form-contral admin-input-content" min={0} value={this.state.claim_fee}
                                    onChange={(event) => { this.onChangeValue(event, "claim_fee") }} />
                                <button className="btn action-btn admin-setting-btn mx-3" onClick={() => { this.setValue("claim_fee") }}>SET</button>
                            </div>
                        </div>
                        <div className="admin-input-item">
                            <label className="admin-input-label">Maintenance Fee (BNB): </label>
                            <div className="flex align-center">
                                <input type="number" className="form-contral admin-input-content" min={0} value={this.state.maintenance_fee}
                                    onChange={(event) => { this.onChangeValue(event, "maintenance_fee") }} />
                                <button className="btn action-btn admin-setting-btn mx-3" onClick={() => { this.setValue("maintenance_fee") }}>SET</button>
                            </div>
                        </div>
                        <div className="admin-input-item">
                            <label className="admin-input-label">Default NFT price (BNB): </label>
                            <div className="flex align-center">
                                <input type="number" className="form-contral admin-input-content" min={0} value={this.state.pet_price}
                                    onChange={(event) => { this.onChangeValue(event, "pet_price") }}
                                />
                                <button className="btn action-btn admin-setting-btn mx-3" onClick={() => { this.setValue("pet_price") }}>SET</button>
                            </div>
                        </div>
                        <div className="admin-input-item">
                            <label className="admin-input-label">PET Per Nodes: </label>
                            <div className="flex align-center">
                                <input type="number" className="form-contral admin-input-content" min={0} value={this.state.node_price}
                                    onChange={(event) => { this.onChangeValue(event, "node_price") }}
                                />
                                <button className="btn action-btn admin-setting-btn mx-3" onClick={() => { this.setValue("node_price") }}>SET</button>
                            </div>
                        </div>
                        <div className="admin-input-item">
                            <label className="admin-input-label">Whitelist: </label>
                            <div className="flex align-center">
                                <input type="text" className="form-contral admin-input-content" min={0} value={this.state.whitelist}
                                    onChange={(event) => { this.onChangeValue(event, "whitelist") }}
                                />
                                <button className="btn action-btn admin-setting-btn mx-3" onClick={() => { this.setValue("whitelist") }}>SET</button>
                            </div>
                        </div>
                        <div className="admin-input-item">
                            <label className="admin-input-label">isWhitelist: </label>
                            <div className="flex align-center">
                                <input type="text" className="form-contral admin-input-content" min={0} value={this.state.isWhitelist}
                                    onChange={(event) => { this.onChangeValue(event, "isWhitelist") }}
                                />
                                <button className="btn action-btn admin-setting-btn mx-3" onClick={() => { this.setValue("isWhitelist") }}>GET</button>
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
        master_nft_url: state.master_nft_url,
        grand_nft_url: state.grand_nft_url,
        pet_price: state.pet_price,
        maintenance_fee: state.maintenance_fee,
        claim_fee: state.claim_fee,
        max_prenode_count: state.max_prenode_count,
        node_price: state.node_price,
        contract_status: state.contract_status,
        claim_status: state.claim_status,
        presale_status: state.presale_status,
        whitelist: state.whitelist,
        isWhitelist: state.isWhitelist
    };
}

const mapDispatchToProps = dispatch => {
    return { dispatch }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content);