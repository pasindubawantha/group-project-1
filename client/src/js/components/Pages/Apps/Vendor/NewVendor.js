import React from "react"
import { connect } from "react-redux"
import ButtonLink from "../../Components/ButtonLink"
import { NotificationManager } from 'react-notifications';
import axios from "axios"

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class NewVendor extends React.Component {
	componentWillMount(){
		this.state = {
			name: null,
			address: null,
			description: null,
			type: null
		}
	}
	save(e){
		e.target.disabled = true
		axios.post('/vendors/', this.state).then(function (status){
			NotificationManager.info('Sucessfully saved vendor details')
		}
		).catch(function (error){
			NotificationManager.error('Unable to save vendor details')
		})
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


	render() {
		return  (
			<form class="form-horizontal">
			  <div class="form-group">
			    <label class="col-sm-2 control-label">Name</label>
			    <div class="col-sm-7">
			      <input onChange={this.changeName.bind(this)} type="text" class="form-control" placeholder="Name"/>
			    </div>
			  </div>
			  <div class="form-group">
			    <label class="col-sm-2 control-label">Address</label>
			    <div class="col-sm-7">
			      <input onChange={this.changeAddress.bind(this)} type="text" class="form-control" placeholder="Address"/>
			    </div>
			  </div>
			  <div class="form-group">
			    <label class="col-sm-2 control-label">Description</label>
			    <div class="col-sm-7">
			      <input onChange={this.changeDescription.bind(this)} type="text" class="form-control" placeholder="Description"/>
			    </div>
			  </div>
			  <div class="form-group">
			    <label class="col-sm-2 control-label">Type</label>
			    <div class="col-sm-7">
			      <input onChange={this.changeType.bind(this)} type="text" class="form-control" placeholder="Type"/>
			    </div>
			  </div>
			  <div class="form-group">
			    <div class="col-sm-offset-2 col-sm-7">
			    	<button onClick={this.save.bind(this)} type="button" class="btn btn-warning">Save</button>
			  	</div>
			  </div>
			</form>
		)
	}
}