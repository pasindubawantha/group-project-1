import React from "react"
import { connect } from "react-redux"
import ButtonLink from "../../../Components/ButtonLink"
import { updateFormData } from "../../../../../actions/stateActions"
import PickTeam from "./PickTeam"
import ConfirmNewProject from "./ConfirmNewProject"

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class NewProject extends React.Component {
	constructor(props){
		super()
		this.state = props.state
		this.state = {
			name:"",
			address:"",
			discription:"",
			budgetURI:""
		}
	}
	buttonAction(e){
		this.props.dispatch(updateFormData(this.state))
		console.log(this.state.ammount)
		console.log(this.state.discription)
		console.log(e.target)
	}
	changeAmmount(e){
		this.state.ammount = e.target.value
	}
	changeDescription(e){
		this.state.discription = e.target.value
	}

	render() {
		if(this.props.url[4] == null){
			return  (
				<form class="form-horizontal">
				  <div class="form-group">
				    <label for="inputDetails" class="col-sm-2 control-label">Details</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeDescription.bind(this)} type="text" class="form-control" id="inputEmail3" placeholder="Details"/>
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="inputAmmount" class="col-sm-2 control-label">Ammount</label>
				    <div class="col-sm-7">
				     <div class="input-group">
				    	<span class="input-group-addon">Rs</span>
				      <input onChange={this.changeAmmount.bind(this)} type="number" class="form-control" id="inputPassword3" placeholder="Ammount"/>
				      <span class="input-group-addon">.00</span>
				      </div>
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