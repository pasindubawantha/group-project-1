import axios from "axios"
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
export function updateListPicked(pickedID) {
	return {
		type: "UPDATE_STATE_LIST_PICKED",
		payload: pickedID
	}
}
export function updateUploadUploading(e) {
	return {
		type: "UPDATE_STATE_UPLOAD_UPLOADING",
		payload: e
	}
}
export function updateUploadUploadDone(e) {
	return {
		type: "UPDATE_STATE_UPLOAD_UPLOADDONE",
		payload: e
	}
}
export function updateUploadUploadError(e) {
	return {
		type: "UPDATE_STATE_UPLOAD_UPLOADERROR",
		payload: e
	}
}
export function updateUploadUploadFail(e) {
	return {
		type: "UPDATE_STATE_UPLOAD_UPLOADFAIL",
		payload: e
	}
}
export function defaultupload(){
	return{
		type: "DEFAULT_STATE_UPLOAD",
		payload: null
	}
}
export function updateFormID(id){
	return{
		type: "UPDATE_STATE_FORM_ID",
		payload: id
	}
}
export function updateFormData(data){
	return{
		type: "UPDATE_STATE_FORM_DATA",
		payload: data
	}
}

export function downloadList(url) {
	return{
		type:"DOWNLOAD_STATE_LIST",
		payload:axios.get(url)
	}
}