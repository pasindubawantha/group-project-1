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
					<form class="form-horizontal">
						<div class="form-group">
	    					<label class="col-sm-3 control-label">Name : </label>
	    					<label class="col-sm-7 control-label">{vendor.data.name}</label>
	    				</div>
	    				<div class="form-group">
	    					<label class="col-sm-3 control-label">Address : </label>
	    					<label class="col-sm-7 control-label">{vendor.data.address}</label>
	    				</div>
	    				<div class="form-group">
	    					<label class="col-sm-3 control-label">Description : </label>
	    					<label class="col-sm-7 control-label">{vendor.data.description}</label>
	    				</div>
	    				<div class="form-group">
	    					<label class="col-sm-3 control-label">Type : </label>
	    					<label class="col-sm-7 control-label">{vendor.data.type}</label>
	    				</div>
					</form>
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