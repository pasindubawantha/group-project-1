import React from "react"
import { connect } from "react-redux"
import ButtonLink from "../../../Components/ButtonLink"
import { NotificationManager } from 'react-notifications'
import { fetchList } from "../../../../../actions/listsActions"
import { axiosInjector } from '../../../../customFunctions'

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
			type: this.props.vendor.data.type,
			nameValidated: false,
			addressValidated: false,
			descriptionValidated: false,
			typeValidated: false,
		}
	}
	changeName(e){
		if(e.target.value != "" && e.target.value != null){
			this.setState({ name: e.target.value })
			this.setState({ nameValidated: true })
		}else{
			console.log(33)
			this.setState({ nameValidated: false })
		}
	}
	changeAddress(e){
		if(e.target.value != "" && e.target.value != null){
			this.setState({ address: e.target.value })
			this.setState({ addressValidated: true })
		}else{
			this.setState({ addressValidated: false })
		}
	}
	changeDescription(e){
		if(e.target.value != "" && e.target.value != null){
			this.setState({ description: e.target.value })
			this.setState({ descriptionValidated: true })
		}else{
			this.setState({ descriptionValidated: false })
		}
	}
	changeType(e){
		if(e.target.value != "" && e.target.value != null){
			this.setState({ type: e.target.value })
			this.setState({ typeValidated: true })
		}else{
			this.setState({ typeValidated: false })
		}
	}
	save(e){
		e.target.disabled = true
		axiosInjector('/vendors/'+ this.state.id+'/', 'post', this.state, this)
		.then(function(response){
			response.this.props.dispatch(fetchList('vendors'))
			NotificationManager.info('Sucessfully updated vendor details')
		}, function(error){
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
			    	<button onClick={this.save.bind(this)} disabled={!(this.state.nameValidated && this.state.addressValidated && this.state.descriptionValidated && this.state.typeValidated)} type="button" class="btn btn-warning">Save</button>
			    </div>
			</form>
		)
	}
}