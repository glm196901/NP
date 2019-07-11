import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import RouteWithSubRoutes from '../../../../core/router/router';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';




import Header from '../common/header/header'
import Footer from '../common/footer/footer'


import './marketCneter.sass'
import '../../style/commonStyle/commonStyle.sass'

// 第一屏内容
import Stockindex from  '../marketCenter/stockindex'
import Domestic from '../marketCenter/domestic'
import International  from '../marketCenter/international'



// 第二屏内容
import DailyNews from '../infoCenter/dailyNews'
import TabsControl from '../component/tabControl/tabControl'
    
// 第三屏内容
import MarketInfo from '../infoCenter/marketInfo'
import InfoDetials from '../infoCenter/infoDetials'


// 第四屏内容
import EveryWeek from '../infoCenter/everyWeek'







const Fullpage = () => (
    

    
    <ReactFullpage navigation 
      render={({ state, fullpageApi }) => { 

        return (
          <ReactFullpage.Wrapper>
            <div id="_1stScreen" className="section">
                <div className="commonStyle">
                    <div className="slide">
                        <h3><Stockindex/></h3>
                    </div>
                    <div className="slide">
                        <h3><Domestic/></h3>
                    </div>
                    <div className="slide">
                        <h3><International/></h3>
                    </div>                    
                </div>
            </div>
            <div id="_2ndScreen" className="section">
                <div className="commonStyle">
                    <DailyNews/>
                </div>
            </div>
            <div id="_3rdScreen" className="section">
                <div className="commonStyle">
                   <MarketInfo/>
                </div>
            </div>     
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );






 class MarketCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        // 子路由局部渲染
        return (
            
            <div className="marketCenter">
                <Header/>
                <Fullpage  />
            </div>
            )
    }

}

export default MarketCenter