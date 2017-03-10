const uuid = require('uuid').v4;

const utils = {};
utils.decorateJmlIds = require('../utils/decorate-jml-ids');
utils.translateToHtml = require('../utils/translate-to-html');


class Jml {
  constructor(document, query, salt = uuid()) {
    this.document = Object.assign({}, document);
    this.query = query;
    this.salt = salt;
    this.decorate();
    this.render();
  }

  update(document) {
    this.document = Object.assign({}, document);
    // probably do some diffing instead of this...
    this.decorate();
    this.render();
  }

  decorate() {
    utils.decorateJmlIds(this, this.salt);
  }

  get rendered() {
    return utils.translateToHtml(this);
  }

  render() {
    const rendered = this.rendered;
    console.log(rendered);
    document.querySelector(this.query).innerHTML = rendered.html;

    // handle the listeners
  }
}

module.exports = Jml;
