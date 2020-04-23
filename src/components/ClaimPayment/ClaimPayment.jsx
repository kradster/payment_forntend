import React, { Component } from 'react'
import '../Welcome/style.css'
import Success from '../Success/Success';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';

export default class ClaimPayment extends Component {
    constructor(props){
        super(props)
        this.state = { 
            data:undefined,
            Loading:false,
            "fromAcc":sessionStorage.address,
            "amount": "1000",
            "contractAdd":"0x66e0f3678C655d0044221aBf5f9aa499BbB08418",
            "signature":"0x9e96c7522233c1557412a3c1d85686ad7fdc04e35315e044416a382e8c2385762e2f8a880ef08e9fed24bf032d8e3d2e89192f7b9560d12acd92a4785e8aea621b"}
            this.claimPayment = this.claimPayment.bind(this);
            this.inputHandeler = this.inputHandeler.bind(this);
        }

    claimPayment() {
        this.props.context.claimPayment(this.state)
    }

    componentWillReceiveProps(nextProps){
        let {state} = nextProps.context;
        let {claimPayment,Loading} = state;
        this.setState({data:claimPayment,Loading})
    }

    showData(data){
        if(!!!data) return null;

        if(data.status==="success"){
            return !!data? <Success 
            label="Claim Payment" 
            data={data.data}
            button="Claim Again"
            handler={this.resetState}
            icon="payment"
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
        console.log('_claimPayment',this.state);
        let d = this.showData(this.state.data)
        return (
            <div>
               {d}
                {this.state.Loading?<Loader/>:null}
               {!!!this.state.data?
                <div className="welcome-form">
                    <div className="welcome-form-input">
                    <label htmlFor="fromAcc" className="welcome-label">From Account</label>
                    <input placeholder="" onChange={this.inputHandeler} name="fromAcc" id="fromAcc" value={this.state.fromAcc} className="welcome-input" type="text" required/>
                    </div>
                    <div className="welcome-form-input">
                    <label htmlFor="amount" className="welcome-label">amount</label>
                    <input placeholder="john@xyx.com" onChange={this.inputHandeler} name="amount" id="amount" value={this.state.amount} className="welcome-input" type="text" required/>
                    </div>
                    <div className="welcome-form-input">
                    <label htmlFor="contractAdd" className="welcome-label">contract Address</label>
                    <input onChange={this.inputHandeler} name="contractAdd"  id="contractAdd" value={this.state.contractAdd} className="welcome-input" type="text"required />
                    </div>
                    <div className="welcome-form-input">
                    <label htmlFor="signature" className="welcome-label">signature</label>
                    <input onChange={this.inputHandeler} name="signature"  id="signature" value={this.state.signature} className="welcome-input" type="text"required />
                    </div>
                    <input className="button" onClick={this.claimPayment} type="button" value="CLAIM PAYMENT" />
                </div>:null
               }
            </div>
        )
    }
}
