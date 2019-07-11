import React, { Component } from 'react'

import TitleBar from '../component/titleBar/titleBar'


import './future.sass'




export default class Future extends Component {
    render() {
        return (
            <div className="future">
                <div className="titleName">期货</div>
                <TitleBar txt={"什么是期货 ？"} />
                <div className="IntroduceWord">期貨合約是買賣雙方根據壹個產品約定壹個價格在未來的某日進行交割的標準化合約。期貨合約常交易的品種包括原油、貴金屬、谷物、貨幣、股指等。</div>
                <TitleBar txt={"为什么交易期货 ?"} />
                <div className="IntroduceWord">● 期貨合約為杠桿交易合約。投資人可以使用極小的資金作為交易成本來交易壹個較大價值的合約，比如，您僅需支付初始保證金2千2百新幣即可購買1手價值為7萬5千新幣的 MSCI 新加坡股指期貨。</div>
                <div className="IntroduceWord">● 若市場價格走向於您有利，您的利潤將成倍擴大；相反地，若市場價格走向於您不利，您的損失也會被成倍放大</div>
                <div className="IntroduceWord">● 無論市場漲跌，都能把握機會進行交易</div>
                <div className="IntroduceWord">● 主流的期貨合約都具有極佳的市場流動性</div>
                <div className="IntroduceWord">● 多樣化的交易品種讓您更好地管理您的投資風險組合</div>
                <div className="IntroduceWord">● 香港信達期貨提供全球超過150個合約供您選擇交易</div>
            </div>
        )
    }
}
