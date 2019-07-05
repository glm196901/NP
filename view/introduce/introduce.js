import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import RouteWithSubRoutes from '../../../../core/router/router';



import Header from '../common/header/header'
import Footer from  '../common/footer/footer'
import TabsControl from '../component/tabControl/tabControl'

import '../introduce/introduce.sass'




class FutureTab extends Component{
    constructor(props){
        super(props);
        this.state = {
            active:0

        };
    }

    render(){
        return(
                <TabsControl>
                    <div add="/introduce/future" name="期货知识"></div>
                    <div add="/introduce/organization" name="期货组织结构"></div>
                    <div add="/introduce/guide" name="新手指南"></div>
                    <div add="/introduce/faq" name="热门FAQ"></div>
                    <div add="/introduce/partner" name="合作攻略"></div>
                </TabsControl>
        )
    }
}




export default class Introduce extends Component {
    render() {
        const subRoute = this.props.routes;
        return (
            <div className="introduce">
                <Header/>
                {/* <FutureContain/> */}
                <div className="futureContain">
                <FutureTab/>
                    {subRoute.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}                     
                </div>
                <Footer/>
            </div>
        )
    }
}
