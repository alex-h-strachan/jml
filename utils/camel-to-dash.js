function camelToDash(text) {
  return text.replace(/[A-Z]/, match => `-${match.toLowerCase()}`);
}

module.exports = camelToDash;