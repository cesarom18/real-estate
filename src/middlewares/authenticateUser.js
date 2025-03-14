import jwt from "jsonwebtoken";

export const authenticateUser = (req, res, next) => {
    const token = req.cookies.jwt;
    // If Tokend Doesn't Exist, Return Unauthorized
    if (!token) return res.status(401).json({
        msg: "access denied, there is no token in the request"
    });

    try {
        // Check If Token Changed Or Expired
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        next();
    } catch (error) {
        return res.status(403).json({
            msg: "invalid or expired token"
        });
    }
}