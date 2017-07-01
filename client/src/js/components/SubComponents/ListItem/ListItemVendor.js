import React from "react"
import ListItem from "./ListItem"

export default class ListItemVendor extends ListItem {
	constructor(props) {
		super(props);
		this.state = {
	 		name: this.props.name
		};
	}
	render() {
		const { ID, name } = this.state
		return(<a class="list-group-item"> {ID} : {name} </a>)
		
	}
}