import React from "react"
import { connect } from "react-redux"
import SideMenu from "../../Components/SideMenu.js"
import NewCustomer from "./NewCustomer"
import PickCustomer from "./PickCustomer"
import ViewCustomer from "./ViewCustomer"

@connect((store) => {
	return {//props
		url: store.url,
		app: store.apps.Customer
	}
},)
export default class CusotmerApp extends React.Component {
	getTab(){
		if(this.props.url[2] == null){
			return <h2> Welcome to Customer App </h2>
		}
		var tabViewID = this.props.url[2].viewID
		switch(tabViewID){
			case "CustomerAll":{
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
			default : {
				return <h2> Welcome to Customer App </h2>
			}
		}
	}
	render() {
		var {menuItems , name, viewID} = this.props.app
		var url = [{name:"Home" ,viewID:"Home"},{name:name ,viewID:"Customer"}]
		return  (
			<div class="row">
			  <div class="col-md-3">
			  <SideMenu menuItems={menuItems} name={name} concatURL={url} />
			  </div>
			  <div class="col-md-9">
			  {this.getTab()}
			  </div>
			</div>
			)
	}
}