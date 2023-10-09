const express = require("express");
const router = express.Router();

const {
  textToSpeech,
  getLanguageVoiceList,
} = require("../controllers/text-to-speech");

router.post("/", textToSpeech);
router.get("/voice-list", getLanguageVoiceList);

module.exports = router;
