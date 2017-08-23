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
					<div class="panel panel-default">
					<div class="panel-heading"> <h4>Client Details</h4></div>
 						 <div class="panel-body">
  							<table class="table">
								<tbody>
									<tr>
							    		<td>Name </td>
							    		<td>{customer.data.name}</td>
							    	</tr>
							    	<tr>
							    		<td>Address </td>
							    		<td>{customer.data.address}</td>
							    	</tr>
								</tbody>
							</table>
						</div>
					</div>
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