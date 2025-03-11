import {
    body,
    param,
    query,
    check,
    validationResult
} from "express-validator";

// Check If Request Have Some Error
export const validateRequest = (req, res, next) => {
    const { errors } = validationResult(req);
    if (errors.length != 0) {
        return res.status(400).json({
            msg: errors[0].msg
        });
    }
    next();
}

export const createUserRules = () => {
    return [
        body("name")
            .exists().withMessage("name key must be in the request")
            .isString().withMessage("name must be a string")
            .isLength({ min: 6, max: 15 }).withMessage("username must be between 6 and 15 characters long"),
        body("email")
            .exists().withMessage("email key must be in the request")
            .isEmail().withMessage("email must be in the correct format"),
        body("password")
            .exists().withMessage("password key must be in the request")
            .isStrongPassword().withMessage("password must comply with the rules"), // Default Options At 'https://www.npmjs.com/package/validator'
        body("userRolId")
            .exists().withMessage("userRolId key must be in the request")
            .isNumeric().withMessage("userRolId must be a number")
    ];
}

export const getUserRules = () => {
    return [
        param("id")
            .isInt({ min: 0 }).withMessage("user id param must be a intenger and greater or equal to 0")
    ];
}

export const deleteUserRules = () => {
    return [
        param("id")
            .isInt({ min: 0 }).withMessage("user id param must be a intenger and greater or equal to 0")
    ];
}

export const createPropertyRules = () => {
    return [
        body("title")
            .exists().withMessage("title key must be in the request")
            .isString().withMessage("title must be a string")
            .isLength({ min: 5, max: 25 }).withMessage("title must be between 6 and 15 characters long"),
        body("description")
            .exists().withMessage("descripton key must be in the request")
            .isString().withMessage("descripton must be a string")
            .isLength({ min: 10, max: 100 }).withMessage("title must be between 10 and 100 characters long"),
        body("price")
            .exists().withMessage("price key must be in the request")
            .isInt({ min: 100 }).withMessage("price must be a number and greater than 100"),
        body("location")
            .exists().withMessage("location key must be in the request")
            .isString().withMessage("location must be a string")
            .isLength({ min: 10 }).withMessage("location must be greater than 10 characters"),
        body("numRooms")
            .exists().withMessage("numRooms key must be in the request")
            .isInt({ min: 1 }).withMessage("numRooms must be a integer and greater than 1"),
        body("numBaths")
            .isInt({ min: 0 }).withMessage("numBaths must be a integer and greater than 0"),
        body("mt2")
            .exists().withMessage("mt2 key must be in the request")
            .isFloat({ min: 10.0 }).withMessage("mt2 must be a float and greater than 10.0"),
        body("userId")
            .exists().withMessage("userId key must be in the request")
            .isInt({ min: 0 }).withMessage("userId must be a integer and greater or equal to 0"),
        body("propertyTypeId")
            .exists().withMessage("propertyTypeId key must be in the request")
            .isInt({ min: 0 }).withMessage("propertyTypeId must be a integer and greater or equal to 0"),
    ];
}

export const getPropertiesRules = () => {
    return [
        query("page")
            .exists().withMessage("page query must be in the URL")
            .isInt({ min: 1 }).withMessage("page query must be a integer greater or equal to 1")
            .toInt()
    ];
}

export const getPropertyRules = () => {
    return [
        param("id")
            .isInt({ min: 0 }).withMessage("property id param must be a intenger and greater or equal to 0")
    ];
}

export const deletePropertyRules = () => {
    return [
        param("id")
            .isInt({ min: 0 }).withMessage("property id param must be a intenger and greater or equal to 0")
    ];
}

export const updatePropertyRules = () => {
    console.log("entro validate update property")
    return [
        param("id")
            .isInt({ min: 0 }).withMessage("property id param must be a intenger and greater or equal to 0"),
        check().custom((value, { req }) => { // Ensure At Least One Field
            if (Object.keys(req.body).length === 0) {
                throw new Error('there must be at least 1 field to update a property');
            }
            return true;
        }),
        body("title")
            .optional({ nullable: true })
            .isString().withMessage("title must be a string")
            .isLength({ min: 5, max: 25 }).withMessage("title must be between 6 and 15 characters long"),
        body("description")
            .optional({ nullable: true })
            .isString().withMessage("descripton must be a string")
            .isLength({ min: 10, max: 100 }).withMessage("title must be between 10 and 100 characters long"),
        body("price")
            .optional({ nullable: true })
            .isInt({ min: 100 }).withMessage("price must be a number and greater than 100"),
        body("location")
            .optional({ nullable: true })
            .isString().withMessage("location must be a string")
            .isLength({ min: 10 }).withMessage("location must be greater than 10 characters"),
        body("numRooms")
            .optional({ nullable: true })
            .isInt({ min: 1 }).withMessage("numRooms must be a integer and greater than 1"),
        body("numBaths")
            .optional({ nullable: true })
            .isInt({ min: 0 }).withMessage("numBaths must be a integer and greater than 0"),
        body("mt2")
            .optional({ nullable: true })
            .isFloat({ min: 10.0 }).withMessage("mt2 must be a float and greater than 10.0"),
        body("propertyTypeId")
            .optional({ nullable: true })
            .isInt({ min: 0 }).withMessage("propertyTypeId must be a integer and greater or equal to 0"),
    ];
}