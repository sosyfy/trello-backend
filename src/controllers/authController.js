import express from "express";

import { validationResult } from "express-validator";
import { login } from "../services/authService.js";
import parseError from "../utils/parseError.js";
import { loginValidation } from "../validators/authValidators.js";

const router = express.Router()

// Route for user login
router.post("/login", loginValidation, async (req, res) => {
  try {

	// check for any errors that came up from the lhe loginValidation testing 
    const { errors } = validationResult(req)
    if (errors.length > 0) {
      throw errors;
    }
  
	// extract email and password from json sent by user stored in req.body 
    const { email, password } = req.body

    // Call the login service to authenticate the user
    const data = await login(email, password)

    res.status(200).json(data);

  } catch (error) {
	//  format the error message to look more readable 
    const message = parseError(error)
    // 400 - Bad Request
    res.status(400).json({
      message
    })
  }
})





router.post("/register", registerValidation, async (req, res) => {
	try {
		const { errors } = validationResult(req)
		if (errors.length > 0) {
			throw errors;
		}

		const { email, password , role } = req.body

		let otp = randomNumber(4);
		const data = await register( email, password, role , otp)

		res.status(200).json(data);

	} catch (error) {


		const message = parseError(error)
		//400 - bad request
		res.status(400).json({
			message
		})


	}
})

router.get("/logout", async (req, res) => {
	const token = req.token;

	await logout(token);

	res.status(204).end();
})



export default router;
