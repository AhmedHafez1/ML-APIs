const mongoose = require("mongoose");

const SpeechSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    language: { type: String, required: true },
    voice: { type: String, required: true },
    path: { type: String },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Speech", SpeechSchema);
