import React from 'react'
import './style.css'
import MaterialIcon, { colorPalette } from "material-icons-react";

export default function Success(props) {
    let {label,data,button,handler,icon} = props;
    return (
        <div className="success-wrapper">
            <span className="data-label"> <MaterialIcon icon={icon} /> {label}</span>
            <p className="success-data">{data}</p>
            <button className="success-button" onClick={handler}>{button}</button>
        </div>
    )
}
