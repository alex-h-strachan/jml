/* eslint-disable no-param-reassign */

const uuid = require('uuid').v4;
const reservedWords = require('../lang/reserved-words');

function decorateWithID(jml, salt = uuid()) {
  // decorate JML object with jmlids
  jml.jmlid = salt;

  Object.keys(jml).forEach((key) => {
    if (key === 'listeners') {
      jml.listeners.forEach((listener) => {
        listener.jmlid = salt;
      });
    }
    // ignore reserved properties
    if (reservedWords.includes(key)) {
      return;
    }
    // decorate others
    if (typeof (jml[key]) === 'object') {
      decorateWithID(jml[key], `${salt}-${key}`);
    }
  });
}

module.exports = decorateWithID;
