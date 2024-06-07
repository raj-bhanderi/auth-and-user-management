const { sendResponse } = require("../helper");
const { STATUS_CODE } = require("../helper/enum");
const { MESSAGE } = require("../helper/localization");
const User = require("../models/user");

module.exports = {
  create: async (req, res) => {
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

      return sendResponse(
        res,
        STATUS_CODE?.CREATED,
        true,
        MESSAGE?.CREATE_USER,
        response
      );
    } catch (error) {
      return sendResponse(res, STATUS_CODE?.BAD_REQUEST, false, error?.message);
    }
  },

  findAll: async (req, res) => {
    try {
      const users = await User.find({});
      return sendResponse(
        res,
        STATUS_CODE?.OK,
        true,
        MESSAGE?.GET_ALL_USER,
        users
      );
    } catch (error) {
      return sendResponse(res, STATUS_CODE?.BAD_REQUEST, false, error?.message);
    }
  },

  findOne: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req?.params?.id });

      if (!user) {
        return sendResponse(
          res,
          STATUS_CODE?.NOT_FOUND,
          false,
          MESSAGE?.USER_NOT_FOUND
        );
      }

      return sendResponse(
        res,
        STATUS_CODE?.OK,
        true,
        MESSAGE?.GET_ALL_USER,
        user
      );
    } catch (error) {
      return sendResponse(res, STATUS_CODE?.BAD_REQUEST, false, error?.message);
    }
  },

  userDelete: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req?.params?.id });

      if (!user) {
        return sendResponse(
          res,
          STATUS_CODE?.NOT_FOUND,
          false,
          MESSAGE?.USER_NOT_FOUND
        );
      }

      const deleteUser = await User.deleteOne({ _id: req?.params?.id });

      return sendResponse(
        res,
        STATUS_CODE?.OK,
        true,
        MESSAGE?.DELETE_USER,
        deleteUser
      );
    } catch (error) {
      return sendResponse(res, STATUS_CODE?.BAD_REQUEST, false, error?.message);
    }
  },

  update: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req?.params?.id });

      if (!user) {
        return sendResponse(
          res,
          STATUS_CODE?.NOT_FOUND,
          false,
          MESSAGE?.USER_NOT_FOUND
        );
      }

      const updateUser = await User.updateOne(
        { _id: req?.params?.id },
        { $set: req?.body },
        { upsert: true }
      );

      return sendResponse(res, STATUS_CODE?.OK, true, MESSAGE?.UPDATE_USER, {
        update: !!updateUser,
      });
    } catch (error) {
      return sendResponse(res, STATUS_CODE?.BAD_REQUEST, false, error?.message);
    }
  },
};
