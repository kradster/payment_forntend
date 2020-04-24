import React, { Component } from 'react'
import '../Welcome/style.css'
import Success from '../Success/Success';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';

export default class GetTimeout extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:undefined,
            Loading:false,
            "contractAddress": "0x06F6d3A469655416C65a9942D886b6b0cDcb2DB5"
        }

        this.getTimeout = this.getTimeout.bind(this);
    }

    getTimeout() {this.props.context.getTimeout(this.state)}

   
        componentWillReceiveProps(nextProps){
            let {state} = nextProps.context;
            let {getTimeout,Loading} = state;
            this.setState({data:getTimeout,Loading})
        }
    
        showData(data){
            if(!!!data) return null;
            if(data.status==="success"){
                return !!data? <Success 
                label="Timeout" 
                data={new Date(data.data*1000).toLocaleDateString()}
                button="Check Again"
                handler={this.resetState}
                icon="schedule"
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
                    <label htmlFor="contractAddress" className="welcome-label">Contract Address</label>
                    <input placeholder="" onChange={this.inputHandeler} name="contractAddress" id="contractAddress" value={this.state.contractAddress} className="welcome-input" type="text" required/>
                    </div>
                   
                    <input className="button" onClick={this.getTimeout} type="button" value="Get Timeout" />
                </div>:null
               }
            </div>
        )
    }
}