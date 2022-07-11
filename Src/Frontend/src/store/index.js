import { createStore } from 'redux'
import Web3 from 'web3';
import config from '../contract/config';
import { toast } from 'react-toastify';


const _initialState = {
    price_usd: 0,
    price_bnb: 0,
    account: "",
    all_nodes: 0,
    my_nodes: [],
    my_nfts: [],
    grand_nft_url: "",
    master_nft_url: "",
    currentTime: 0,
    contract_status: 0,
    claim_status: 0,
    chainId: 0,
    can_perform: true,
    fire_value: 0
}

const init = (init) => {

    return init;
}

const provider = Web3.providers.HttpProvider(config.mainNetUrl);
const web3 = new Web3(Web3.givenProvider || provider);

const tokenContract = new web3.eth.Contract(config.FireAbi, config.FireToken);
const nftContract = new web3.eth.Contract(config.NFTAbi, config.FireNFT);
const rewardConatract = new web3.eth.Contract(config.RewardAbi, config.Reward);


const reducer = (state = init(_initialState), action) => {

    if (action.type === 'UPDATE_TOKEN_PRICE') {
        return Object.assign({}, state, {
            price_usd: action.payload.price_usd,
            price_bnb: action.payload.price_bnb
        })
    } else if (action.type === "UPDATE_CHAIN_ID") {
        return Object.assign({}, state, {
            chainId: action.payload.chainId
        });
    } else if (action.type === 'CONNECT_WALLET') {
        checkNetwork(state.chainId);
        web3.eth.getAccounts((err, accounts) => {
            store.dispatch({
                type: "GET_USER_INFO",
                payload: { account: accounts[0] }
            });
        })
    } else if (action.type === 'SET_PRESALE_STATUS') {
        if (!state.account) {
            connectAlert();
            return state;
        }

        rewardConatract.methods.setPresaleStatus(action.payload.param)
            .send({ from: state.account })
            .then(() => { updateGlobalInfo() })
            .catch(() => console.log);

    } else if (action.type === 'SET_CONTRACT_STATUS') {
        if (!state.account) {
            connectAlert();
            return state;
        }

        rewardConatract.methods.setContractStatus(action.payload.param)
            .send({ from: state.account })
            .then(() => { updateGlobalInfo() })
            .catch(() => console.log);

    } else if (action.type === 'SET_CLAIM_STATUS') {
        if (!state.account) {
            connectAlert();
            return state;
        }

        rewardConatract.methods.setClaimStatus(action.payload.param)
            .send({ from: state.account })
            .then(() => { updateGlobalInfo() })
            .catch(() => console.log);
    } else if (action.type === "SET_NFT_URL") {

        if (!state.account) {
            connectAlert();
            return state;
        }

        if (action.payload.type === "master") {
            nftContract.methods.setRegionalNFTURI(action.payload.url)
                .send({ from: state.account })
                .then(() => console.log)
                .catch(() => console.log);
        } else if (action.payload.type === "grand") {
            nftContract.methods.setWorldNFTURI(action.payload.url)
                .send({ from: state.account })
                .then(() => console.log)
                .catch(() => console.log);
        }
    } else if (action.type === "CLAIM_NODE") {
        if (!state.account) {
            connectAlert();
            return Object.assign({}, state, { can_perform: true });
        }
        rewardConatract.methods.getClaimFee().call()
            .then(function (claimFee) {
                if (action.payload.node_id !== -1) {
                    rewardConatract.methods.claimByNode(action.payload.node_id)
                        .send({ from: state.account, value: claimFee, gas: 400000 })
                        .then(() => {
                            store.dispatch({ type: "GET_USER_INFO", payload: { can_perform: true } });
                        }).catch(() => {
                            store.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: true } });
                        });
                } else if (action.payload.node_id === -1) {
                    rewardConatract.methods.claimAll()
                        .send({ from: state.account, value: claimFee * action.payload.cnt, gas: 1200000 })
                        .then(() => {
                            store.dispatch({ type: "GET_USER_INFO", payload: { can_perform: true } });
                        }).catch(() => {
                            store.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: true } });
                        });
                }
            })
            .catch(() => {
                store.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: true } });
            });

    } else if (action.type === "BUY_NFT_ART") {
        if (!state.account) {
            connectAlert();
            return Object.assign({}, state, { can_perform: true });
        }
        if (action.payload.type === "master") {
            rewardConatract.methods.getRegionalNFTPrice().call()
                .then((price) => {
                    rewardConatract.methods.buyNFT(0, 1)
                        .send({ from: state.account, value: price, gas: 400000 })
                        .then(() => {
                            store.dispatch({ type: "GET_USER_INFO", payload: { can_perform: true } });
                        }).catch(() => {
                            store.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: true } });
                        })
                }).catch(() => {
                    store.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: true } });
                })
        } else if (action.payload.type === "grand") {
            rewardConatract.methods.getWorldNFTPrice().call()
                .then((price) => {
                    rewardConatract.methods.buyNFT(1, 1)
                        .send({ from: state.account, value: price, gas: 400000 })
                        .then(() => {
                            store.dispatch({ type: "GET_USER_INFO", payload: { can_perform: true } });
                        }).catch(() => {
                            store.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: true } });
                        })
                }).catch(() => {
                    store.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: true } });
                })
        }

    } else if (action.type === "PAY_NODE_FEE") {
        rewardConatract.methods.getNodeMaintenanceFee().call()
            .then((threeFee) => {
                rewardConatract.methods.payNodeFee(Number(action.payload.node_id), action.payload.duration - 1)
                    .send({ from: state.account, value: action.payload.duration * threeFee, gas: 2100000 })
                    .then(() => {
                        store.dispatch({ type: "GET_USER_INFO", payload: { can_perform: true } });
                    }).catch(() => {
                        store.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: true } });
                    })
            }).catch(() => {
                store.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: true } });
            })
    } else if (action.type === "CREATE_NODE") {
        if (!state.account) {
            connectAlert();
            return Object.assign({}, state, { can_perform: true });
        }
        const create_count = action.payload.count;
        console.log('[Create Count] = ', create_count);
        const promise = [];
        promise.push(rewardConatract.methods.getNodePrice().call());
        promise.push(rewardConatract.methods.getNodeMaintenanceFee().call());
        Promise.all(promise).then((result) => {
            const Big_Ether = Number(web3.utils.fromWei(result[0], 'ether')) * create_count;
            tokenContract.methods.approve(config.Reward, web3.utils.toWei(Big_Ether.toString(), 'ether')).send({ from: state.account, gas: 210000 })
                .then((ret) => {
                    if (state.presale_status == 1) {
                        rewardConatract.methods.preBuyNode(create_count).send({ from: state.account, value: result[1] * create_count, gas: 2100000 })
                            .then(() => {
                                store.dispatch({ type: "GET_USER_INFO", payload: { can_perform: true } });
                            }).catch(() => {
                                store.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: true } });
                            });

                    }
                    else {
                        rewardConatract.methods.buyNode(create_count).send({ from: state.account, value: result[1] * create_count, gas: 2100000 })
                            .then(() => {
                                store.dispatch({ type: "GET_USER_INFO", payload: { can_perform: true } });
                            }).catch(() => {
                                store.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: true } });
                            });
                    }
                }).catch((ret) => {
                    store.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: true } });
                });
        }).catch(() => {
            store.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: true } });
        });

    } else if (action.type === "GET_USER_INFO") {

        let account = (action.payload && action.payload.account) ? action.payload.account : state.account;
        let can_perform = (action.payload && action.payload.can_perform) ? action.payload.can_perform : state.can_perform;

        let promise = [];
        promise.push(rewardConatract.methods.getNFTList(account).call());
        promise.push(rewardConatract.methods.getNodeList(account).call());
        promise.push(rewardConatract.methods.getRewardAmount(account).call());
        promise.push(nftContract.methods.getRegionalNFTURI().call());
        promise.push(nftContract.methods.getWorldNFTURI().call());
        promise.push(rewardConatract.methods.getTotalNodeCount().call());
        Promise.all(promise).then((result) => {
            const nodes = [];
            for (var index in result[1]) {
                nodes.push({
                    createTime: result[1][index].createTime,
                    lastTime: result[1][index].lastTime,
                    grandNFT: result[2].curWorldNFTEnable[index],
                    masterNFT: result[2].curRegionalNFTEnable[index],
                    reward: Number(web3.utils.fromWei(result[2].nodeRewards[index])).toFixed(9),

                });
            }
            store.dispatch({
                type: "RETURN_DATA", payload:
                {
                    my_nfts: result[0],
                    my_nodes: nodes,
                    account: account,
                    reward: result[2],
                    master_nft_url: result[3],
                    grand_nft_url: result[4],
                    currentTime: result[2].currentTime * 1,
                    all_nodes: result[5],
                    can_perform: can_perform,
                    last_claim_time: result[2].lastClaimTime
                }
            });
        });
    } else if (action.type === "CHANGE_REWARD_OWNER") {
        // uploadData(data1);
    } else if (action.type === 'PAY_FEE_ALL') {
        if (!state.account) {
            connectAlert();
            return Object.assign({}, state, { can_perform: true });
        }

        console.log("pay fee all", action.payload.count);
        rewardConatract.methods.getNodeMaintenanceFee().call()
            .then((threeFee) => {
                rewardConatract.methods.payAllNodeFee(action.payload.duration - 1)
                    .send({ from: state.account, value: action.payload.duration * threeFee * action.payload.count, gas: 2100000 })
                    .then(() => {
                        store.dispatch({ type: "GET_USER_INFO", payload: { can_perform: true } });
                    }).catch(() => {
                        store.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: true } });
                    });
            }).catch((err) => {
                store.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: true } });
            })
    } else if (action.type === "SET_PRICE_VALUE") {
        if (!state.account) {
            connectAlert();
            return Object.assign({}, state, { can_perform: true });
        }
        if (action.payload.type === "max_prenode_count") {
            rewardConatract.methods.setPreNodeCount(action.payload.value)
                .send({ from: state.account, gas: 210000 })
                .then(() => {
                }).catch(() => {
                })
        } else if (action.payload.type === "claim_fee") {
            rewardConatract.methods.setClaimFee(web3.utils.toWei(action.payload.value, 'ether'))
                .send({ from: state.account, gas: 210000 })
                .then(() => {
                }).catch(() => {
                })
        } else if (action.payload.type === "maintenance_fee") {
            rewardConatract.methods.setNodeMaintenanceFee(web3.utils.toWei(action.payload.value, 'ether'))
                .send({ from: state.account, gas: 210000 })
                .then(() => {
                }).catch(() => {
                })
        } else if (action.payload.type === "node_price") {
            rewardConatract.methods.setNodePrice(web3.utils.toWei(action.payload.value, 'ether'))
                .send({ from: state.account, gas: 210000 })
                .then(() => {
                }).catch(() => {
                })
        } else if (action.payload.type === "pet_price") {
            rewardConatract.methods.setPeaceValue(web3.utils.toWei(action.payload.value, 'ether'))
                .send({ from: state.account, gas: 210000 })
                .then(() => {
                }).catch(() => {
                })
        } else if (action.payload.type === "whitelist") {
            var a = [];

            rewardConatract.methods.insertWhitelist(a)
                .send({ from: state.account, gas: 210000 })
                .then(() => {
                }).catch(() => {
                })
        } else if (action.payload.type === "isWhitelist") {
            rewardConatract.methods.isWhitelist(action.payload.value).call().then((res) => { console.log(res) });
        }
        let promise = [];
        promise.push(rewardConatract.methods.getClaimFee().call());
        promise.push(rewardConatract.methods.getNodeMaintenanceFee().call());
        promise.push(rewardConatract.methods.getNodePrice().call());
        promise.push(rewardConatract.methods.getPeaceValue().call());
        promise.push(rewardConatract.methods.getPreNodeCount().call());
        Promise.all(promise).then((result) => {
            store.dispatch({
                type: "RETURN_DATA",
                payload: {
                    claim_fee: web3.utils.fromWei(result[0], 'ether'),
                    maintenance_fee: web3.utils.fromWei(result[1], 'ether'),
                    node_price: web3.utils.fromWei(result[2], 'ether'),
                    pet_price: web3.utils.fromWei(result[3], 'ether'),
                    max_prenode_count: result[4]
                }
            });
        })
        // store.dispatch({type:"GET_ADMIN_PRICE"});
    } else if (action.type === "RETURN_DATA") {
        return Object.assign({}, state, action.payload);
    } else if (action.type === "UPDATE_CAN_PERFORM_STATUS") {
        return Object.assign({}, state, {
            can_perform: action.payload.can_perform
        });
    } else if (action.type === "GET_ADMIN_PRICE") {
        let promise = [];
        promise.push(rewardConatract.methods.getClaimFee().call());
        promise.push(rewardConatract.methods.getNodeMaintenanceFee().call());
        promise.push(rewardConatract.methods.getNodePrice().call());
        promise.push(rewardConatract.methods.getPeaceValue().call());
        promise.push(rewardConatract.methods.getPreNodeCount().call());
        Promise.all(promise).then((result) => {
            store.dispatch({
                type: "RETURN_DATA",
                payload: {
                    claim_fee: web3.utils.fromWei(result[0], 'ether'),
                    maintenance_fee: web3.utils.fromWei(result[1], 'ether'),
                    node_price: web3.utils.fromWei(result[2], 'ether'),
                    pet_price: web3.utils.fromWei(result[3], 'ether'),
                    max_prenode_count: result[4]
                }
            });
        })
    } else if (action.type === "GET_PET_VALUE") {
        rewardConatract.methods.getAvaxForFire(1).call().then((value) => {
            return store.dispatch({ type: "RETURN_DATA", payload: { fire_value: value } });
        });
    }
    return state;
}

