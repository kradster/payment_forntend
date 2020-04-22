import React, { Component } from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";
import "./style.css";

export default class Sidebar extends Component {
  render() {
    let { changeTab,tab } = this.props;
    return (
      <div className="sidepanel">
        <div className="user">
          <div className="user-pic"></div>
          <p>{sessionStorage.name}</p>
          <span>{sessionStorage.email}</span>
        </div>
        <ul>
          <li id="1" onClick={changeTab} className={tab==1?'active':""}>
            <MaterialIcon icon="payment" />
            <span>Claim Payment</span> 
          </li>
          <li id="2" onClick={changeTab} className={tab==2?'active':""}>
            <MaterialIcon icon="description" />
            <span>Deploy Contract</span> 
          </li>
          <li id="3" onClick={changeTab} className={tab==3?'active':""}>
            <MaterialIcon icon="delete" />
            <span> Destroy Contract</span>
          </li>
          <li id="4" onClick={changeTab} className={tab==4?'active':""}>
            <MaterialIcon icon="account_balance_wallet" /> 
              <span>Get Balance</span>
          </li>
          <li id="5" onClick={changeTab} className={tab==5?'active':""}>
            <MaterialIcon icon="contacts" /> 
              <span>Get Contract Address</span>
          </li>
          <li id="6" onClick={changeTab} className={tab==6?'active':""}>
            <MaterialIcon icon="account_circle" /> 
              <span>Get Contract Owner</span>
          </li>
          <li id="7" onClick={changeTab} className={tab==7?'active':""}>
            <MaterialIcon icon="schedule" /> 
              <span>Get Timeout</span>
          </li>
          <li id="8" onClick={changeTab} className={tab==8?'active':""}>
            <MaterialIcon icon="assignment_turned_in" /> 
              <span>Sign Message</span>
          </li>
        </ul>
      </div>
    );
  }
}
