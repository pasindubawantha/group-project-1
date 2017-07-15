import React from "react"
import { connect } from "react-redux"
import List from "../../../SubComponents/List"

@connect((store) => {
	return {//props
		url: store.url,
		tab: store.app.app123.tab123
	}
},)
export default class PickTeam extends List {
	constructor(){
		super()
		this.state={
			selected = []
		}
	}

	onChangeCheckBox(e){

	}

	render(){
			(<div>
				<form class="form-inline">
				  <div class="form-group">
				    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
				    <input onChange={this.onChangeSearch.bind(this)} type="text" class="form-control" id="exampleInputAmount" placeholder="Amount"/>
				  </div>
				  <button type="submit" class="btn btn-primary">Transfer cash</button>
				</form>

				<form>
				{this.state.selected.map(item => (<div class="input-group">
					 <input type="checkbox"/>
					<input onChange={this.onChangeCheckBox.bind(this)} type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input"/>
					</div>))}
				</form>

				<form>
					{this.props.tab.showList.map(item => (<div class="input-group">
					 <input type="checkbox"/>
					<input onChange={this.onChangeCheckBox.bind(this)} type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input"/>
					</div>))}
				</form>
			</div>)
	}
}