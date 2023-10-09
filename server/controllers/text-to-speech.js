const { synthesize, getVoiceList } = require("../services/textToSpeechService");

const textToSpeech = async (req, res) => {
  const { text, languageCode, voiceName, speed, pitch } = req.body;
  const audioContent = await synthesize(
    text,
    languageCode,
    voiceName,
    speed,
    pitch
  );
  res.send(audioContent);
};

const getLanguageVoiceList = async (req, res) => {
  const voiceList = await getVoiceList(req.query.languageCode);
  res.send(voiceList);
};

module.exports = {
  textToSpeech,
  getLanguageVoiceList,
};
