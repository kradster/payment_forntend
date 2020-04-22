import React, { Component, PureComponent,useContext } from 'react'
import './style.css'
import { MetaMaskContext } from '../../containers/MetaMaskContainer'


export default  function Welcome(){
    const context = useContext(MetaMaskContext)
    return <Index context={context} />
}

class Index extends PureComponent {

    init = {
        name:"",
        email:"",
        address:""
    }
    constructor(props){
        super(props)
        this.state= this.init;
        this.setInput = this.setInput.bind(this);
        this.start = this.start.bind(this);
        
    }

    componentWillMount(){
        let {address,name,email} = sessionStorage;
        if(!!address && !!name && !!email){
            window.location.href = "/dashboard"
        }
    }

    componentWillReceiveProps(nextProps){
        console.log('welcome',nextProps);
        this.setState({address:nextProps.context.address})
    }
   

    setInput(e){
        this.setState({[e.target.id]:e.target.value})
        if(e.target.id==="address") sessionStorage.removeItem('address');
    }

    start(){
        let {name,address,email} = this.state;
        if(name==="" || address==="" || email==="") return alert('All Fields Mandatory')
        
        sessionStorage.setItem('name',this.state.name);
        sessionStorage.setItem('email',this.state.email);
        sessionStorage.setItem('address',this.state.address);
        window.location.href =  '/dashboard'

    }
    
    render() {
       
        return (
            <div className="welcome">
                <div className="welcome-image"></div>
                <div className="wrapper">
                <div className="welcome-heading-small">Welcome in </div>
                <div className="welcome-heading-big">Payment-Channel</div>
                <div className="welcome-form">
                    <div className="welcome-form-input">
                    <label htmlFor="name" className="welcome-label">Enter your name</label>
                    <input placeholder="john" onChange={this.setInput} id="name" value={this.state.name} className="welcome-input" type="text" required/>
                    </div>
                    <div className="welcome-form-input">
                    <label htmlFor="email" className="welcome-label">Enter your email</label>
                    <input placeholder="john@xyx.com" onChange={this.setInput} id="email" value={this.state.email} className="welcome-input" type="text" required/>
                    </div>
                    <div className="welcome-form-input">
                    <label htmlFor="address" className="welcome-label">Enter your Address</label>
                    <input onChange={this.setInput}  id="address" value={this.state.address} className="welcome-input" type="text"required />
                    </div>
                    <input className="button" onClick={this.start} type="button" value="Let's Start" />
                </div>
                </div>
            </div>
        )
    }
}
