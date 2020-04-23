import React, { Component } from 'react'
import '../Welcome/style.css'
import Success from '../Success/Success';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';

export default class GetContractOwner extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:undefined,
            Loading:false,
            "contractAddress": "0x56241e84dF356e0d4AA83a2Ca36E05e1BC5623EF"
        }

        this.getContractOwner = this.getContractOwner.bind(this);
    }

    getContractOwner() {this.props.context.getContractOwner(this.state)}

   
    componentWillReceiveProps(nextProps){
        let {state} = nextProps.context;
        let {getContractOwner,Loading} = state;
        this.setState({data:getContractOwner,Loading})
    }

    showData(data){
        if(!!!data) return null;
        if(data.status==="success"){
            return !!data? <Success 
            label="Contract Owner" 
            data={data.data}
            button="Check Again"
            handler={this.resetState}
            icon="account_circle"
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
        console.log('_getContractOwner',this.props.context);
        let d = this.showData(this.state.data)
        return (
            <div>
                {d}
                {this.state.Loading?<Loader/>:null}
               {!!!this.state.data?
                <div className="welcome-form">
                    <div className="welcome-form-input">
                    <label htmlFor="contractAddress" className="welcome-label">Contract Address</label>
                    <input placeholder="" onChange={this.inputHandeler} name="contractAddress" id="contractAddress" value={this.state.contractAddress} className="welcome-input" type="text" required/>
                    </div>
                   
                    <input className="button" onClick={this.getContractOwner} type="button" value="Get Contract Owner" />
                </div>:null
               }
            </div>
        )
    }
}
