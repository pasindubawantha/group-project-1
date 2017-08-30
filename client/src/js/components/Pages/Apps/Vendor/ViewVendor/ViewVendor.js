import React from "react"
import { connect } from "react-redux"
import { NotificationManager } from 'react-notifications';
import { getVendorDetails } from '../../../../../actions/Apps/vendorActions'

@connect((store) => {
	return {//props
		url: store.url,
		vendorId: store.state.list.picked['VendorAll'],
		vendor: store.apps.Vendor.tabs.ViewVendor.vendor
	}
},)
export default class ViewVendor extends React.Component {
	componentWillMount(){
		this.props.dispatch(getVendorDetails(this.props.vendorId))
		this.state = {warrned: false}
	}
	warn(){
		NotificationManager.warning('Cannot get vendor data')
	}

	render() {
		var { vendorId, vendor, url } = this.props
			if(vendor.downloaded){
				return  (
					<div class="panel panel-default">
					<div class="panel-heading"> <h4>Vendor Details</h4></div>
 						 <div class="panel-body">
  							<table class="table">
								<tbody>
									<tr>
							    		<td>Name </td>
							    		<td>{vendor.data.name}</td>
							    	</tr>
							    	<tr>
							    		<td>Address </td>
							    		<td>{vendor.data.address}</td>
							    	</tr>
							    	<tr>
							    		<td>Description </td>
							    		<td>{vendor.data.description}</td>
							    	</tr>
							    	<tr>
							    		<td>Type </td>
							    		<td>{vendor.data.type}</td>
							    	</tr>
								</tbody>
							</table>
						</div>
					</div>
				)
			}else{
				if(vendor.downloadError != null){
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