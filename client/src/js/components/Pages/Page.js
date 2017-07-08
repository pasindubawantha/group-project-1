import React from "react"
import SideMenu from "./SideMenu.js"
import PageView from "./PageView.js"

export default class Page extends React.Component {
	render() {
		return  (
			<div class="row">
			  <div class="col-md-3">
			  <SideMenu appID="app123" />
			  </div>
			  <div class="col-md-9">
			  <PageView appID="app123"/>
			  </div>
			</div>
			)
	}
}