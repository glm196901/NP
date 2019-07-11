import React, { Component } from 'react'

import './titleBar.sass'
export default class TitleBar extends Component {
    render() {
        return (
            <div className="titleBar">
                <img src={require("../../../assets/images/info.png")} alt=""/>
                <div >{this.props.txt}</div>
            </div>
        )
    }
}
