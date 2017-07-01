import React from "react"
import { connect } from "react-redux"
import ListItemVendor from "./ListItem/ListItemVendor"
//import ListItemCustomer from "./ListItem/ListItemCustomer"

@connect((store) => {
	return {//props
		lists: store.lists
	}
},)
export default class List extends React.Component {
	componentWillMount() {
		
		//this.props.dispatch(createUserSession('asd', 'asd'))
	}

	createList(listType){
		switch(listType){
			case "vendor": {
				const { vendors } = this.props.lists
				if(vendors.length){
					return vendors.map( vendor => <ListItemVendor key={vendor.ID} name = {vendor.name}  ID = {vendor.ID}  listType = "vendor"/>)
					break;
				}else{
					return (<a href="#" class="list-group-item"> None </a>)
				}
			}
			case "customer": {

				break;
			}

		}
	}
	render() {
		return (<div class="list-group"> {this.createList(this.props.listType)} </div>)
	}
}