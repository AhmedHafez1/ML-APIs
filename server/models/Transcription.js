const mongoose = require("mongoose");

const transcriptionSchema = new mongoose.Schema(
  {
    transcriptionText: { type: String, required: true },
    translationText: { type: String, required: true },
    inputLanguage: { type: String, required: true },
    targetLanguage: { type: String, required: true },
    title: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transcription", transcriptionSchema);
