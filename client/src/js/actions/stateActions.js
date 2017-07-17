export function updateListAll(array) {
	return {
		type: "UPDATE_STATE_LIST_ALL",
		payload: array
	}
}

export function updateListShow(array) {
	return {
		type: "UPDATE_STATE_LIST_SHOW",
		payload: array
	}
}

export function updateListSelected(array) {
	return {
		type: "UPDATE_STATE_LIST_SELECTED",
		payload: array
	}
}
export function updateListID(id) {
	return {
		type: "UPDATE_STATE_LIST_ID",
		payload: id
	}
}