import React from "react"
import { connect } from "react-redux"
import SideMenu from "../../Components/SideMenu.js"

@connect((store) => {
	return {//props
		url: store.url,
		app: store.apps.Employee
	}
},)
export default class EmployeeApp extends React.Component {
	getTab(){
		if(this.props.url[2] == null){
			return <h2> Welcome to Employee App </h2>
		}
		var tabViewID = this.props.url[2].viewID
		switch(tabViewID){
			default : {
				return <h2> Welcome to Employee App </h2>
			}
		}
	}
	getSideMenu(){
		var url
		if(this.props.url[2] == null){
			url = [{name:"Home" ,viewID:"home"},{name:name ,viewID:"Employee"}]
			return <SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={this.props.url} />
		}
		var tabViewID = this.props.url[2].viewID
		url = [{name:"Home" ,viewID:"home"},{name:name ,viewID:"Employee"}].concat(this.props.url[2])
		switch(this.props.url[2].viewID){
			case "EmployeeViewEmployee" : {
				return <SideMenu menuItems={this.props.app.tabs["ViewEmployee"].menuItems} name={this.props.app.tabes["ViewEmployee"].name} concatURL={this.props.url} />
				break
			}
			
			default : {
				url = [{name:"Home" ,viewID:"home"},{name:name ,viewID:"Employee"}]
				return <SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={this.props.url} />
			}
		}
	}
	render() {
		var {menuItems , name, viewID} = this.props.app
		var url = [{name:"Home" ,viewID:"home"},{name:name ,viewID:"Customer"}]
		return  (
			<div class="row">
			  <div class="col-md-3">
			  {this.getSideMenu()}
			  </div>
			  <div class="col-md-9">
			  {this.getTab()}
			  </div>
			</div>
			)
	}
}