//new project
//make paymentimport React from "react"
import React from "react"
import { connect } from "react-redux"
import ButtonLink from "../../Components/ButtonLink"
import { find } from "../../Components/arrayOpps"

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class NewCustomer extends React.Component {
	constructor(){
		super()
		this.state = {}
	}
	confirm(){
		//this.props.dispatch()
	}
	changeName(e){
		this.state.name = e.target.value
	}
	changeAddress(e){
		this.state.address = e.target.value
	}

	render() {
		return  (

			<form class="form-horizontal">
			<h1>1</h1>
			  <div class="form-group">
			    <label for="inputName" class="col-sm-2 control-label">Name</label>
			    <div class="col-sm-7">
			      <input onChange={this.changeName.bind(this)} type="text" class="form-control" id="inputEmail3" placeholder="Name"/>
			    </div>
			  </div>
			  <div class="form-group">
			    <label for="inputAmmount" class="col-sm-2 control-label">Address</label>
			    <div class="col-sm-7">
			      <input onChange={this.changeAddress.bind(this)} type="address" class="form-control" id="inputPassword3" placeholder="Address"/>
			    </div>
			  </div>
			  <div class="form-group">
			    <div class="col-sm-offset-2 col-sm-7">
			    	<ButtonLink url={this.props.url.concat({name:'New Project ', viewID:'asdsd'})} name="Create Project" onClick={this.confirm.bind(this)}/>
			  	</div>
			  </div>
			</form>
			)
	}
}