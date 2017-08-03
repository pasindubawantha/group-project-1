import React from "react"
import { connect } from "react-redux"
import { NotificationManager } from 'react-notifications';
import { getCustomerDetails } from '../../../../../actions/Apps/customerActions'

@connect((store) => {
	return {//props
		url: store.url,
		customerId: store.state.list.picked['CustomerAll'],
		customer: store.apps.Customer.tabs.ViewCustomer.customer
	}
},)
export default class ViewCustomer extends React.Component {
	componentWillMount(){
		this.props.dispatch(getCustomerDetails(this.props.customerId))
		this.state = {warrned: false}
	}
	warn(){
		NotificationManager.warning('Cannot get customer data')
	}

	render() {
		var { customerId, customer, url } = this.props
			if(customer.downloaded){
				return  (
					<form class="form-horizontal">
						<div class="form-group">
	    					<label class="col-sm-3 control-label">Name : </label>
	    					<label class="col-sm-7 control-label">{customer.data.name}</label>
	    				</div>
	    				<div class="form-group">
	    					<label class="col-sm-3 control-label">Address : </label>
	    					<label class="col-sm-7 control-label">{customer.data.address}</label>
	    				</div>
					</form>
				)
			}else{
				if(customer.downloadError != null){
					if(!this.state.warrned){
						this.warn()
						this.state.warrned = true
					}
					return <p> error </p>
				}
				return (<p>loading</p>)
			}
	}
}