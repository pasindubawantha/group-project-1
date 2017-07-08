import React from "react"
import { connect } from "react-redux"
import SideMenueItem from "./SideMenueItem.js"

@connect((store) => {
	return {//props
		apps: store.apps,
		url: store.url
	}
},)
export default class SideMenu extends React.Component {
	componentWillMount() {
		
		//this.props.dispatch(createUserSession('asd', 'asd'))
	}

	createSideMenue(appID){
		const { name, menueItems } = this.props.apps[this.props.appID]
		if(menueItems.length){
			return menueItems.map( item => <SideMenueItem key={item[0].viewID} linkArray={item} concatLink={[{"name":"Home","viewID":"Home"}].concat({"name": name, "viewID": this.props.appID})} />)
		}else{
			return (<a href="#" class="list-group-item"> None </a>)
		}
	}
	render() {
		return (<ul class="nav nav-pills nav-stacked">{this.createSideMenue(this.props.appID)} </ul>)
	}
}