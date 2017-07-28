import React from "react"
import { connect } from "react-redux"
import ButtonLink from "../../../Components/ButtonLink"
import { updateFormData } from "../../../../../actions/stateActions"
import PickTeam from "./PickTeam"
import ConfirmNewProject from "./ConfirmNewProject"

@connect((store) => {
	return {//props
		url: store.url,
	}
},)
export default class NewProject extends React.Component {
	componentWillMount(){
		this.state = {
			projectName:null,
			projectAddress:null,
			projectStartDate:null,
			projectEndDate:null
		}
	}
	buttonAction(e){
		this.state.customerId = this.props.customerData.customerId
		this.state.customerName = this.props.customerData.customerName
		this.state.customerAddress = this.props.customerData.customerAddress
		this.props.dispatch(updateFormData(this.state))
	}
	changeName(e){
		this.state.projectName = e.target.value
	}
	changeAddress(e){
		this.state.projectAddress = e.target.value
	}
	changeStartDate(e){
		this.state.projectStartDate = e.target.value
	}
	changeEndDate(e){
		this.state.projectEndDate = e.target.value
	}

	render() {
		if(this.props.url[4] == null){
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
				    	<label class="col-sm-2 control-label">Starting Date</label>
				    	<div class="col-sm-7">
				      		<input onChange={this.changeStartDate.bind(this)} type="date" class="form-control" placeholder="yyyy/mm/dd" />
				    	</div>
				  	</div>
				  	<div class="form-group">
				    	<label class="col-sm-2 control-label">End Date</label>
				    	<div class="col-sm-7">
				      		<input onChange={this.changeEndDate.bind(this)} type="date" class="form-control" placeholder="mm/dd/yyyy" />
				    	</div>
				  	</div>

				  	<div class="form-group">
				    	<div class="col-sm-offset-2 col-sm-7">
				      		<ButtonLink url={this.props.url.concat({name:'Pick Project Team', viewID:'CustomerNewProjectPickTeam'})} name="Confirm" onClick={this.buttonAction.bind(this)}/>
				    	</div>
				  	</div>
				</form>
			)
		}else{
			if(this.props.url[5] == null){ 
				return <PickTeam /> 
			}else{ 
				return <ConfirmNewProject /> 
			}
		}
	}
}