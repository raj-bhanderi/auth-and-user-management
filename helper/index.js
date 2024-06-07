const jwt = require("jsonwebtoken");

module.exports = {
  sendResponse: (res, statusCode, success, message, data = null) => {
    return res.status(statusCode).json({
      success,
      message,
      ...(data && { data }),
    });
  },

  generateToken: async(payload, expiresIn = "1h") => {
    return await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
  },
};
