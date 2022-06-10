const express = require("express");
const router = express.Router();

const { getGames, setGame, updateGame, deleteGame } = require("../controllers/gamecontroller");

const { protect } =  require('../middleware/authhandler');

router.route("/").get(protect, getGames).post(protect, setGame);
router.route("/:id").put(protect, updateGame).delete(protect, deleteGame);

module.exports = router;