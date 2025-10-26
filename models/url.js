const mongoose = require("mongoose");
const User = require("./user");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },

    redirectURL: {
      type: String,
      required: true,
    },

    visitHistroy: [
      {
        timestamp: { type: Number },
      },
    ],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  },
  { timestamps: true }
);

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
