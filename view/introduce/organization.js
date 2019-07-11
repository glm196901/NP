import React, { Component } from 'react'


import './organization.sass'

export default class Organization extends Component {
    render() {
        return (
            <div className="organization">
                <div className="titleName">期货组织结构</div>
                <div className="graph">
                    <img src={require("../../assets/images/graph.png")} alt=""/>
                </div>
            </div>
        )
    }
}
