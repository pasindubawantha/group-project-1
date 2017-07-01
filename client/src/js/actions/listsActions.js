import axios from "axios";

export function fetchList(listType) {
	switch(listType){
		case "vendor": {
			return {
				type: "FETCHINGING_LIST",
				payload: {
					userName: 'ads',
					password: 'asdsf'
					}
				}
			break;
		}
		case "customer": {

			break;
		}
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