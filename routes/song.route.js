const express = require("express");
const { songValidation } = require('../validations/songValidation');
const {
  getAllSongs,
  addSong,
  getSongById,
  deleteSongById,
  updateSongById,
  getStat,
} = require("../controller/music.controller");

const router = express.Router();

router.route("/").get(getAllSongs, songValidation).post(addSong);
// router.route("/count").get(getStat);

router.route("/:id").get(getSongById).delete(deleteSongById).patch(updateSongById);

module.exports = router;

