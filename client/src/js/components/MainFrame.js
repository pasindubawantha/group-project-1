import React from "react"

import NevigationBar from "./NevigationBar.js"
import BreadCrumb from "./BreadCrumb.js"
import ContentArea from "./ContentArea.js"


export default class MainFrame extends React.Component {
	render() {
		return(
		      <div>
		      	<NevigationBar />
		      	<BreadCrumb />
		        <ContentArea />
		      </div>
			)
	}
}