const connectAlert = () => {
    toast.info("Please connect your wallet!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

const checkNetwork = (chainId) => {

    if (web3.utils.toHex(chainId) !== web3.utils.toHex(config.chainId)) {
        toast.info("Change network to Binance C Chain!", {
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


const updateGlobalInfo = () => {
    let promise = [];
    promise.push(nftContract.methods.getRegionalNFTURI().call());
    promise.push(nftContract.methods.getWorldNFTURI().call());
    promise.push(rewardConatract.methods.getTotalNodeCount().call());
    promise.push(rewardConatract.methods.getContractStatus().call());
    promise.push(rewardConatract.methods.getBNBForPeace(1).call());
    promise.push(rewardConatract.methods.getBNBForBUSD(1).call());
    promise.push(tokenContract.methods.balanceOf(config.treasuryAddr).call());
    promise.push(rewardConatract.methods.getClaimStatus().call());
    promise.push(rewardConatract.methods.getPresaleStatus().call());
    promise.push(rewardConatract.methods.getPeaceValue().call());
    Promise.all(promise).then((result) => {
        store.dispatch({
            type: "RETURN_DATA",
            payload: {
                master_nft_url: result[0],
                grand_nft_url: result[1],
                all_nodes: result[2],
                contract_status: result[3],
                claim_status: result[7],
                presale_status: result[8],
                treasury_balance: Number(web3.utils.fromWei(result[6], 'ether') * 0.00001).toFixed(2),
                pet_price: web3.utils.fromWei(result[9], 'ether')
            }
        });
    })
}


const store = createStore(reducer);
if (window.ethereum) {
    window.ethereum.on('accountsChanged', function (accounts) {
        store.dispatch({
            type: "GET_USER_INFO",
            payload: { account: accounts[0] }
        });
    })
    window.ethereum.on('chainChanged', function (chainId) {
        checkNetwork(chainId);
        store.dispatch({
            type: "UPDATE_CHAIN_ID",
            payload: { chainId: chainId }
        });
    });
    web3.eth.getChainId().then((chainId) => {
        checkNetwork(chainId);
        store.dispatch({
            type: "UPDATE_CHAIN_ID",
            payload: { chainId: chainId }
        });
    })
    updateGlobalInfo();
}



export default store