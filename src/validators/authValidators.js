//  this file contains validators that check if details passed are the ones needed for auth 

import { body } from "express-validator";

export const loginValidation = [
  body("email")
    .notEmpty()
    .withMessage("Email should be specified")
    .bail()
    .isEmail()
    .withMessage("Please enter a valid email address!")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Email must be at least 6 characters long!"),
    
  body("password")
    .isLength({min: 6})
    .withMessage("Password must be at least 6 characters long!")
];





