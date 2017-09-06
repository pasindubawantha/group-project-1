import axios from "axios";

export function fetchList(listName) {
	return{
		type: "FETCHING_LIST_"+listName,
		payload: axios.get("http://localhost:3000/api/"+listName)
	}	
}
export function fetchApprovalList(listName, URL) {
	return{
		type: "FETCHING_LIST_"+listName,
		payload: axios.get("http://localhost:3000/api/approvals/"+URL)
	}	
}