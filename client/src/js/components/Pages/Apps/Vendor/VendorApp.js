//import liaberys
import React from "react"
import { connect } from "react-redux"
import SideMenu from "../../Components/SideMenu.js"
import NewVendor from "./NewVendor"
import PickVendor from "./PickVendor"
import ViewVendor from "./ViewVendor/ViewVendor"
import EditVendor from "./ViewVendor/EditVendor"
//connect to staore
@connect((store) => {
	return {//props
		url: store.url,
		app: store.apps.Vendor
	}
},)
//class for vendor apps
export default class VendorApp extends React.Component {
	getTab(){
		if(this.props.url[2] == null){
			return (
				<div class="panel panel-default">
				  <div class="panel-body">
				    <div class="jumbotron">
					  <h1>&nbsp;Welcome to Vendors App</h1>
					  <p> &nbsp; &nbsp; Manage Your Vendors here</p>
					  <p>&nbsp; &nbsp; <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
					</div>
				  </div>
				</div>)
		}
		var tabViewID = this.props.url[2].viewID
		switch(tabViewID){
			case "VendorAll":{
				return(<PickVendor />)
				break	
			}
			case "VendorNewVendor":{
				return(<NewVendor />)
				break
			}
			case "VendorViewVendor":{
				return(<ViewVendor />)
				break
			}
			case "VendorEditVendor":{
				return(<EditVendor />)
				break
			}
			default : {
				return <h2> Welcome to Vendor App </h2>
			}
		}
	}
	getSideMenue(){
		var url = [{name:"Home" ,viewID:"Home"},{name:this.props.app.name ,viewID:"Vendor"}]
		if(this.props.url[2] == null){
			return(<SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={url} />)
		}
		var tabViewID = this.props.url[2].viewID
		switch(tabViewID){
			case "VendorAll":{
				return(<SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={url} />)
				break	
			}
			case "VendorNewVendor":{
				return(<SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={url} />)
				break
			}
			case "VendorViewVendor":{
				return(<SideMenu menuItems={this.props.app.tabs.ViewVendor.menuItems} name={this.props.app.tabs.ViewVendor.name} concatURL={url} />)
				break
			}
			case "VendorEditVendor":{
				return(<SideMenu menuItems={this.props.app.tabs.ViewVendor.menuItems} name={this.props.app.tabs.ViewVendor.name} concatURL={url} />)
				break
			}
			default : {
				return <h2> Welcome to Vendor App </h2>
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