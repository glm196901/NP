import React, { Component } from 'react'


import  './guide.sass'

export default class Guide extends Component {
    render() {
        return (
            <div className="guide">
                <div className="titleName">新手指南</div>
                <div className="stepBox">
                    <div className="stepRight">
                        <img src={require("../../assets/images/step1.png")} alt=""/>
                        <div className="stepWrap commonRight">
                            <div className="stepIcon">第一步</div>
                            <div className="stepTitle">新手注册</div>
                            <div>18元新手红包</div>
                            <div>十万模拟金学习体验交易</div>
                        </div>
                    </div>
                    <div className="stepLeft">
                        <img src={require("../../assets/images/step2.png")} alt=""/>
                        <div className="stepWrap commonLeft">
                            <div className="stepIcon">第二步</div>
                            <div className="stepTitle">新手注册</div>
                            <div >18元新手红包</div>
                            <div>十万模拟金学习体验交易</div>
                        </div>
                    </div>
                    <div className="stepRight">
                        <img src={require("../../assets/images/step3.png")} alt=""/>
                        <div className="stepWrap commonRight">
                            <div className="stepIcon">第三步</div>
                            <div className="stepTitle">新手注册</div>
                            <div>18元新手红包</div>
                            <div>十万模拟金学习体验交易</div>
                        </div>
                    </div>
                    <div className="stepLeft">
                        <img src={require("../../assets/images/step4.png")} alt=""/>
                        <div className="stepWrap commonLeft">
                            <div className="stepIcon">第四部</div>
                            <div className="stepTitle">新手注册</div>
                            <div>18元新手红包</div>
                            <div>十万模拟金学习体验交易</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
