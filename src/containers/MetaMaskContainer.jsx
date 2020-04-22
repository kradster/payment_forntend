import React, { Component,createContext } from 'react'
import Web3 from 'web3';
const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");

export const MetaMaskContext = createContext();

export default class MetaMaskContainer extends Component {
    initState = {
        address:"",
        network:""
    }
    constructor(props){
        super(props);
        this.state = this.initState

        this.initAccount = this.initAccount.bind(this)
    }

    componentWillMount(){
        let self = this;
        this.web3 = web3;
        if(!!!sessionStorage.address){
            this.initAccount()
        }else{
            this.setState({address:sessionStorage.address})
        }
        window.ethereum.on('accountsChanged', function (accounts) {
            this.account = accounts[0];
            self.setState({address:this.account})
            sessionStorage.setItem('address',this.account);
          })
          
          window.ethereum.on('networkChanged', function (netId) {
            self.setState({network:netId})
            
          })
    }

    initAccount = () => {
        if (window.ethereum) {
            try {
                window.ethereum.enable().then((a) => {
                    this.account = a[0];
                    this.setState({address:this.account})
                    sessionStorage.setItem('address',this.account);
                    console.log('LATEST ', a);
                });
            } catch (e) {
                // User has denied account access to DApp... 
                console.log('ERROR ', e);
            }
        }
        else if (window.web3) {
            console.log('NO METAMASK FOUND')

        }
    }


    render() {
        return (
            <MetaMaskContext.Provider value={this.state}>
               {this.props.children}
            </MetaMaskContext.Provider>
        )
    }
}
