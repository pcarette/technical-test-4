const express = require("express");
const passport = require("passport");
const router = express.Router();

const UserObject = require("../models/user");
const AuthObject = require("../auth");

const userController = require("../controllers/user");

const UserAuth = new AuthObject(UserObject);

router.post("/signin", (req, res) => UserAuth.signin(req, res));
router.post("/logout", (req, res) => UserAuth.logout(req, res));
router.post("/signup", (req, res) => UserAuth.signup(req, res));

router.get("/", passport.authenticate("user", { session: false }), (req, res) => userController.getAll(req, res));

router.get("/signin_token", passport.authenticate("user", { session: false }), (req, res) => UserAuth.signinToken(req, res));

router.get("/available", passport.authenticate("user", { session: false }), (req, res) => userController.getAvailable(req, res));

router.get("/:id", passport.authenticate("user", { session: false }), (req, res) => userController.get(req, res));

router.post("/", passport.authenticate("user", { session: false }), (req, res) => userController.create(req, res));

router.put("/:id", passport.authenticate("user", { session: false }), (req, res) => userController.update(req, res));

router.put("/", passport.authenticate("user", { session: false }), (req, res) => userController.updateCurrent(req, res));

router.delete("/:id", passport.authenticate("user", { session: false }), (req, res) => userController.delete(req, res));

module.exports = router;
