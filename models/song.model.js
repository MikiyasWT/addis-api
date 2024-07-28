const mongoose = require("mongoose");

const songSchema = mongoose.Schema({
  title: {
    type: String,
    unique:true,
    required: [true, "song title is required"],
    get(value) {
        return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
      },
  },
  artist: {
    type: String,
    required: [true, "song artist is required"],
    get(value) {
        return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
      },
  },
  album: {
    type: String,
    required: [true, "album is required"],
  },
  genre: {
    type: String,
    required: [true, "genre is required"],
  },
  coverImage: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

songSchema.index({ title: 'text', title: 'text' });


const songModel = mongoose.model("Song", songSchema);

module.exports = songModel;
