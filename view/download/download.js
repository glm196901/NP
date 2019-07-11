import React, {Component} from 'react';



import Header from '../common/header/header'



import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';



import './download.sass'
import 'animate.css'



// 第一屏内容
class FirstScreen extends Component{

    render(){       
        return(
            <div className="firstScreen">
                <div id="phoneStandWrap">
                    <img id="phoneStand" className="" src={require("../../assets/images/phoneStand.png")} />
                </div>
                <div>
                    <div  className="word_1 ">
                        <div id="wrapWord">
                            <img  id="" src={require("../../assets/images/xin.png")} />
                            <img  src={require("../../assets/images/da.png")} />
                            <img className="word_2" src={require("../../assets/images/futureVphone.png")} alt=""/>
                        </div>
                    </div>
                    <div id="qrBox">
                        <div id="ad" className="commonQr">
                            <img src={require("../../assets/images/andriodQr.png")} alt=""/>
                            <p>Andriod扫码下载</p>
                        </div>
                        <div  id="ios"  className="commonQr">
                            <img src={require("../../assets/images/iosQr.png")} alt=""/>
                            <p>ios扫码下载</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class FriendLink extends Component{

    componentWillMount(){

        


    }
    
    render(){

        return(
            <ul id="friendLink">
                <li>
                    <span>友情链接: </span>
                    <a href="">纽约商业交易所</a>
                </li>
                <li><a href="">新加坡交易所</a></li>
                <li><a href="">上海期货交易所</a></li>
                <li><a href="">中国期货交易所</a></li>
                <li><a href="">欧洲期货交易所 </a></li>
            </ul>   
        )
    }
}


// 第二屏内容
class SecondScreen extends Component{
    render(){
        return(
            <div className="secondScreen">
                    <div id="lyingPhone">
                        <img  className="" src={require("../../assets/images/lyingPhone.png")} alt=""/>
                        <img id="pop" src={require("../../assets/images/pop.png")} alt=""/>
                    </div>
                    <div id="des">
                        <p>持仓盈亏实时更新</p>
                        <p>
                            <span>一机在手</span>
                            <span>赢遍天下</span>
                        </p>
                        <p>持仓信息即时更新，条理分明展现复杂数据，只需登陆信达期货手机客户端，立马查看所有盈亏记录信息，轻松快速管理您的财富。</p>
                    </div>
            </div>
        )
    }
} 

// 第三屏内容
class ThirdScreen extends Component{
    render(){
        return(
            <div className="thirdScreen">
                <div id="upContent">
                    <p>信息即时推送</p>
                    <p>
                        <span>福利优惠</span>
                        <span style={ {"fontSize" : "3vw"} }>·</span>
                        <span>全面囊括</span>
                    </p>
                    <p>持仓信息即时更新，条理分明展现复杂数据，只需登陆信达期货手机客户端，立马查看所有盈亏记录信息，轻松快速管理您的财富。</p>
                </div>
                <div id="downContent">
                    <div className="commonSize" id="lefter">
                        <img src={require("../../assets/images/water.png")} alt=""/>
                        <img src={require("../../assets/images/goldCoin.png")} alt=""/>
                        <img src={require("../../assets/images/word2.png")} alt=""/>
                        <img src={require("../../assets/images/coin.png")} alt=""/>
                    </div>
                    <div className="commonSize" id="left">
                        <img src={require("../../assets/images/word2.png")} alt=""/>
                        <img src={require("../../assets/images/redPocket.png")} alt=""/>
                        <img src={require("../../assets/images/word2.png")} alt=""/>
                        <img src={require("../../assets/images/trumpet.png")} alt=""/>
                        <img src={require("../../assets/images/word2.png")} alt=""/>
                    </div>
                    <img className="commonSize" id="middle" src={require("../../assets/images/iphone.png")} alt=""/>
                    <div className="commonSize" id="right">
                        <img src={require("../../assets/images/grid.png")} alt=""/>
                        <img src={require("../../assets/images/word5.png")} alt=""/>
                        <img src={require("../../assets/images/stock.png")} alt=""/>
                        <img src={require("../../assets/images/visa.png")} alt=""/>
                    </div>
                    <div className="commonSize" id="righter">
                        <img src={require("../../assets/images/giftBox.png")} alt=""/>
                        <img src={require("../../assets/images/word5.png")} alt=""/>
                        <img src={require("../../assets/images/pig.png")} alt=""/>
                        <img src={require("../../assets/images/word5.png")} alt=""/>                        
                    </div>
                </div>
            </div>
        )
    }
}





class Fullpage extends Component{

    _2ndFadeIn(){


    }

    render(){
        return(
            <ReactFullpage navigation 
            afterLoad={(origin, destination, direction) => {
                 // 第一屏
                 const phoneStand = document.getElementById("phoneStand")
                 const wrapWord= document.getElementById("wrapWord")
                 const ad = document.getElementById("ad")
                 const ios = document.getElementById("ios")
                 const friendLink = document.getElementById("friendLink")
                 // 第二屏
                 const lyingPhone = document.getElementById("lyingPhone")
                 const pop = document.getElementById("pop")
                 const des =  document.getElementById("des")
                // 第三屏
                const upContent = document.getElementById("upContent")
                const middle = document.getElementById("middle")
                const left =  document.getElementById("left")     
                const lefter =  document.getElementById("lefter")   
                const right = document.getElementById("right")   
                const righter = document.getElementById("righter")            


                // 第二屏
                 if(destination.index === 0){
                    phoneStand.classList.add('animated', 'fadeInLeft')
                    phoneStand.setAttribute("style", "")
                    wrapWord.classList.add('animated', 'fadeInRight')
                    wrapWord.setAttribute("style", "")
                    ad.classList.add('animated', 'fadeInDown')
                    ad.setAttribute("style", "")
                    ios.classList.add('animated', 'fadeInDown')
                    ios.setAttribute("style", "")
                    friendLink.classList.add('animated', 'fadeInUp')
                    friendLink.setAttribute("style", "")                 
                }else{
                    phoneStand.setAttribute("style", "display:none")
                    phoneStand.classList.remove('animated', 'fadeInLeft')
                    wrapWord.classList.remove('animated', 'fadeInRight')
                    wrapWord.setAttribute("style", "display:none")
                    ad.classList.remove('animated', 'fadeInDown')
                    ad.setAttribute("style", "display:none")
                    ios.classList.remove('animated', 'fadeInDown')
                    ios.setAttribute("style", "display:none")
                    friendLink.classList.remove('animated', 'fadeInUp')
                    friendLink.setAttribute("style", "display:none")
                }
                // 第二屏
                if(destination.index === 1){
                    lyingPhone.classList.add('animated', 'fadeIn', )
                    lyingPhone.setAttribute("style", "")
                    lyingPhone.addEventListener('animationend', function() {
                        pop.setAttribute("style", "transition: transform 0.6s; transform: translateY(-2.5vw);")
                    })
                    des.classList.add('animated', 'fadeIn', )
                    des.setAttribute("style", "")

                }else{
                    lyingPhone.setAttribute("style", "display:none")
                    lyingPhone.classList.remove('animated', 'fadeIn')   
                    pop.setAttribute("style", "transition: transform 0s; transform: translateY(0);")    
                    des.setAttribute("style", "display:none")
                    des.classList.remove('animated', 'fadeIn')              
                }

            // 第三屏
            if(destination.index === 2){
                upContent.classList.add('animated', 'fadeInDown', )
                upContent.setAttribute("style", "")
                middle.classList.add('animated', 'fadeInUp', )
                middle.setAttribute("style", "")
                left.classList.add('animated', 'fadeInLeft', 'delay-1s')
                left.setAttribute("style", "")
                lefter.classList.add('animated', 'fadeInLeft', 'delay-2s')
                lefter.setAttribute("style", "")     
                right.classList.add('animated', 'fadeInRight', 'delay-1s')
                right.setAttribute("style", "")
                righter.classList.add('animated', 'fadeInRight', 'delay-2s')
                righter.setAttribute("style", "")                             


            }else{
                upContent.setAttribute("style", "display:none")
                upContent.classList.remove('animated', 'fadeInDown')   
                middle.setAttribute("style", "display:none")
                middle.classList.remove('animated', 'fadeInUp')   
                left.classList.remove('animated', 'fadeInLeft')
                left.setAttribute("style", "display:none")
                lefter.classList.remove('animated', 'fadeInLeft')
                lefter.setAttribute("style", "display:none")  
                right.classList.remove('animated', 'fadeInRight')
                right.setAttribute("style", "display:none")
                righter.classList.remove('animated', 'fadeInRight')
                righter.setAttribute("style", "display:none")                      
            }            

            }}
              render={({ state, fullpageApi }) => { 
        
                return (
                  <ReactFullpage.Wrapper>
                    <div id="_1stScreen" className="section ">     
                        <FirstScreen/>
                        <FriendLink/>
                    </div>
                    <div id="_2ndScreen" className="section">
                        <SecondScreen/>
                    </div>
                    <div id="_3rdScreen" className="section">
                    <ThirdScreen/>
                    </div>     
                  </ReactFullpage.Wrapper>
                );
              }}
            />
        )
    }
}









 class Download extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {




        return (
            <div className={"download"}>
                <Header/>
                <Fullpage/>
            </div>
        )
    }

}

export default Download