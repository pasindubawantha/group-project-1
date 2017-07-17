import React from "react"
import { connect } from "react-redux"
import ButtonLink from "../../Components/ButtonLink"

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class NewCustomer extends React.Component {
	constructor(){
		super()
		this.state = {
			name:0,
			address:""
		}
	}
	confirm(){
		//this.props.dispatch()
		console.log(this.state.ammount)
		console.log(this.state.discription)
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
			    	<ButtonLink url={this.props.url.concat({name:'asd ', viewID:'asdsd'})} name="PickProject" onClick={this.confirm.bind(this)}/>
			  	</div>
			  </div>
			</form>
			)
	}
}