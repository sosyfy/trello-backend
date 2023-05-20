// Export a middleware function that sets the appropriate CORS headers on the response object
export default function() {
	return (req,res,next) => {
		// Set the Access-Control-Allow-Origin header to allow requests from any origin
		res.setHeader("Access-Control-Allow-Origin", "*")

		// Set the Access-Control-Allow-Methods header to allow various HTTP methods
		res.setHeader("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,POST,PUT,DELETE,PATCH")

		// Set the Access-Control-Allow-Headers header to allow certain request headers
		res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Authorization, Authorization")

		// Set the Access-Control-Allow-Credentials header to true to allow cookies to be sent with CORS requests
		res.setHeader("Access-Control-Allow-Credentials", "true")
        
		// Call the next middleware function in the chain
		next();
	}
}
