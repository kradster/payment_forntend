import React, { Component } from 'react'
import '../Welcome/style.css'
import Success from '../Success/Success';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
export default class GetContractAddress extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:undefined,
            Loading:false,
            "txHash":"0x7a4078df3353403d73bde9bfdad1a7988206069139a089e85381b8cafaf8c08d"
        }

        this.getContractAddress = this.getContractAddress.bind(this);
    }

    getContractAddress() {this.props.context.getContractAddress(this.state)}
   
    componentWillReceiveProps(nextProps){
        let {state} = nextProps.context;
        let {getContractAddress,Loading} = state;
        this.setState({data:getContractAddress,Loading})
    }

    showData(data){
        if(!!!data) return null;
        if(data.status==="success"){
            return !!data? <Success 
            label="Contract Address" 
            data={data.data}
            button="Claim Again"
            handler={this.resetState}
            icon="contacts"
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
        console.log('_getContractAddress',this.props.context);
        let d = this.showData(this.state.data)
        return (
            <div>
                {d}
                {this.state.Loading?<Loader/>:null}
               {!!!this.state.data?
                <div className="welcome-form">
                    <div className="welcome-form-input">
                    <label htmlFor="txHash" className="welcome-label">txHash</label>
                    <input placeholder="" onChange={this.inputHandeler} id="txHash" value={this.state.txHash} className="welcome-input" type="text" required/>
                    </div>
                   
                    <input className="button" onClick={this.getContractAddress} type="button" value="Get Contract Address" />
                </div>:null
               }
            </div>
        )
    }
}