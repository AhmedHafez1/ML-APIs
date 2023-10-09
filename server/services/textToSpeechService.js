const { NotFound } = require("../errors");
const { TextToSpeechClient } = require("@google-cloud/text-to-speech");
const client = new TextToSpeechClient();

async function synthesize(text, languageCode, voiceName, speed, pitch) {
  const request = {
    audioConfig: {
      audioEncoding: "MP3",
      pitch,
      speakingRate: speed,
    },
    input: {
      text,
    },
    voice: {
      languageCode,
      name: voiceName,
    },
  };

  const [response] = await client.synthesizeSpeech(request);
  return response.audioContent;
}

async function getVoiceList(languageCode) {
  const request = {
    languageCode,
  };

  const response = await client.listVoices(request);

  if (!response?.[0]?.voices)
    throw new NotFound("No voices available for the selected language");

  return response[0].voices;
}

module.exports = { synthesize, getVoiceList };
