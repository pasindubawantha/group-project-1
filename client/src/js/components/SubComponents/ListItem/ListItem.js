import React from "react"

export default class ListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	 		ID: this.props.ID,
	 		listType: this.props.listType
		};
	}
	deleteItem(){

	}
	editItem(){

	}
}