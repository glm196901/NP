import React, { Component } from 'react'

import TitleBar from '../component/titleBar/titleBar'

import './faq.sass'

export default class Faq extends Component {
    render() {
        return (
            <div className="faq">
                <div className="titleName">热门FAQ</div>
                <TitleBar txt={"开户 ？"} />
                <div className="IntroduceWord">【如何開戶】 用戶只需使用手機號註冊即可進行實盤交易。</div>
                <div className="IntroduceWord">【密碼設定】 註冊成功即可設置登錄密碼和提款密碼（首次設置提款密碼需先輸入登錄密碼）。</div>
                <TitleBar txt={"交易期货须知 ?"} />
                <div className="IntroduceWord">【止 盈 止 损】 下单成功后可修改止盈止损值，及时止盈止损，规避风险投资。5、商品规则：不同商品规则不同，点击。 想了解的商品，在行情页面点击“？”图标，即可。</div>
                <div className="IntroduceWord">【履约保证金】 保证金是清算机构为了防止指数期货交易者违约而要求交易者在购买合约时必须交纳的一部分资
                      金，保证金水平的高低，将决定股指期货的杠杆效应，保证金水平过高，将抑制市场的交易量，而
                      保证金的水平过低，将可能引致过度的投机，增加市场的风险。</div>
                <div className="IntroduceWord">【交易手续费】买卖期货合约的所花费用，发生的每笔费用从客户账户中自动扣除。根据已公布的沪深300股指期
                      货合约，交易手续费未定。按证监会有关规定，期货合约中交易所向会员收取的单边交易手续费基
                      本上为合约面值的万分之二，按10万面值计算每个会员单边交易手续为20元／张。按照惯例，预计
                      交易所会员会另外向期货合约持有者多收取万分之三的手续费，一份合约的交易成本预计为交易额
                      的万分之五。</div>
                <TitleBar txt={"充提介绍 ?"} />
                <div className="IntroduceWord">【 充 值 】 最低充值100元起，24小時提供充值服務，充值成功後1-10分鐘到賬。·</div>
                <div className="IntroduceWord">【 提 款 】 提款時間為周壹至周五09:00-23:00，處理時間1-30分鐘，具體依據銀行處理時間為準。</div>
                <div className="IntroduceWord">● 香港信達期貨提供全球超過150個合約供您選擇交易【手續費】充值無需任何手續費，提款無需扣手續費，若充值後未交易將手續費部分手續費。</div>                
            </div>
        )
    }
}
