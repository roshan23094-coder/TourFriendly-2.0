import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. No Token Provided.",
      });
    }

    // Remove "Bearer "
    token = token.split(" ")[1];

    // Verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};