import React, { Component } from 'react'
import '../Welcome/style.css'
import Success from '../Success/Success';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
export default class GetBalance extends Component {

    constructor(props){
        super(props)
        this.state = {
            data:undefined,
            Loading:false,
            address:"0x70b71530f8da7266F21dbF0c9fF1FC2fB210d4ca"

        }

        this.getBalance = this.getBalance.bind(this);
    }

    getBalance() {this.props.context.getBalance(this.state)}

   
    componentWillReceiveProps(nextProps){
        let {state} = nextProps.context;
        let {getBalance,Loading} = state;
        this.setState({data:getBalance,Loading})
    }

    showData(data){
        if(!!!data) return null;
        if(data.status==="success"){
            return !!data? <Success 
            label="Balance" 
            data={data.data}
            button="Claim Again"
            handler={this.resetState}
            icon="account_balance_wallet"
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
        console.log('_getBalance',this.props.context);
        let d = this.showData(this.state.data)
        return (
            <div>
                {d}
                {this.state.Loading?<Loader/>:null}
               {!!!this.state.data?
                <div className="welcome-form">
                    <div className="welcome-form-input">
                    <label htmlFor="address" className="welcome-label">Address</label>
                    <input placeholder="" onChange={this.inputHandeler} id="address" value={this.state.address} className="welcome-input" type="text" required/>
                    </div>
                   
                    <input className="button" onClick={this.getBalance} type="button" value="Get Balance" />
                </div>:null
               }
            </div>
        )
    }
}
