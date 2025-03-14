import jwt from "jsonwebtoken";

export const generateJWT = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1m"
    });
    res.cookie("jwt", token, {
        maxAge: 60000, // 1 Minute
        httpOnly: true, // Prevent XSS Attacks Cross-Site Scripting Attacks
        sameSite: "strict", // CSRF Attacks Cross-Site Request Forgery Attacks
        secure: process.env.NODE_ENV !== "development", // Send JWT On HTTP Only On Development Enviroment, Otherwise Only On HTTPS
    });
}