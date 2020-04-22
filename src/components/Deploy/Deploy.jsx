import React, { Component } from 'react'
import '../Welcome/style.css'
import Success from '../Success/Success';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';


export default class Deploy extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            "sender":"0x00BEFBec4AA42230E88b8fF6291Aeba25a5eb887", 
            "recipient":"0xF1638221192ebeB5B423ECC984cE737e44FB1a97",
            "amount": "0.1",
            "duration":"180"
            } 
            this.deployContract = this.deployContract.bind(this);
            this.inputHandeler = this.inputHandeler.bind(this);
        }

    deployContract() {
        this.props.context.deployContract(this.state)
    }

    componentWillReceiveProps(nextProps){
        let {state} = nextProps.context;
        let {deployContract,Loading} = state;
        this.setState({data:deployContract,Loading})
    }


    showData(data){
        if(!!!data) return null;

        if(data.status==="success"){
            return !!data? <Success 
            label="Deploy Contract" 
            data={data.data}
            button="Claim Again"
            handler={this.resetState}
            icon="description"
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
        console.log('_deployContract',this.state);
        let d = this.showData(this.state.data)
        
        return (
            <div>
               {d}
               {this.state.Loading?<Loader/>:null}
               {!!!this.state.data?
                <div className="welcome-form">
                    <div className="welcome-form-input">
                    <label htmlFor="sender" className="welcome-label">From Account</label>
                    <input placeholder="" onChange={this.inputHandeler} id="sender" value={this.state.sender} className="welcome-input" type="text" required/>
                    </div>
                    <div className="welcome-form-input">
                    <label htmlFor="recipient" className="welcome-label">recipient</label>
                    <input placeholder="john@xyx.com" onChange={this.inputHandeler} id="recipient" value={this.state.recipient} className="welcome-input" type="text" required/>
                    </div>
                    <div className="welcome-form-input">
                    <label htmlFor="amount" className="welcome-label">amount</label>
                    <input onChange={this.inputHandeler}  id="contractAdd" value={this.state.amount} className="welcome-input" type="text"required />
                    </div>
                    <div className="welcome-form-input">
                    <label htmlFor="duration" className="welcome-label">duration</label>
                    <input onChange={this.inputHandeler}  id="duration" value={this.state.duration} className="welcome-input" type="text"required />
                    </div>
                    <input className="button" onClick={this.deployContract} type="button" value="Deploy contract" />
                </div>:null
                }
            </div>
        )
    }
}
