import React from "react"
import SideMenueItem from "./SideMenueItem.js"

export default class SideMenu extends React.Component {
	createSideMenue(menuItems, concatURL){
		if(menuItems.length){
			return menuItems.map( item => <SideMenueItem key={item[0].viewID} linkArray={item} concatLink={concatURL} />)
		}else{
			return (<a href="#" class="list-group-item"> None </a>)
		}
	}
	render() {
		return (<div class="panel panel-default">
			  <div class="panel-heading">
			    <h3 class="panel-title">{this.props.name}</h3>
			  </div>
			  <div class="panel-body">
			    <ul class="nav nav-pills nav-stacked">{this.createSideMenue(this.props.menuItems, this.props.concatURL)} </ul>
			  </div>
			</div>)
	}
}