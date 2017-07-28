import axios from "axios"

export function axiosInjector(url, type, object, injectedThis){
	return new Promise(function(resolve, reject){
		axios[type](url, object)
		.then(function(response){
			response.this = injectedThis
			if(response.status==200){
				resolve(response)}
			else{
				reject(response)
			}
		}).catch(function(error){
			error.this = injectedThis
			reject(error)		
		})
	})
}