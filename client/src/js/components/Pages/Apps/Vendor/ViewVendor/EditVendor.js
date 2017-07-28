import React from "react"
import { connect } from "react-redux"
import ButtonLink from "../../../Components/ButtonLink"
import { NotificationManager } from 'react-notifications'
import axios from "axios"

@connect((store) => {
	return {//props
		url: store.url,
		vendor: store.apps.Vendor.tabs.ViewVendor.vendor
	}
},)
export default class EditVendor extends React.Component {
	componentWillMount(){
		this.state = {
			id: this.props.vendor.data.id,
			name: this.props.vendor.data.name,
			address: this.props.vendor.data.address,
			description: this.props.vendor.data.description,
			type: this.props.vendor.data.type
		}
	}
	changeName(e){
		this.state.name = e.target.value
	}
	changeAddress(e){
		this.state.address = e.target.value
	}
	changeDescription(e){
		this.state.description = e.target.value
	}
	changeType(e){
		this.state.type = e.target.value
	}
	save(e){
		e.target.disabled = true
		axios.post('/vendors/'+ this.props.vendor.data.id,this.state)
		.then(function (status){
			NotificationManager.info('Sucessfully updated vendor details')
		}
		).catch(function (error){
			NotificationManager.error('Unable to update vendor')
		})
	}

	render() {
		return  (
			<form class="form-horizontal">
				  <div class="form-group">
				    <label class="col-sm-2 control-label">Name</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeName.bind(this)} type="text" class="form-control" placeholder={this.props.vendor.data.name}/>
				    </div>
				  </div>
				  <div class="form-group">
				    <label class="col-sm-2 control-label">Address</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeAddress.bind(this)} type="text" class="form-control" placeholder={this.props.vendor.data.address}/>
				    </div>
				  </div>
				  <div class="form-group">
				    <label class="col-sm-2 control-label">Description</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeDescription.bind(this)} type="text" class="form-control" placeholder={this.props.vendor.data.description}/>
				    </div>
				  </div>
				  <div class="form-group">
				    <label class="col-sm-2 control-label">Type</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeType.bind(this)} type="text" class="form-control" placeholder={this.props.vendor.data.type}/>
				    </div>
				  </div>
			    <div class="col-sm-offset-2 col-sm-7">
			    	<button onClick={this.save.bind(this)} type="button" class="btn btn-warning">Save</button>
			    </div>
			</form>
		)
	}
}