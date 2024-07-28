const catchAsyncErrors = require("../utils/catchAsyncErrors");

const {
  getAll,
  getOne,
  update,
  create,
  delete: deleteOne,
} = require("../services/song.service");
const Song = require("../models/song.model");

exports.getAllSongs = getAll(Song);
exports.getSongById = getOne(Song);
exports.addSong = create(Song);
exports.updateSongById = update(Song);
exports.deleteSongById = deleteOne(Song);
