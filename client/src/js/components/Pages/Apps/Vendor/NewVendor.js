import React from "react"
import { connect } from "react-redux"
import ButtonLink from "../../Components/ButtonLink"
import { NotificationManager } from 'react-notifications'
import { fetchList } from "../../../../actions/listsActions"
import { axiosInjector } from '../../../customFunctions'

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class NewVendor extends React.Component {
	componentWillMount(){
		this.state = {
			name: '',
			address: '',
			description: '',
			type: ''
		}
		//this.save = this.save.bind(this);
		//this.changeName = this.changeName.bind(this);
	}
	save(e){
		e.target.disabled = true,
		axiosInjector('/vendors/', 'post', this.state,this)
		.then(function(response){
			response.this.props.dispatch(fetchList('vendors'))
			NotificationManager.info('Sucessfully saved vendor details')
		}, function(error){
			NotificationManager.error('Unable to save vendor details')
		})
	}
	changeName(e){
		this.setState({ name: e.target.value });
		//this.state.name = e.target.value
		
	}
	changeAddress(e){
		this.setState({ address: e.target.value });
		//this.state.address = e.target.value
	}
	changeDescription(e){
		this.setState({ description: e.target.value });
		//this.state.description = e.target.value
	}
	changeType(e){
		this.setState({ type: e.target.value });
		//this.state.type = e.target.value
	}


	render() {
		return  (
		<div className = "add-item">
			<form class="form-horizontal">
			  <div class="form-group">
			    <label class="col-sm-2 control-label">Name</label>
			    <div class="col-sm-7">
			      <input className= "add-item__input" onChange={this.changeName.bind(this)} type="text" class="form-control" placeholder="Name"/>
				  
			    </div>
			  </div>
			  <div class="form-group">
			    <label class="col-sm-2 control-label">Address</label>
			    <div class="col-sm-7">
			      <input className= "add-item__input" onChange={this.changeAddress.bind(this)} type="text" class="form-control" placeholder="Address"/>
			    </div>
			  </div>
			  <div class="form-group">
			    <label class="col-sm-2 control-label">Description</label>
			    <div class="col-sm-7">
			      <input className= "add-item__input" onChange={this.changeDescription.bind(this)} type="text" class="form-control" placeholder="Description"/>
			    </div>
			  </div>
			  <div class="form-group">
			    <label class="col-sm-2 control-label">Type</label>
			    <div class="col-sm-7">
			      <input className= "add-item__input" onChange={this.changeType.bind(this)} type="text" class="form-control" placeholder="Type"/>
			    </div>
			  </div>
			  <div class="form-group">
			    <div class="col-sm-offset-2 col-sm-7">
			    	<button className= "add-item__button" disabled={!(this.state.name && this.state.address && this.state.description && this.state.type) } onClick={this.save.bind(this)} type="button" class="btn btn-warning">Save</button>
			  	</div>
			  </div>
			</form>
			</div>
		)
	}
}