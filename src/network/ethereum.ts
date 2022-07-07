import Web3 from 'web3';
import abi from '../contracts/abi.json';
import { AbiItem } from "web3-utils";

const rpcURL: string | undefined = process.env.REACT_APP_API_URL;

const web3 = new Web3(rpcURL!!);
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
const contract = new web3.eth.Contract(abi as AbiItem[], contractAddress);

declare const window: any;


export const getBalance = async (address: string) => {
    let balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
}

export const getTotalSupply = async () => {
    console.log(rpcURL);
    console.log(contractAddress);
    return await contract.methods.totalSupply().call();
}

export const getMaxSupply = async () => {
    return await contract.methods.maxSupply().call();
}

export const buyNFT = async () => {
    
    const { ethereum } = window;
    const transactionParams = {
        to: contractAddress,
        from: ethereum.selectedAddress,
        value: web3.utils.toHex(web3.utils.toWei('0.02', 'ether')),
        gasLimit: web3.utils.toHex(285000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('2', 'gwei')),
        data: contract.methods.mint(1).encodeABI()
    };
    console.log("My add : " + ethereum.selectedAddress);
    return await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParams]
    })
}

export const getToken = async (address: string) => {
    return await contract.methods.walletOfOwner(address).call();
}

export const getTokenUri = async (tokenId: number) => {
    return await contract.methods.tokenURI(tokenId).call();
}