import React from "react"
import { connect } from "react-redux"
import ButtonLink from "../../Components/ButtonLink"

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class MakePayments extends React.Component {
	constructor(){
		super()
		this.state = {
			ammount:0,
			discription:""
		}
	}
	confirmPayment(){
		//this.props.dispatch()
		console.log(this.state.ammount)
		console.log(this.state.discription)
	}
	changeAmmount(e){
		this.state.ammount = e.target.value
	}
	changeDescription(e){
		this.state.discription = e.target.value
	}

	render() {
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
			      <ButtonLink url={this.props.url.concat({name:'asd ', viewID:'asdsd'})} name="Confirm" onClick={this.confirmPayment.bind(this)}/>
			    </div>
			  </div>
			</form>
			)
	}
}