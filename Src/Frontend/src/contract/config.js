
var fireAbi = require('./abis/FireToken.json');
var nftAbi = require('./abis/FireNFT.json');
var rewardAbi = require('./abis/RewardManagement.json');


var config = {
    
    mainNetUrl: "https://bsc-dataseed.binance.org",
    FireToken : "0x9CA00f0B5562914bcD84Ca6e0132CaE295cc84B7",
    FireAbi: fireAbi,
    FireNFT : "0x36768acdAdb578D1d1e59eB59800dC7D00193Ec9",
    NFTAbi:  nftAbi,
    Reward : "0x1CC9D3526eC273cD59584805241954097Bb47132",
    RewardAbi: rewardAbi ,
    chainId: 0x38,
    
    treasuryAddr: "0xD4648f2ac458c4A19D260cDdF3aA3fA112d320C0",
    
    
    // test
    // Reward : "0x66B19Cf20dA6040E39e483fbF104D452f5801B88",
    // FireNFT : "0x1F066543De7E2c2B68be02c490Df600aeD59f986",
    // FireToken : "0x06Ba87cc958475235FC5Ff026f825b22A1FF0A51",
    // FireNFT : "0xE57557f5732FB7cD9ea87A8091E50c18C572B30b",
    
    // chainId: 0x3,




}


export default config;