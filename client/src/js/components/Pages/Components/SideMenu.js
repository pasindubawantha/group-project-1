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
		return (<div>
			<h2>{this.props.name}</h2>
			<ul class="nav nav-pills nav-stacked">{this.createSideMenue(this.props.menuItems, this.props.concatURL)} </ul>
			</div>)
	}
}