//import libariys
import React from "react"
import { connect } from "react-redux"
import PickApprovedMaterial from "./PickApprovedMaterial"
import PickApprovedPayment from "./PickApprovedPayment"
import ViewApproved from "./ViewApproved"
import ButtonLink from "../../../Components/ButtonLink"

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class PickApproved extends React.Component {
	buttonAction(e) {
	}
	render() {
		var { url } = this.props
		if(url[3] == null){
			return (<div class="row">
			  <div class="col-md-6">
			  	<ButtonLink url={this.props.url.concat({name:'Pick Material Request', viewID:'ApprovalsPickApprovedMaterial'})} name="Material Requests" onClick={this.buttonAction.bind(this)}/>
			  </div>
			  <div class="col-md-6">
			  	<ButtonLink url={this.props.url.concat({name:'Pick Payment Request', viewID:'ApprovalsPickApprovedPayment'})} name="Payment Requests" onClick={this.buttonAction.bind(this)}/>
			  </div>
			</div>)
		}else if(url[4] == null){
			switch(url[3].viewID){
				case "ApprovalsPickApprovedMaterial":{
					return (<PickApprovedMaterial />)
				}
				case "ApprovalsPickApprovedPayment":{
					return (<PickApprovedPayment />)
				}
			}
		}else {
			switch(url[4].viewID){
				case "ApprovalsViewApprovedMaterial":{
					return (<ViewApproved />)
				}
				case "ApprovalsViewApprovedPayment":{
					return (<ViewApproved />)
				}
			}
		}
	}
}