const { sendResponse, generateToken } = require("../helper");
const { STATUS_CODE } = require("../helper/enum");
const User = require("../models/user");
const { MESSAGE } = require("../helper/localization");

module.exports = {
  signUp: async (req, res) => {
    try {
      const user = await User.findOne({ email: req?.body?.email });

      if (user) {
        return sendResponse(
          res,
          STATUS_CODE?.CONFLICT,
          false,
          MESSAGE?.USER_ALREADY_EXIT
        );
      }
      const create = new User(req?.body);
      const response = await create.save();

      const authToken = await generateToken({
        _id: response?._id,
        role: "user",
      });

      return sendResponse(res, STATUS_CODE?.CREATED, true, MESSAGE?.SIGN_UP, {
        authToken,
      });
      
    } catch (error) {
      return sendResponse(res, STATUS_CODE?.BAD_REQUEST, false, error?.message);
    }
  },

  signIn: async (req, res) => {
    try {
      const user = await User.findOne({
        email: req?.body?.email,
        password: req?.body?.password,
      });

      if (!user) {
        return sendResponse(
          res,
          STATUS_CODE?.CONFLICT,
          false,
          MESSAGE?.INVALID_USER
        );
      }

      const authToken = await generateToken({ _id: user?._id, role: "user" });

      return sendResponse(res, STATUS_CODE?.OK, true, MESSAGE?.SIGN_IN, {
        authToken,
      });
    } catch (error) {
      return sendResponse(res, STATUS_CODE?.BAD_REQUEST, false, error?.message);
    }
  },
};
