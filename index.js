const Jml = require('./lang/jml');

function inject(doc, query) {
  document.querySelector(query).innerHTML = doc.render();
}

module.exports = {
  Jml,
  inject,
};
