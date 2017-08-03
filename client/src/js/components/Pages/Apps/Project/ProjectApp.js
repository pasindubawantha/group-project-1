import React from "react"
import { connect } from "react-redux"
import SideMenu from "../../Components/SideMenu.js"

@connect((store) => {
	return {//props
		url: store.url,
		app: store.apps.Project
	}
},)
export default class ProjectApp extends React.Component {
	getTab(){
		if(this.props.url[2] == null){
			return <h2> Welcome to Project App </h2>
		}
		var tabViewID = this.props.url[2].viewID
		switch(tabViewID){
			case "ProjectAll":{
				return(<PickCustomer />)
				break	
			}
			case "CustomerNewCustomer":{
				return(<NewCustomer />)
				break
			}
			case "CustomerViewCustomer":{
				return(<ViewCustomer />)
				break
			}
			case "CustomerEditCustomer":{
				return(<EditCustomer />)
				break
			}
			case "CustomerMakePayment":{
				return(<MakePayment />)
				break
			}
			default : {
				return <h2> Welcome to Customer App </h2>
			}
		}
	}
	getSideMenue(){
		var url = [{name:"Home" ,viewID:"Home"},{name:this.props.app.name ,viewID:"Customer"}]
		if(this.props.url[2] == null){
			return(<SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={url} />)
		}
		var tabViewID = this.props.url[2].viewID
		switch(tabViewID){
			case "CustomerAll":{
				return(<SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={url} />)
				break	
			}
			case "CustomerNewCustomer":{
				return(<SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={url} />)
				break
			}
			case "CustomerViewCustomer":{
				return(<SideMenu menuItems={this.props.app.tabs.ViewCustomer.menuItems} name={this.props.app.tabs.ViewCustomer.name} concatURL={url} />)
				break
			}
			case "CustomerEditCustomer":{
				return(<SideMenu menuItems={this.props.app.tabs.ViewCustomer.menuItems} name={this.props.app.tabs.ViewCustomer.name} concatURL={url} />)
				break
			}
			case "CustomerMakePayment":{
				return(<SideMenu menuItems={this.props.app.tabs.ViewCustomer.menuItems} name={this.props.app.tabs.ViewCustomer.name} concatURL={url} />)
				break
			}
			default : {
				return <h2> Welcome to Customer App </h2>
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