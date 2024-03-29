/**
 * Title: User controller
 * Description: Control request, response and other middleware
 * Author: Hasibul Islam
 * Date: 26/11/2022
 */

/* internal imports */
const userService = require("../services/user.service");
const jwtTokenUtility = require("../utilities/jwtToken.utility");

/* upload an user avatar */
exports.cloudinaryUpload = async (req, res, next) => {
  try {
    const result = req.file;

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Uploading complete to Cloudinary",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.cloudinaryUpdate = async (req, res, next) => {
  try {
    await userService.cloudinaryUpdate(req.query.filename);
    const result = req.file;

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Updating complete to Cloudinary",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* sign up an user */
exports.signUpAnUser = async (req, res, next) => {
  try {
    const user = await userService.signUpAnUser(
      req.body,
      req.protocol,
      req.get("host")
    );

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "New user registration complete",
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

/* confirm signed up user */
exports.confirmSignedUpUser = async (req, res, next) => {
  try {
    const user = await userService.confirmSignedUpUser(req.query.token);

    if (user.acknowledgement === false) {
      return res.status(401).json({
        acknowledgement: false,
        message: "Unauthorized",
        description: "Email provided token expired. Please, retry",
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Account activated, ready to go",
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

/* sign in an user */
exports.signInAnUser = async (req, res, next) => {
  try {
    // const { email, password } = req.body;
    // const user = await User.findOne({ email: email });
    const result = await userService.signInAnUser(req.body);

    if (result.acknowledgement === false) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "User not found or exist",
      });
    }

    // const isPasswordValid = user.comparePassword(password, user.password);
    if (result.invalidPassword) {
      return res.status(406).json({
        acknowledgement: false,
        message: "Not Acceptable",
        description: "Password won't match. Please, retry correct or forgot",
      });
    }

    if (result.invalidStatus) {
      return res.status(401).json({
        acknowledgement: false,
        message: "Unauthorized",
        description: "Account is not activated, verify it first",
      });
    }

    const token = jwtTokenUtility(result);
    const { password, ...user } = result.toObject();

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Existing user login complete",
      data: user,
      accessToken: token,
    });
  } catch (error) {
    next(error);
  }
};

/* retain a user after login, based token expiry */
exports.persistMeLogin = async (req, res, next) => {
  try {
    const result = await userService.persistMeLogin(req.user.email);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "User founded logged in",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display all users */
exports.displayAllUsers = async (req, res, next) => {
  try {
    const result = await userService.displayAllUsers();

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetching all users",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* reset password */
exports.forgotPassword = async (req, res, next) => {
  try {
    const user = await userService.forgotPassword(
      req.body,
      req.protocol,
      req.get("host")
    );

    if (user.acknowledgement === false) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "User not found or exist",
      });
    }

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully reset password, ready to go",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

/* confirm password reset */
exports.confirmPasswordReset = async (req, res, next) => {
  try {
    const user = await userService.confirmPasswordReset(req.query.token);

    if (user.acknowledgement === false) {
      return res.status(401).json({
        acknowledgement: false,
        message: "Unauthorized",
        description: "The token provided by email is expired. Please, retry",
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "New password availability acceded successfully",
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const result = await userService.updateUser(req.query.email, req.body);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "New password availability acceded successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove an user account */
exports.removeAnUser = async (req, res, next) => {
  try {
    const result = await userService.removeAnUser(req.query.id);

    if (result.acknowledgement === false) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "User not found or exist",
      });
    }

    if (result.invalidRole) {
      return res.status(403).json({
        acknowledgement: false,
        message: "Forbidden",
        description: "Invalid user role not be deleted",
      });
    }

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully removed an user",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
