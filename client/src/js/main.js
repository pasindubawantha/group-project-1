import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import MainFrame from "./components/MainFrame.js"
import store from "./store"

const app = document.getElementById('root')

ReactDOM.render(
	<Provider store={ store }>
		<MainFrame />
	</Provider>
	,app);