import React, { Component } from 'react'
import '../Welcome/style.css'
import Success from '../Success/Success';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';

export default class SignMessage extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:undefined,
            Loading:false,
            "signer":"0x00BEFBec4AA42230E88b8fF6291Aeba25a5eb887", 
        "recipient":"0xF1638221192ebeB5B423ECC984cE737e44FB1a97",
        "amount": "1000",
        "contractAddress": "0x66e0f3678C655d0044221aBf5f9aa499BbB08418"}
            this.signMessage = this.signMessage.bind(this);
            this.inputHandeler = this.inputHandeler.bind(this);
        }

    signMessage() {
        this.props.context.signMessage(this.state)
    }
    componentWillReceiveProps(nextProps){
        let {state} = nextProps.context;
        let {signMessage,Loading} = state;
        this.setState({data:signMessage,Loading})
    }

    showData(data){
        if(!!!data) return null;

        if(data.status==="success"){
            return !!data? <Success 
            label="Sign Message" 
            data={data.data}
            button="Claim Again"
            handler={this.resetState}
            icon="assignment_turned_in"
            />:null
        }else if(data.status==="error"){
            return !!data?<Error data={data.msg} handler={this.resetState} />:null
        }
    }

    resetState = ()=>{
        this.setState({data:undefined})
    }

    inputHandeler = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        console.log('_signMessage',this.state);
        let d = this.showData(this.state.data)
        return (
            <div>
                {d}
                {this.state.Loading?<Loader/>:null}
               {!!!this.state.data?
                <div className="welcome-form">
                    <div className="welcome-form-input">
                    <label htmlFor="signer" className="welcome-label">Signer</label>
                    <input placeholder="" onChange={this.inputHandeler} name="signer" id="signer" value={this.state.signer} className="welcome-input" type="text" required/>
                    </div>
                    <div className="welcome-form-input">
                    <label htmlFor="recipient" className="welcome-label">Recipient</label>
                    <input placeholder="john@xyx.com" onChange={this.inputHandeler} name="recipient" id="recipient" value={this.state.recipient} className="welcome-input" type="text" required/>
                    </div>
                    <div className="welcome-form-input">
                    <label htmlFor="amount" className="welcome-label">amount</label>
                    <input onChange={this.inputHandeler} name="amount"  id="amount" value={this.state.amount} className="welcome-input" type="text"required />
                    </div>
                    <div className="welcome-form-input">
                    <label htmlFor="contractAddress" className="welcome-label">contractAddress</label>
                    <input onChange={this.inputHandeler} name="contractAddress"  id="contractAddress" value={this.state.contractAddress} className="welcome-input" type="text"required />
                    </div>
                    <input className="button" onClick={this.signMessage} type="button" value="Sign Contract" />
                
                </div>:null
                }
            </div>
        )
    }
}
