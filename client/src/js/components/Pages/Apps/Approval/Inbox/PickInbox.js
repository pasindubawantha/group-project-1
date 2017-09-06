//import libariys
import React from "react"
import { connect } from "react-redux"
import PickInboxMaterial from "./PickInboxMaterial"
import PickInboxPayment from "./PickInboxPayment"
import ViewDenied from "./ViewInbox"
import ButtonLink from "../../../Components/ButtonLink"

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class PickInbox extends React.Component {
	buttonAction(e) {
	}
	render() {
		var { url } = this.props
		if(url[3] == null){
			return (<div class="row">
			  <div class="col-md-6">
			  	<ButtonLink url={this.props.url.concat({name:'Pick Material Request', viewID:'ApprovalsPickInboxMaterial'})} name="Material Requests" onClick={this.buttonAction.bind(this)}/>
			  </div>
			  <div class="col-md-6">
			  	<ButtonLink url={this.props.url.concat({name:'Pick Payment Request', viewID:'ApprovalsPickInboxPayment'})} name="Payment Requests" onClick={this.buttonAction.bind(this)}/>
			  </div>
			</div>)
		}else if(url[4] == null){
			switch(url[3].viewID){
				case "ApprovalsPickInboxMaterial":{
					return (<PickInboxMaterial />)
				}
				case "ApprovalsPickInboxPayment":{
					return (<PickInboxPayment />)
				}
			}
		}else{
			switch(url[4].viewID){
				case "ApprovalsViewInboxMaterial":{
					return (<ViewInbox />)
				}
				case "ApprovalsViewInboxPayment":{
					return (<ViewInbox />)
				}
			}
		}
	}
}