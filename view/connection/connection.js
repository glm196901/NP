import React, {Component} from 'react';

import Header from '../common/header/header'
import Footer from '../common/footer/footer'

import './connection.sass'
    

class Corp extends Component{
    render(){
        return(
            <div className="corp">
                <div className="corpTitle">
                    <div className="titleTxt">
                        成为我们的合作伙伴
                    </div>
                    <div className="underline"></div>
                </div>
                <div className="wrapDown">
                    <div className="corpWrap">
                        <div className="corpStep">
                            <span>1.</span>
                            <span>注册认证</span>
                        </div>
                        <div className="txt">
                            使用手機號註冊壹個賬戶，生成壹個專屬代理的推薦鏈接，即可享受傭金待
                        </div>
                    </div>
                    <div className="spot">•••••••</div>
                    <div className="corpWrap">
                        <div className="corpStep">
                            <span>2.</span>
                            <span>登录入住</span>
                        </div>
                        <div className="txt">
                            使用手机的管理账号，依照入住指引完成个人实名信息
                        </div>
                    </div>
                    <div className="spot">•••••••</div>
                    <div className="corpWrap">
                        <div className="corpStep">
                            <span>3.</span>
                            <span>平台使用</span>
                        </div>
                        <div className="txt">
                            熟悉平台功能，了解操盘规则，看准行情走势，投资期货成为人生赢家

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


 class Connection extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div className="connection">
                <Header/>
                <div className="contain">
                    <Corp/>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Connection