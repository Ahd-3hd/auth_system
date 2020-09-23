const User = require("../models/User");

// handle errors

const handleErrors = (err) => {
  let errors = {
    email: "",
    password: "",
  };

  // duplicate error code

  if (err.code === 11000) {
    errors.email = "email already registered";
    return errors;
  }
  // validation errors

  if (err.message.includes("user validation failed")) {
    console.log(
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      })
    );
  }
  return errors;
};
module.exports.signup_get = (req, res) => {
  res.send("sign up");
};

module.exports.login_get = (req, res) => {
  res.send("login");
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({
      email,
      password,
    });
    res.status(201).json(user);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send("user login");
};
