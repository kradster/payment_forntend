import React from 'react'
import './style.css'
import MaterialIcon, { colorPalette } from "material-icons-react";

export default function Success(props) {
    let {label,data,button,handler,icon} = props;
    return (
        <div className="error-wrapper">
            <span><MaterialIcon icon="error"/></span>
            <p className="data">{data}</p>
            <button className="error-button" onClick={handler}>Try Again</button>
        </div>
    )
}
