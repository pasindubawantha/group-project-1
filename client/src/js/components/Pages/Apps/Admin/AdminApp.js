import React from "react"
import { connect } from "react-redux"
import SideMenu from "../../Components/SideMenu.js"
import MakePayments from "./MakePayments"

@connect((store) => {
	return {//props
		url: store.url,
		app: store.apps.Admin
	}
},)
export default class Cusotmer extends React.Component {
	render() {
		var {menuItems , name, viewID} = this.props.app
		var url = [{name:"Home" ,viewID:"home"},{name:name ,viewID:"Admin"}]
		return  (
			<div class="row">
			  <div class="col-md-3">
			  <SideMenu menuItems={menuItems} name={name} concatURL={url} />
			  </div>
			  <div class="col-md-9">
			  <MakePayments />
			  </div>
			</div>
			)
	}
}