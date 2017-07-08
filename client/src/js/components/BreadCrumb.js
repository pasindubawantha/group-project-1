import React from "react"
import { connect } from "react-redux"

import Link from "./SubComponents/Link.js"

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class BreadCrumb extends React.Component {
	createBreadcrumb(link){
		var baseUrl = []
		return link.map( (item) => { baseUrl = baseUrl.concat(item);return <li key={item.viewID} ><Link url={baseUrl} name={item.name}/></li>} )
	}
	render() {
		return  (
			<ol class="breadcrumb">
			  {this.createBreadcrumb(this.props.url)}
			</ol>
			)
	}
}