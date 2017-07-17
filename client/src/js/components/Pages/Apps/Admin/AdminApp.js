import React from "react"
import { connect } from "react-redux"
import SideMenu from "../../Components/SideMenu.js"
import MakePayments from "./MakePayments"
import ViewAdminCosts from "./ViewAdminCosts"

@connect((store) => {
	return {//props
		url: store.url,
		app: store.apps.Admin
	}
},)
export default class AdminApp extends React.Component {
	getTab(){
		var tabViewID = this.props.url[2].viewID
		switch(tabViewID){
			case "AdminMakePayment":{
				return(<MakePayments />)
				break	
			}
			case "AdminViewAdminCosts":{
				return(<ViewAdminCosts />)
				break
			}
			default : {
				return <h2> Welcome to Admin Managemnet App </h2>
			}
		}
	}
	render() {
		var {menuItems , name, viewID} = this.props.app
		var url = [{name:"Home" ,viewID:"home"},{name:name ,viewID:"Admin"}]
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