const User = require("../models/UserModel");
const { argon2 } = "argon2";

module.exports = {
  getUsers: async (req, res) => {
    try {
      const response = await User.findAll();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const response = await User.findOne({ where: { uuid: req.params.id } });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  createUser: async (req, res) => {
    const { name, email, password, confPassword, role } = req.body;
    console.log("yok gas!!", name, email, password, confPassword, role);
    if (password !== confPassword)
      return res
        .status(400)
        .json({ msg: "Password dan confirm password tidak cocok" });
    const hashPassword = await argon2.hash(password);
    try {
      await User.create({
        name: name,
        email: email,
        password: hashPassword,
        role: role,
      });
      res.status(201).json({ msg: "Register Akun Berhasil" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },

  updateUser: (req, res) => {},

  deleteUser: (req, res) => {},
};
