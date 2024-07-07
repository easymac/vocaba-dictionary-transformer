import crypto from 'crypto';

export function transformEntry(entry) {
  return reduceValue(entry);
}

function reduceValue(value) {
  const result = {};
  result.word = value.word;
  result.forms = value.forms;
  result.lexicalCategory = value.pos;
  result.ipa = parseSounds(value.sounds);
  result.id = crypto.randomUUID();
  result.meanings = value.senses.map(reduceSense);
  return result;
}

function reduceSense(sense) {
  const result = {};
  result.definitions = sense.glosses;
  result.alt_of = sense.alt_of;
  return result;
}

function parseSounds(sounds) {
  if (sounds?.length) {
    return sounds[0].ipa || null;
  }
  return null
}
