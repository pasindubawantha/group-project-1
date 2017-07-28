import axios from "axios";

export function getCustomerDetails(id) {
	return{
		type:"CUSTOMER_CUSTOMERVIEW_GET",
		payload:axios.get("/customers/"+id)
	}
}