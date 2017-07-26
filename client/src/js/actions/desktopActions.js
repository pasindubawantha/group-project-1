import axios from "axios";

export function updateDesktop(state) {
	return{
		type: "UPDATE_DESKTOP",
		payload: state
	}	
}