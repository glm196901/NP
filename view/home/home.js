import React, {Component} from 'react';

import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';


import Header from '../common/header/header'
import Footer from '../common/footer/footer'



import './home.sass'
import 'animate.css'

// 第一屏 title 和 video
class ScreenTitle extends Component{
    render(){
        return(
            <div className={"screenTitle"}>
                <img src={this.props.src} alt=""/>
            </div>
        )
    }
}


class Video extends Component{
    constructor (props) {
        super(props);

        this.state = {
            videoURL: '../../assets/images/adVIdeo.mp4'
        }
    }    
    render(){
        return(
            <video id="backgroundVideo" loop data-autoplay muted>
                <source src={require('../../assets/images/adVIdeo.mp4')} type="video/mp4" />
            </video>
        )
    }
}


// 第二屏 手风琴样式

class AccordionNav extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isqualified: true,
            isBrief: false,
            isIdeaT: false,
        };

    }   
    showBrief = ()=>{
        this.setState({ isBrief:true , isqualified:false, isIdeaT:false })
    }
    showIdea = ()=>{
        this.setState({ isqualified:false, isBrief:false, isIdeaT:true })      
    }
    showQualified = ()=>{
        this.setState({ isIdeaT:false, isBrief:false, isqualified:true })      
    }
    render(){
        if(this.state.isqualified === true){ 
            return(
                <div className="accordionNav">
                    <div className="qualifiedTxt commonTxt">
                        <div className="wrapTxt delay-1s fadeOut">
                            <p>資質</p>
                            <p>本公司是一家獲得香港證監會發牌的持牌法團，獲核准從事第1類(證券交易)及第2類(期貨合約交易)受規管活動(CE號碼:BJH986)，並為香港聯合交易所有限公司及香港期貨交易所有限公司的交易所參與者。 </p>
                        </div>
                    </div>
                    <div className="briefTitle commonTitle" onMouseEnter={()=>{ this.showBrief() }}><p>简介</p></div>
                    <div className="ideaTitle commonTitle" onMouseEnter={()=>{ this.showIdea() }}><p>理念</p></div>
                </div>            
            )
         }
         else if(this.state.isBrief === true){
            return(
                <div className="accordionNav">
                    <div className="qualifiedTitle commonTitle" onMouseEnter={()=>{ this.showQualified() }}><p>资质</p></div>
                    <div className="briefTxt commonTxt">
                        <div className="wrapTxt">
                            <p>簡介</p>
                            <p>多年來，本公司紥根香港、放眼全球，憑藉集團穩健雄厚的實力，在業界建立了強大的網絡，除了活躍於香港股票及期貨市場外，業務範圍更伸展到多個期貨期權投資市場，包括美國芝加哥交易所集團(CME)、倫敦金屬交易所(LME)、洲際交易所(ICE) 、新加坡交易所(SGX) 、東京商品期貨交易所(TOCOM)、馬來西亞交易所(BMD)等，致力為客戶提供全方位的交易服務。</p>
                        </div>
                    </div>
                    <div className="ideaTitle commonTitle" onMouseEnter={()=>{ this.showIdea() }}>理念</div>
                </div>            
            )             
         }else{
            return(
                <div className="accordionNav">
                    <div className="qualifiedTitle commonTitle" onMouseEnter={()=>{ this.showQualified() }}>资质</div>
                    <div className="briefTitle commonTitle" onMouseEnter={()=>{ this.showBrief() }}>简介</div>
                    <div className="ideaTxt commonTxt">
                        <div className="wrapTxt">
                            <p>理念</p>
                            <p>本公司以“誠信、規範、專業、創新”為經營思想，以“客戶至上”為經營原則，以“專業創造價值”為核心理念。至誠的服務和至真的信譽，誠為客戶所信賴。信達期貨視客戶為上帝，視信譽為生命，尊重客戶權利，嚴守客戶秘密，竭誠為廣大客戶進行套期保值、規避風險、投</p>
                        </div>
                    </div>
                </div>            
            )                
         }

    }
}



// 第三屏 内容板
const padLists = [
    {icon:require("../../assets/images/pc.png"), title:"交易专线", txt:"低延迟交易系统，提供毫秒级下单速度"},
    {icon:require("../../assets/images/hot.png"), title:"熱門商品", txt:"原油、黃金、恒指等全球熱門商品任您選擇"},
    {icon:require("../../assets/images/vip.png"), title:"專享客服", txt:"24H客服熱線，針對用戶需求定制個性化服務"},
    {icon:require("../../assets/images/agency.png"), title:"代理傭金", txt:"低門檻，高傭金，邀請好友玩轉期貨"},
    {icon:require("../../assets/images/time.png"), title:"交易時長", txt:"23小時交易時長，隨時隨地盈利翻番"},
    {icon:require("../../assets/images/chase.png"), title:"壹鍵追反", txt:"行情反轉別擔心，壹鍵反單立馬行"},
    {icon:require("../../assets/images/gift.png"), title:"營銷能力", txt:"邀請好友註冊交易,成為賺錢專家"},
    {icon:require("../../assets/images/safe.png"), title:"安全保障", txt:"資金安全保障，防禦黑產攻擊"},

]


class Pad extends Component {
    render(){
        const { padList } = this.props
        return(
            <div className="pad">
                <img className="padIcon" src={padList.icon} />
                <div className="padTitle">{padList.title}</div>
                <div className="padTxt">{padList.txt}</div>
            </div>
        )
    }
}



const Fullpage = () => (
    <ReactFullpage navigation
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div id="_1stScreen" className="section">
                <Video/>
                <ScreenTitle src={require("../../assets/images/_1stTitle.png")} />
            </div>
            <div id="_2ndScreen" className="section">
                <ScreenTitle src={require("../../assets/images/_2ndTitle.png")}/>
                <AccordionNav/>
            </div>
            <div id="_3rdScreen" className="section">
                 <ScreenTitle src={require("../../assets/images/_3rdTitle.png")}/>
                <div className="wrapPad">
                    {padLists.map((padList, k)=> <Pad key={k} padList={padList}  /> )}
                </div>
                <ul className="friendLink">
                    <li>
                        <span>友情链接: </span>
                        <a href="https://www.cmegroup.com/">纽约商业交易所</a>
                    </li>
                    <li><a href="https://www2.sgx.com/">新加坡交易所</a></li>
                    <li><a href="http://www.shfe.com.cn/">上海期货交易所</a></li>
                    <li><a href="http://www.cffex.com.cn/">中国期货交易所</a></li>
                    <li><a href="https://www.eurexchange.com/exchange-en/">欧洲期货交易所 </a></li>
                </ul>
            </div>     
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );





class Contain extends Component{

  
    render(){
        return(
            <div className={"contain"}>
                <Fullpage/>
            </div>
        )
    }
}

 class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }




    render() {
        return (
            <div className={"home"}>
                <Header/>   
                <Contain/>
            </div>
        )
    }

}

export default Home