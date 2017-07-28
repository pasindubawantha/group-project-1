import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import axios from "axios"

import MainFrame from "./components/MainFrame.js"
import store from "./store"

const app = document.getElementById('root')
axios.defaults.baseURL = 'http://localhost:3000/api/';
ReactDOM.render(
	<Provider store={ store }>
		<MainFrame />
	</Provider>
	,app);