const fs = require('fs');
const speech = require('@google-cloud/speech');

async function transcribeAudio() {
  const client = new speech.SpeechClient();

  const file = fs.readFileSync('path/to/your/audio/file');
  const audioBytes = file.toString('base64');

  const audio = {
    content: audioBytes,
  };

  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'en-US',
  };

  const request = {
    audio: audio,
    config: config,
  };

  const [response] = await client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');

  console.log(`Transcription: ${transcription}`);
}

transcribeAudio();