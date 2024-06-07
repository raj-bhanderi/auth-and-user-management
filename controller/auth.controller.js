const {
  sendResponse,
  generateToken,
  deleteImage,
  hashPassword,
  comparePassword,
} = require("../helper");
const { MESSAGE, ROLES } = require("../helper/localization");
const { STATUS_CODE } = require("../helper/enum");
const User = require("../models/user");

module.exports = {
  signUp: async (req, res) => {
    try {
      const user = await User.findOne({ email: req?.body?.email });

      if (user) {
        await deleteImage(req?.file?.path);
        return sendResponse(
          res,
          STATUS_CODE?.CONFLICT,
          false,
          MESSAGE?.ALREADY_EXIT("User")
        );
      }

      const password = await hashPassword(req?.body?.password);

      const create = new User({
        ...req?.body,
        profile_image: "/upload/user/" + req?.file?.filename,
        password,
      });

      const response = await create.save();

      const authToken = await generateToken({
        _id: response?._id,
        role: ROLES?.USER,
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
      });

      if (!user) {
        return sendResponse(
          res,
          STATUS_CODE?.CONFLICT,
          false,
          MESSAGE?.INVALID_USER
        );
      }

      const checkPassword = await comparePassword(
        req?.body?.password,
        user?.password
      );

      if (checkPassword) {
        const authToken = await generateToken({ _id: user?._id, role: ROLES?.USER });

        return sendResponse(res, STATUS_CODE?.OK, true, MESSAGE?.SIGN_IN, {
          authToken,
        });
      }
      return sendResponse(
        res,
        STATUS_CODE?.CONFLICT,
        false,
        MESSAGE?.INVALID_USER
      );
    } catch (error) {
      return sendResponse(res, STATUS_CODE?.BAD_REQUEST, false, error?.message);
    }
  },
};
