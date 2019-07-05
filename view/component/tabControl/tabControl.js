import React, { Component } from 'react'
import RouteWithSubRoutes from '../../../../../core/router/router';

import {NavLink} from 'react-router-dom'

import './tabControl.css'

class TabsControl extends React.Component{
	constructor(  ){
		super(  )
		this.state = { 
			currentIndex : 0
		}
	}

	check_title_index( index ){
		return index === this.state.currentIndex ? "tab_title active-tab" : "tab_title"
	}

	check_item_index( index ){
		return index === this.state.currentIndex ? "tab_item show" : "tab_item"
	}

	render(){

		
        let _this = this
    
			return(
            
		
					<div className="tab_title_wrap">
						{ 
							React.Children.map( _this.props.children , ( element,index ) => {
								return(
									<NavLink to={element.props.add} onClick={ () => { _this.setState({ currentIndex : index }) } } className={ _this.check_title_index( index ) }>{ element.props.name} </NavLink>
								
									)
							}) 
							
						}
	
					</div>
			)
		

	}
}



export default TabsControl
