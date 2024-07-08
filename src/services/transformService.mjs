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
  result.meanings = value.senses
    .filter(filterTags)
    .map(reduceSense);
  return result;
}

function reduceSense(sense) {
  const result = {};
  result.definitions = sense.glosses;
  result.alt_of = sense.alt_of;
  result.tags = sense.tags;
  return result;
}

function parseSounds(sounds) {
  if (sounds?.length) {
    return sounds[0].ipa || null;
  }
  return null
}

function filterTags(sense) {
  if (typeof sense.tags === 'undefined') return true;
  if (sense.tags.includes('form-of')) {
    return false
  }
  if (sense.tags.includes('abbreviation') || sense.tags.includes('initialism')) {
    return false
  }

  return true
}