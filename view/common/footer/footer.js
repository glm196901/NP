import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Link, Switch,Redirect} from 'react-router-dom';



import './footer.sass';

const navItems = [
    // ,list2:'公司动态', list2Add: '/introduce/dynamics'
    {title:'新手入门', add:"/introduce/guide", list1:"新手指南", list1Add:"/introduce/guide", list2:"热门FAQ", list2Add:"/introduce/faq", list3:"合作攻略", list3Add:"/introduce/partner", list4:"期货知识", list4Add:"/introduce/future"},
    {title:'服务支持', list1:"QQ：2711703195" },
    {title:'友情链接', list1:'紐約商業交易所', list1Add:'https://www.cmegroup.com/', list2:'新加坡交易所', list2Add:'https://www2.sgx.com/', list3:'上海期貨交易所' , list3Add:'http://www.shfe.com.cn/', list4:'中國期貨交易所', list4Add:'http://www.cffex.com.cn/',list4:'欧洲期货交易所', list4Add:'https://www.eurexchange.com/exchange-en/' },
    {title:'合作洽谈', list1: '點擊此與我聯系'},
    // {title:'下载中心', add:'/download'},    
]





class NavContain extends Component {
    render () {
        const { navItem } = this.props
        if(navItem.title === '友情链接'){
            return (
              <ul className={"navItem"}>
                <li>
                  <NavLink to={navItem.add ? navItem.add : "#"}>{navItem.title}</NavLink>
                </li>
                <ul className={"navList"}>
                  <li>
                      <a href={navItem.list1Add}>{navItem.list1}</a>
                  </li>
                  <li>
                  <a href={navItem.list2Add}>{navItem.list2}</a>
                  </li>
                  <li>
                  <a href={navItem.list3Add}>{navItem.list3}</a>
                  </li>
                  <li>
                  <a href={navItem.list4Add}>{navItem.list4}</a>
                  </li>
                  <li>
                  <a href={navItem.list5Add}>{navItem.list5}</a>
                  </li>
                </ul>
    
              </ul>        
          )
        }else{
          return (
            <ul className={"navItem"}>
              <li>
                <NavLink to={navItem.add ? navItem.add : "#"}>{navItem.title}</NavLink>
              </li>
              <ul className={"navList"}>
                <li>
                  {}
                  <NavLink to={navItem.list1Add ? navItem.list1Add : "#"}>{navItem.list1}</NavLink>
                </li>
                <li>
                  <NavLink to={navItem.list2Add ? navItem.list2Add : "#"}>{navItem.list2}</NavLink>
                </li>
                <li>
                  <NavLink to={navItem.list3Add ? navItem.list3Add : "#"}>{navItem.list3}</NavLink>
                </li>
                <li>
                  <NavLink to={navItem.list4Add ? navItem.list4Add : "#"}>{navItem.list4}</NavLink>
                </li>
              </ul>
  
            </ul>        
        )
        }

    }
  }



class Nav extends Component {
    render() {
        return (
              <div className={"nav"} style={{ height:"12vw" }}>
                {navItems.map((navItem,i) => <NavContain key={i} navItem={navItem} />)}
                <div className="downloadFooter">
                <NavLink className="downWord" to="/download">下载中心</NavLink>
                  <div className="downloadWrap">
                    <div >
                      <img src={require("../../../assets/images/iosQr.png")} />
                      <p>苹果下载</p>
                    </div>
                    <div>
                      <img src={require("../../../assets/images/andriodQr.png")} />
                      <p>安卓下载</p>
                    </div>
                  </div>
                </div>
              </div>
        );
    }
}



class CopyRight extends Component{
  state={
    text:"投资有风险 入市需谨慎 | 香港信达期货有限公司版权所有©2015-2017",
  }
  render(){
    return(
      <div className={"copyRight"}>{this.state.text}</div>
    )
  }
}

class Footer extends Component {
  render() {
      return (
          <div className={'footerFC swiper-slide'}>
            <Nav/>
            <CopyRight/>
          </div>
      );
  }
}



export default Footer;