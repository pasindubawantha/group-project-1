export function goTo(url) {
	return {
		type: "GO_TO_URL",
		payload: url
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