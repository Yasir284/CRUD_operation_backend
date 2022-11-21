const User = require("../modules/user");

exports.home = (req, res) => {
  res.send("Hello world");
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!(name || email)) {
      throw new Error("All fields are mandatory");
    }

    const isEmailExist = await User.findOne({ email });
    if (isEmailExist) {
      throw new Error("Email already exists");
    }

    const user = await User.create({ name, email });
    res.status(200).json({
      sucess: true,
      message: "User is added to the database",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
    process.exit(1);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      sucess: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      sucess: false,
      message: error.message,
    });
  }
};

exports.editUser = async (req, res) => {
  debugger;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      sucess: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      sucess: false,
      message: "User update failed",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      sucess: true,
      message: "User deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      sucess: false,
      message: error.message,
    });
  }
};
