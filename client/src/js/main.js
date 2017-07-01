import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import TestComponent from "./components/TestComponent"
import store from "./store"

const app = document.getElementById('root')

ReactDOM.render(
	<Provider store={ store }>
		<TestComponent />
	</Provider>
	,app);