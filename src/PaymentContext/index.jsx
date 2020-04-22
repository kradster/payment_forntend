import React, { Component, createContext } from 'react'
import * as ACTIONS from '../Actions';
export const PaymentContext = createContext();
export default class index extends Component {
    init = {
        Loading:false,
        getBalance:{},
        getContractOwner:{},
        signMessage:{},
        claimPayment:{},
        getBalance:{},
        destroy:{},
        deployContract:{},
        getContractAddress:{},
        getTimeout:{}
    }
    constructor(props){
        super(props);
        this.state = this.init
        this.getContractOwner = this.getContractOwner.bind(this);
        this.signMessage = this.signMessage.bind(this);
        this.claimPayment = this.claimPayment.bind(this);
        this.getBalance = this.getBalance.bind(this);
        this.destroy = this.destroy.bind(this);
        this.deployContract = this.deployContract.bind(this);
        this.getContractAddress = this.getContractAddress.bind(this);
        this.getTimeout = this.getTimeout.bind(this);
    }

getContractOwner = (data)=>{
    this.setState(prevState=>{return {Loading:!prevState.Loading,getContractOwner:{}}})
    ACTIONS.getContractOwner(data).then(d=>{
        this.setState({getContractOwner:d.data,Loading:false})
    }).catch(e=>{
        this.setState({getContractOwner:e,Loading:false})
    })
}
signMessage = (data)=>{
    this.setState(prevState=>{return {Loading:!prevState.Loading,signMessage:{}}})
    ACTIONS.signMessage(data).then(d=>{
        this.setState({signMessage:d.data,Loading:false})
    }).catch(e=>{
        this.setState({getContractOwner:e,Loading:false})
    })

}
claimPayment = (data)=>{
    this.setState(prevState=>{return {Loading:!prevState.Loading,claimPayment:{}}})
    ACTIONS.claimPayment(data).then(d=>{
        this.setState({claimPayment:d.data,Loading:false})
    }).catch(e=>{
        this.setState({getContractOwner:e,Loading:false})
    })
}
getBalance = async (data)=>{
    this.setState(prevState=>{return {Loading:!prevState.Loading,getBalance:{}}})
    await ACTIONS.getBalance(data).then(d=>{
        this.setState({getBalance:d.data,Loading:false})
    }).catch(e=>{
        this.setState({getContractOwner:e,Loading:false})
    })

}
destroy = (data)=>{
    this.setState(prevState=>{return {Loading:!prevState.Loading,destroy:{}}})
    ACTIONS.destroy(data).then(d=>{
        this.setState({destroy:d.data,Loading:false})
    }).catch(e=>{
        this.setState({destroy:e,Loading:false})
    })

}
deployContract = (data)=>{
    this.setState(prevState=>{return {Loading:!prevState.Loading,deployContract:{}}})
    ACTIONS.deployContract(data).then(d=>{
        this.setState({deployContract:d.data,Loading:false})
    }).catch(e=>{
        this.setState({getContractOwner:e,Loading:false})
    })

}
getContractAddress = (data)=>{
    this.setState(prevState=>{return {Loading:!prevState.Loading,getContractAddress:{}}})
    ACTIONS.getContractAddress(data).then(d=>{
        this.setState({getContractAddress:d.data,Loading:false})
    }).catch(e=>{
        this.setState({getContractOwner:e,Loading:false})
    })
    
}
getTimeout = (data)=>{
    this.setState(prevState=>{return {Loading:!prevState.Loading,getTimeout:{}}})
    ACTIONS.getTimeout(data).then(d=>{
        this.setState({getTimeout:d.data,Loading:false})
    }).catch(e=>{
        this.setState({getContractOwner:e,Loading:false})
    })

}




    render() {
        return (
            <PaymentContext.Provider value={{
                "state":this.state,
                "getContractOwner":this.getContractOwner,
                "signMessage":this.signMessage,
                "claimPayment":this.claimPayment,
                "getBalance":this.getBalance,
                "destroy":this.destroy,
                "deployContract":this.deployContract,
                "getContractAddress":this.getContractAddress,
                "getTimeout":this.getTimeout
            }}>
                {this.props.children}
            </PaymentContext.Provider>
        )
    }
}
