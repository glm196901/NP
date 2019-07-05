import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import ReactDOM from 'react-dom'

import './header.sass'
import 'antd/dist/antd.css'





// const ip = "http://localhost:3000"
const ip = window.location.origin


// class 

class Header extends Component {
    render() {
        return (
                <div className={"navBox"}>
                    <img className="cfLogo" src={require("../../../assets/images/logo.png")} />
                    <ul className={"navBar"}>
                        <li>
                            <NavLink exact to="/">关于信达</NavLink>
                        </li>
                        <li>
                            <NavLink to="/introduce/guide">期货市场</NavLink>
                        </li>
                        <li>
                            <NavLink to="/marketcenter/stockindex">新闻资讯</NavLink>
                        </li>
                        <li>
                            <NavLink to="/download">手机客户端</NavLink>
                        </li>
                        <li>
                            <NavLink to="/connection">联系我们</NavLink>
                        </li>                        
                    </ul>
                </div>
        );
    }
}

export default Header;