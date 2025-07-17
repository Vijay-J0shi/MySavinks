import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(400).json({ message: "User doesn't have token" });  // ✅ return here
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      return res.status(400).json({ message: "User doesn't have a valid token" });  // ✅ return here
    }

    req.userId = verifyToken.userId;
    next(); // ✅ only called if token is valid

  } catch (error) {
    return res.status(500).json({ message: `isAuth error ${error}` });  // ✅ return here too
  }
};

export default isAuth;
