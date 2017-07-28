import React from "react"
import { connect } from "react-redux"
import SideMenu from "../../Components/SideMenu.js"
import NewEmployee from "./NewEmployee"
import PickEmployee from "./PickEmployee"
import ViewEmployee from "./ViewVendor/ViewEmployee"
import EditEmployee from "./ViewVendor/EditEmployee"

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
			case "EmployeeAll":{
				return(<PickEmployee />)
				break	
			}
			case "EmployeeNewEmployee":{
				return(<NewEmployee />)
				break
			}
			case "EmployeeViewEmployee":{
				return(<ViewEmployee />)
				break
			}
			case "EmployeeEditEmployee":{
				return(<EditEmployee />)
				break
			}
			default : {
				return <h2> Welcome to Employee App </h2>
			}
		}
	}
	getSideMenue(){
		var url = [{name:"Home" ,viewID:"Home"},{name:this.props.app.name ,viewID:"Employee"}]
		if(this.props.url[2] == null){
			return(<SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={url} />)
		}
		var tabViewID = this.props.url[2].viewID
		switch(tabViewID){
			case "EmployeeAll":{
				return(<SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={url} />)
				break	
			}
			case "EmployeeNewEmployee":{
				return(<SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={url} />)
				break
			}
			case "EmployeeViewEmployee":{
				return(<SideMenu menuItems={this.props.app.tabs.ViewEmployee.menuItems} name={this.props.app.tabs.ViewEmployee.name} concatURL={url} />)
				break
			}
			case "EmployeeEditEmployee":{
				return(<SideMenu menuItems={this.props.app.tabs.ViewEmployee.menuItems} name={this.props.app.tabs.ViewEmployee.name} concatURL={url} />)
				break
			}
			default : {
				return <h2> Welcome to Employee App </h2>
			}
		}
	}
	render() {
		return  (
			<div class="row">
			  <div class="col-md-3">
			  {this.getSideMenue()}
			  </div>
			  <div class="col-md-9">
			  {this.getTab()}
			  </div>
			</div>
			)
	}
}