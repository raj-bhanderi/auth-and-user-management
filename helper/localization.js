const MESSAGE = {
  CREATE: (type) => `Create ${type} Successfully.`,
  UPDATE: (type) => `Update ${type} Successfully.`,
  DELETE: (type) => `Delete ${type} Successfully.`,
  GET_ALL: (type) => `Get All ${type} Fetch Successfully.`,
  ALREADY_EXIT: (type) => `${type} is already exit.`,
  GET_SINGLE: (type) => `Get ${type} Details Fetch Successfully.`,
  NOT_FOUND:(type) =>`${type} Not Found`,
  SIGN_UP: "User SignUp Successfully",
  SIGN_IN: "User SignIn Successfully",
  INVALID_USER: "Invalid User",
  ACCESS_DENIED: "Access denied. No token provided.",
  TOKEN_EXPIRE: "Access token has expired.",
  INVALID_TOKEN: "Invalid token.",
};

const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

module.exports = {
  MESSAGE,
  ROLES,
};
