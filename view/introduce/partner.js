import React, { Component } from 'react'

import {CopyToClipboard} from 'react-copy-to-clipboard';

import './partner.sass'

export default class Partner extends Component {
    render() {
        return (
            <div className="partner">
                <div className="titleName">合作攻略</div>
                <div className="inviteBox">
                    <div className="inviteLeft">
                        <img className="inviteCommon " src={require("../../assets/images/invite.png")} alt=""/>
                        <img className="inviteCommon" src={require("../../assets/images/together.png")} alt=""/>
                        <img className="inviteCommon" src={require("../../assets/images/rmb.png")} alt=""/>
                    </div>
                    <div className="inviteRight">
                        <div>
                            <div className="how">
                                如何推广
                            </div>
                            <div className="icons">
                                <div className="icon">
                                    <img src={require("../../assets/images/aircraft.png")} alt=""/>
                                    <div className="iconTitle">
                                        发送推广
                                    </div>
                                    <div className="iconTxt">
                                        链接给朋友
                                    </div>
                                </div>
                                <div  className="icon">
                                    <img src={require("../../assets/images/link.png")} alt=""/>
                                    <div className="iconTitle">
                                        点击链接
                                    </div>
                                    <div className="iconTxt">
                                        注册成为你的用户
                                    </div>
                                </div>
                                <div  className="icon">
                                    <img src={require("../../assets/images/account.png")}  alt=""/>
                                    <div className="iconTitle">
                                        你的用户
                                    </div>
                                    <div className="iconTxt">
                                        开始交易
                                    </div>
                                </div>
                                <div className="icon">
                                    <img  src={require("../../assets/images/earn.png")} alt=""/>
                                    <div className="iconTitle">
                                        开启
                                    </div>
                                    <div className="iconTxt">
                                        赚钱模式
                                    </div>
                                </div>
                            </div>
                            <div className="agencyTable">
                                <div className="agencyTitle">

                                </div>
                                <div className="agencyTxt">
                                    <div className="column0" >
                                        <div className="rank ">级别</div>
                                        <div className="rank line">普通1</div>
                                        <div className="rank line">普通2</div>
                                        <div className="rank line">普通3</div>
                                        <div className="rank line">普通4</div>
                                        <div className="rank line">普通5</div>
                                    </div>
                                    <div className="column1" >
                                        <div className="subColunm">
                                            <div className="subColumn0">
                                                <div>交易用户数量</div>
                                                <div>>=1</div>
                                            </div>
                                            <div className="subColumn0">
                                                <div>佣金比例</div>
                                                <div>5%</div>
                                            </div>
                                        </div>
                                        <div className="subColumBottom">
                                            高达百分之50%的佣金比例，请联系在线客服  
                                        </div>

                                    </div>
                                    <div className="column2" >
                                        <div>有效期</div>
                                        <div>6个月</div>
                                        <div>永久</div>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="remind"></div>
                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
}
