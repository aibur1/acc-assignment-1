const express = require("express");
const userController = require("../controller/users.controller");


const router = express.Router();

router.route("/all")
    .get(userController.getAllUsers);
router.route("/random")
    .get(userController.getRandomUser);
router.route("/save")
    .post(userController.saveAUser);
router.route("/delete")
    .delete(userController.deleteAUser);
router.route("/update")
    .patch(userController.updateAUser);
module.exports = router;