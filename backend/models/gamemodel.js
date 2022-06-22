const mongoose = require("mongoose");

const gameSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "please add some text"],
    },
    type: {
      type: String,
      required: [true, "please add some text"],
    },
    game: {
      type: String,
      required: [true, "please add some text"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Game", gameSchema);
