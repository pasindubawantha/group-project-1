//import libariys
import React from "react"
import { connect } from "react-redux"
import PickPendingMaterial from "./PickPendingMaterial"
import PickPendingPayment from "./PickPendingPayment"
import ViewDenied from "./ViewPending"
import ButtonLink from "../../../Components/ButtonLink"

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class PickPending extends React.Component {
	buttonAction(e) {
	}
	render() {
		var { url } = this.props
		if(url[3] == null){
			return (<div class="row">
			  <div class="col-md-6">
			  	<ButtonLink url={this.props.url.concat({name:'Pick Material Request', viewID:'ApprovalsPickPendingMaterial'})} name="Material Requests" onClick={this.buttonAction.bind(this)}/>
			  </div>
			  <div class="col-md-6">
			  	<ButtonLink url={this.props.url.concat({name:'Pick Payment Request', viewID:'ApprovalsPickPendingPayment'})} name="Payment Requests" onClick={this.buttonAction.bind(this)}/>
			  </div>
			</div>)
		}else if(url[4] == null){
			switch(url[3].viewID){
				case "ApprovalsPickPendingMaterial":{
					return (<PickPendingMaterial />)
				}
				case "ApprovalsPickPendingPayment":{
					return (<PickPendingPayment />)
				}
			}
		}else{
			switch(url[4].viewID){
				case "ApprovalsViewPendingMaterial":{
					return (<ViewPending />)
				}
				case "ApprovalsViewPendingPayment":{
					return (<ViewPending />)
				}
			}
		}
	}
}