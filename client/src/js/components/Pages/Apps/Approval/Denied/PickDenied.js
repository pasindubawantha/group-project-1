//import libariys
import React from "react"
import { connect } from "react-redux"
import PickDeniedMaterial from "./PickDeniedMaterial"
import PickDeniedPayment from "./PickDeniedPayment"
import ViewDenied from "./ViewDenied"
import ButtonLink from "../../../Components/ButtonLink"

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class PickDenied extends React.Component {
	buttonAction(e) {
	}
	render() {
		var { url } = this.props
		if(url[3] == null){
			return (<div class="row">
			  <div class="col-md-6">
			  	<ButtonLink url={this.props.url.concat({name:'Pick Material Request', viewID:'ApprovalsPickDeniedMaterial'})} name="Material Requests" onClick={this.buttonAction.bind(this)}/>
			  </div>
			  <div class="col-md-6">
			  	<ButtonLink url={this.props.url.concat({name:'Pick Payment Request', viewID:'ApprovalsPickDeniedPayment'})} name="Payment Requests" onClick={this.buttonAction.bind(this)}/>
			  </div>
			</div>)
		}else if(url[4] == null){
			switch(url[3].viewID){
				case "ApprovalsPickDeniedMaterial":{
					return (<PickDeniedMaterial />)
				}
				case "ApprovalsPickDeniedPayment":{
					return (<PickDeniedPayment />)
				}
			}
		}else{
			switch(url[4].viewID){
				case "ApprovalsViewDeniedMaterial":{
					return (<ViewDenied />)
				}
				case "ApprovalsViewDeniedPayment":{
					return (<ViewDenied />)
				}
			}
		}
	}
}