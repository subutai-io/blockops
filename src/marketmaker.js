import  web3 from './web3';
const address = '0x0f49b25cbae098ffa53bcd5dddfec1440bd14d04';
const abi=[{"constant":true,"inputs":[],"name":"khanAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gwAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"khanTokenAddress","type":"address"},{"name":"gwTokenAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"inputToken","type":"uint256"},{"indexed":false,"name":"outputToken","type":"uint256"},{"indexed":false,"name":"fromToken","type":"string"},{"indexed":false,"name":"toToken","type":"string"}],"name":"exchange","type":"event"},{"constant":false,"inputs":[{"name":"khanAmount","type":"uint256"}],"name":"exchangeKHANtoGW","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"khanAmount","type":"uint256"}],"name":"getGWToTransfer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"gwAmount","type":"uint256"}],"name":"exchangeGWToKHAN","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"gwAmount","type":"uint256"}],"name":"getKhanToTransfer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMarketMakerAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getGWAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getKHANAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]; 
export default  new  web3.eth.Contract(abi, address);