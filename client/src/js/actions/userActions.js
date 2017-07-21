//import as
//import * as user from "./userActions"
//user.fetchUser()
//or
//import { fetchUser } from "./userAction"
import axios from "axios";

export function logoutUser(){
	return {
		type : "USER_LOGOUT",
		payload: null
	}
}

export function createUserSession(userName, password) {
	return {
		type: "CREATING_USER_SESSION",
		payload: axios.post('http://localhojst:3000/server', {
    		userName: 'userName',
    		password: 'password'
  		})
	}
}

export function setUserName(name){
	return {
		type: "CREATING_USER_SESSION_REJECTED",
		payload: {
			userName: 'ads',
			password: 'asdsf'
		}
	}
}