const usersService = require("../services/user");

const userJoiSchema = require("../joi/user");

const { validatePassword } = require("../utils");

const SERVER_ERROR = "SERVER_ERROR";
const USER_ALREADY_REGISTERED = "USER_ALREADY_REGISTERED";
const PASSWORD_NOT_VALIDATED = "PASSWORD_NOT_VALIDATED";

const userController = {
  getAll: async (req, res) => {
    try {
      const users = await usersService.getAll({ ...req.query, organisation: req.user.organisation });
      return res.status(200).send({ ok: true, data: users });
    } catch (error) {
      console.log(error);
      res.status(500).send({ ok: false, code: SERVER_ERROR, error });
    }
  },
  getAvailable: async (req, res) => {
    try {
      const users = await usersService.getAll({ availability: { $ne: "not available" }, organisation: req.user.organisation });

      return res.status(200).send({ ok: true, data: users });
    } catch (error) {
      console.log(error);
      res.status(500).send({ ok: false, code: SERVER_ERROR, error });
    }
  },
  get: async (req, res) => {
    try {
      const data = await usersService.get(req.params.id);
      return res.status(200).send({ ok: true, data });
    } catch (error) {
      console.log(error);
      res.status(500).send({ ok: false, code: SERVER_ERROR, error });
    }
  },
  create: async (req, res) => {
    try {
      if (!validatePassword(req.body.password)) return res.status(400).send({ ok: false, user: null, code: PASSWORD_NOT_VALIDATED });

      const data = { ...req.body, organisation: req.user.organisation };

      const {error, value: userData} = userJoiSchema.validate(data)
      
      const user = await usersService.create(userData);

      return res.status(200).send({ data: user, ok: true });
    } catch (error) {
      if (error.code === 11000) return res.status(409).send({ ok: false, code: USER_ALREADY_REGISTERED });
      console.log(error);
      return res.status(500).send({ ok: false, code: SERVER_ERROR });
    }
  },
  update: async (req, res) => {
    try {
      const obj = req.body;
      
      //validation
      const {error, value: userData} = userJoiSchema.validate(obj)
      
      const user = await usersService.update(req.params.id, userData);
      res.status(200).send({ ok: true, user });
    } catch (error) {
      console.log(error);
      res.status(500).send({ ok: false, code: SERVER_ERROR, error });
    }
  },
  updateCurrent: async (req, res) => {
    try {
      const obj = req.body;
      //validation
      const {error, value: userData} = userJoiSchema.validate(obj)
      
      const data = await usersService.update(req.user._id, userData);
      res.status(200).send({ ok: true, data });
    } catch (error) {
      console.log(error);
      res.status(500).send({ ok: false, code: SERVER_ERROR, error });
    }
  },
  delete: async (req, res) => {
    try {
      await usersService.deleteOne(req.params.id);
      res.status(200).send({ ok: true });
    } catch (error) {
      console.log(error);
      res.status(500).send({ ok: false, code: SERVER_ERROR, error });
    }
  },
};

module.exports = userController;
