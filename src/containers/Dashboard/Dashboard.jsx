import React, { Component } from 'react'
import Icon from 'material-icons-react'
import {
    GetBalance,
    GetContractAddress,
    GetContractOwner,
    GetTimeOut,
    DeployContract,
    Destroy,
    SignMessage,
    ClaimPayment,
} from '../../components'

import {PaymentContext} from '../../PaymentContext'
import './style.css'
import Sidebar from '../../components/Sidebar';



export default class Dashboard extends Component {

    static contextType = PaymentContext;
    constructor(props){
        super(props)
        this.state = {
            name:"",
            address:"",
            email:"",
            tab:1
        }

        this.TabTitles = [
            "",
            "Claim Payment",
            "Deploy Contract",
            "destroy contract",
            "balance",
            "contract address",
            "contract owner",
            "timeout",
            "sign message"

        ]

        this.changeTab = this.changeTab.bind(this);
    }    

    componentWillMount(){
        let {address,name,email} = sessionStorage;
        if(!!address && !!name && !!email){
            this.setState({
                address:sessionStorage.address,
                name:sessionStorage.name,
                email:sessionStorage.email
            })
        }else{
            window.location.href = "/"
        }
    }

    changeTab(e){
        let tab = e.target.id;
        console.log('changeTab',tab);
        this.setState({tab})
    }

    logout = ()=>{
        sessionStorage.clear();
        window.location.href = "/"
    }


    render() {
        console.log('Dashboard',this.state);
        
        return (
            <div className="dashboard">
                <Sidebar tab={this.state.tab} changeTab={this.changeTab}  />
                <div className="main-panel">
                    <div className="title">
                    Welcome to <span>{this.TabTitles[this.state.tab]}</span>
                    <button onClick={this.logout} ><Icon icon="exit_to_app" /> Exit</button>
                    </div>
                    <div className="tab-wrapper">
                   {this.state.tab==1 ? <ClaimPayment context={this.context} />: null}
                   {this.state.tab==2 ? <DeployContract context={this.context} />: null}
                   {this.state.tab==3 ? <Destroy context={this.context} />: null}
                   {this.state.tab==4 ? <GetBalance context={this.context} /> : null}
                   {this.state.tab==5 ? <GetContractAddress context={this.context} />: null}
                   {this.state.tab==6 ? <GetContractOwner context={this.context} />: null}
                   {this.state.tab==7 ? <GetTimeOut context={this.context} />: null}
                   {this.state.tab==8 ? <SignMessage context={this.context} />: null}
                    </div>
                </div>
            </div>
        )
    }
}
