import Home from '../view/home/home'
import InfoCenter from '../view/infoCenter/infoCenter';
import Introduce from '../view/introduce/introduce';
import MarketCenter from '../view/marketCenter/marketCneter'
import Download from '../view/download/download';
import Connection from '../view/connection/connection'


// 子页面
// 公司介绍
import Future from '../view/introduce/future'
import Organizaition from '../view/introduce/organization'
import Guide from  '../view/introduce/guide'
import Faq from '../view/introduce/faq'
import Partner from '../view/introduce/partner'

// 行情中心
import Domestic from '../view/marketCenter/domestic'
import International from '../view/marketCenter/international'
import StockIndex from '../view/marketCenter/stockindex'

//资讯中心
import MarketInfo from '../view/infoCenter/marketInfo'
import InfoDetials from '../view/infoCenter/infoDetials'
import EveryWeek from '../view/infoCenter/everyWeek'
import DailyNews from '../view/infoCenter/dailyNews'


// 将组件变量名字设置好对应的path路径,exact表示精确匹配.
export default [
    {
        path: '/',
        exact: true,
        // component: Home 
        component: Home 
    },
    {
        path: '/Download',
        component: Download 
    },
    {
        path: '/introduce',
        component: Introduce,    
        routes: [
            {
                path: '/introduce/future',
                component: Future
            },
            {
                path: '/introduce/organization',
                component: Organizaition,
            },
            {
                path: '/introduce/guide',
                component: Guide
            },
            {
                path: '/introduce/faq',
                component: Faq
            },
            {
                path: '/introduce/partner',
                component: Partner
            }
        ]

    },
    {
        path: '/marketcenter',
        component: MarketCenter,
        routes: [
            {
                path: '/marketcenter/stockindex',
                component: StockIndex,
            },
            {
                path: '/marketcenter/domestic',
                component: Domestic,
            },
            {
                path: '/marketcenter/international',
                component: International
            }
        ]

    },
    {
        path: '/infocenter',
        component: InfoCenter,
        routes: [
            {
                path: '/infocenter/marketinfo',
                component: MarketInfo,
            },
            {
                path: '/infocenter/infodetials:id',
                component: InfoDetials,
            },
            {
                path: '/infocenter/dailynews',
                component: DailyNews,
            },
            {
                path: '/infocenter/everyweek',
                component: EveryWeek
            }
        ]

    },
    {
        path: '/connection',
        component: Connection
    }
]