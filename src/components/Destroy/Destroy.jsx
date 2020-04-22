import React, { Component } from 'react'
import '../Welcome/style.css'
import Success from '../Success/Success';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';

export default class Destroy extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:undefined,
            Loading:false,
            "sender":"0x00BEFBec4AA42230E88b8fF6291Aeba25a5eb887", 
            "contractAddress": "0x654592dF1bc10E1298277Ce20941E2cbe00092BD"
        }

        this.destroy = this.destroy.bind(this);
    }

    destroy() {this.props.context.destroy(this.state)}

    componentWillReceiveProps(nextProps){
        let {state} = nextProps.context;
        let {destroy,Loading} = state;
        this.setState({data:destroy,Loading})
    }

    showData(data){
        if(!!!data) return null;
        if(data.status==="success"){
            return !!data? <Success 
            label=" Destroy Contract" 
            data={data.data}
            button="Claim Again"
            handler={this.resetState}
            icon="delete"
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
        console.log('_destroy',this.state);
        let d = this.showData(this.state.data)
        return (
            <div>
               {d}
                {this.state.Loading?<Loader/>:null}
               {!!!this.state.data?
                <div className="welcome-form">
                    <div className="welcome-form-input">
                    <label htmlFor="sender" className="welcome-label">Sender</label>
                    <input placeholder="" onChange={this.inputHandeler} id="sender" value={this.state.sender} className="welcome-input" type="text" required/>
                    </div>
                    <div className="welcome-form-input">
                    <label htmlFor="contractAddress" className="welcome-label">Contract Address</label>
                    <input placeholder="john@xyx.com" onChange={this.inputHandeler} id="contractAddress" value={this.state.contractAddress} className="welcome-input" type="text" required/>
                    </div>
                    <input className="button" onClick={this.destroy} type="button" value="Destroy Contract" />
                </div>:null
               }
            </div>
        )
    }
}
