import { body, param } from "express-validator";

export const createUserRules = () => {
    return [
        body("name")
            .exists().withMessage("name key must be in the request")
            .isString().withMessage("name must be a string")
            .isLength({ min: 6, max: 15 }).withMessage("The username must be between 6 and 15 characters long"),
        body("email")
            .exists().withMessage("email key must be in the request")
            .isEmail().withMessage("The email must be in the correct format"),
        body("password")
            .exists().withMessage("password key must be in the request")
            .isStrongPassword().withMessage("The password must comply with the rules"), // Default Options At 'https://www.npmjs.com/package/validator'
        body("userRolId")
            .exists().withMessage("userRolId key must be in the request")
            .isNumeric().withMessage("userRolId must be a number")
    ];
}

export const deleteUserRules = () => {
    return [
        param("id")
            .isInt().withMessage("User id param must be a number")
    ];
}