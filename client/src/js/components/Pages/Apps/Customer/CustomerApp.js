//import libariys
import React from "react"
import { connect } from "react-redux"
import SideMenu from "../../Components/SideMenu.js"
import NewCustomer from "./NewCustomer"
import PickCustomer from "./PickCustomer"
import ViewCustomer from "./ViewCustomer/ViewCustomer"
import EditCustomer from "./ViewCustomer/EditCustomer"
import MakePayment from "./ViewCustomer/MakePayment/MakePayment"
//connect to store object
@connect((store) => {
	return {//props
		url: store.url,
		app: store.apps.Customer
	}
},)
//class creat a cusotmerapp 
export default class CusotmerApp extends React.Component {
	//creat a tabs
	getTab(){
		if(this.props.url[2] == null){
			return (<div class="panel panel-default">
				  <div class="panel-body">
				    <div class="jumbotron">
					  <h1>&nbsp;Welcome to Customers App</h1>
					  <p> &nbsp; &nbsp; Manage Your Customers here</p>
					  <p>&nbsp; &nbsp; <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
					</div>
				  </div>
				</div>)
		}
	// tabs views
		var tabViewID = this.props.url[2].viewID
		switch(tabViewID){
	//customer all tab
			case "CustomerAll":{
				return(<PickCustomer />)
				break	
			}
	//newcustomer tab
			case "CustomerNewCustomer":{
				return(<NewCustomer />)
				break
			}
	//viewcustomer tab		
			case "CustomerViewCustomer":{
				return(<ViewCustomer />)
				break
			}
	//editcustomer tab
			case "CustomerEditCustomer":{
				return(<EditCustomer />)
				break
			}
	//Customerpayment tab		
			case "CustomerMakePayment":{
				return(<MakePayment />)
				break
			}
	//not select any tab go to homepage of customer		
			default : {
				return <h2> Welcome to Customer App </h2>
			}
		}
	}
	//to get side menu
	getSideMenue(){
		var url = [{name:"Home" ,viewID:"Home"},{name:this.props.app.name ,viewID:"Customer"}]
		if(this.props.url[2] == null){
			return(<SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={url} />)
		}
		
		var tabViewID = this.props.url[2].viewID
		switch(tabViewID){
			//customer sidemenu
			case "CustomerAll":{
				return(<SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={url} />)
				break	
			}
			//newcustomer sidemenu
			case "CustomerNewCustomer":{
				return(<SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={url} />)
				break
			}
			//viewcustomer sidemenu
			case "CustomerViewCustomer":{
				return(<SideMenu menuItems={this.props.app.tabs.ViewCustomer.menuItems} name={this.props.app.tabs.ViewCustomer.name} concatURL={url} />)
				break
			}
			//editcustomer sidemenu
			case "CustomerEditCustomer":{
				return(<SideMenu menuItems={this.props.app.tabs.ViewCustomer.menuItems} name={this.props.app.tabs.ViewCustomer.name} concatURL={url} />)
				break
			}
			//makepayment sidemenu
			case "CustomerMakePayment":{
				return(<SideMenu menuItems={this.props.app.tabs.ViewCustomer.menuItems} name={this.props.app.tabs.ViewCustomer.name} concatURL={url} />)
				break
			}
			//goto main page
			default : {
				return <h2> Welcome to Customer App </h2>
			}
		}
	}
	//this is a render method.call to getsidemeu and gettab
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