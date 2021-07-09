import React from "react";
import '../Header.scss'


export default function Toggler(props) {
    return (
        <div className = "header__toggler">
            <input className = "toggler-input" onClick = {props.onToggle} type="checkbox" id = "toggler"/>
            <label className = 'toggler-label' htmlFor = "toggler" ></label>
        </div>
    )
}