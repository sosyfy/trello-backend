export default function(error) {
	//express-validator
	if(Array.isArray(error)) {
		return error.map(e => e.msg)
	} else {
		return error.message//string
	}
}


