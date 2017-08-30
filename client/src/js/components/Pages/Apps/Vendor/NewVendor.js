//import the liaberys
import React from "react"
import { connect } from "react-redux"
import ButtonLink from "../../Components/ButtonLink"
import { NotificationManager } from 'react-notifications'
import { fetchList } from "../../../../actions/listsActions"
import { axiosInjector } from '../../../customFunctions'
//connect to store obeject
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
			type: '',
			nameValidated: false,
			addressValidated: false,
			descriptionValidated: false,
			typeValidated: false,
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
		if(e.target.value != e.target.placeholder && e.target.value != "" && e.target.value != null){
			this.setState({ name: e.target.value })
			this.setState({ nameValidated: true })
		}else{
			this.setState({ nameValidated: false })
		}
	}
	changeAddress(e){
		if(e.target.value != e.target.placeholder && e.target.value != "" && e.target.value != null){
			this.setState({ address: e.target.value })
			this.setState({ addressValidated: true })
		}else{
			this.setState({ addressValidated: false })
		}
	}
	changeDescription(e){
		if(e.target.value != e.target.placeholder && e.target.value != "" && e.target.value != null){
			this.setState({ description: e.target.value })
			this.setState({ descriptionValidated: true })
		}else{
			this.setState({ descriptionValidated: false })
		}
	}
	changeType(e){
		if(e.target.value != e.target.placeholder && e.target.value != "" && e.target.value != null){
			this.setState({ type: e.target.value })
			this.setState({ typeValidated: true })
		}else{
			this.setState({ typeValidated: false })
		}
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
			    	<button className= "add-item__button" disabled={!(this.state.nameValidated && this.state.addressValidated && this.state.descriptionValidated && this.state.typeValidated)} onClick={this.save.bind(this)} type="button" class="btn btn-warning">Save</button>
			  	</div>
			  </div>
			</form>
			</div>
		)
	}
}