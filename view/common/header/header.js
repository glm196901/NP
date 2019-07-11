import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import ReactDOM from 'react-dom'

import './header.sass'
import 'antd/dist/antd.css'



    
// class 

class Header extends Component {

    

componentWillMount(){
    // this.translate()
  

}



    translate (){
        let s = document.querySelector("#jsonp");
        s&&s.parentNode.removeChild(s);
        var script = document.createElement("script");
        script.id = "jsonp";
        script.src = 'http://translate.google.cn/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(script);

        script.onload = 
            function(){
                console.log(window.google)
                let google = window.google
                if(google.translate.TranslateElement){
                new google.translate.TranslateElement({
                        pageLanguage: '',
                        includedLanguages: 'zh-CN,zh-TW',
                        autoDisplay: true,       
                        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    }, 'google_translate_element')   
                }else{
                    window.googleTranslateElementInit = ()=>{
                        new window.google.translate.TranslateElement({
                            pageLanguage: '',
                            includedLanguages: 'zh-CN,zh-TW',
                            autoDisplay: true,       
                            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                        }, 'google_translate_element') 

                    }
                } 


                }

            }


        
        
 

    

    componentWillUnmount(){
        this.translate = null
    }


componentDidMount(){
//  console.log(window.google)

 
}
    
    render() {
        return (
                <div className={"navBox"}>

                    <img  className="cfLogo" src={require("../../../assets/images/logo.png")} />
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
                        <li>
                            <div id="google_translate_element" key={new Date().getTime()}>
                            </div>
                        </li>                    
                    </ul>
                </div>
        );
    }
}

export default Header;