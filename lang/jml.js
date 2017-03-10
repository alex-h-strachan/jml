const uuid = require('uuid').v4;

const utils = {};
utils.decorateJmlIds = require('../utils/decorate-jml-ids');
utils.translateToHtml = require('../utils/translate-to-html');


class Jml {
  constructor(document, query, options) {
    this.document = Object.assign({}, document);
    this.salt = options.salt || uuid();
    this.query = query;
    this.previousRendered = '';

    if (options.history) {
      this.history = [];
    }

    this.decorate();
    this.render();
  }

  setState(partial) {
    if (this.history) {
      this.history.push(Object.assign({}, this.document));
    }
    this.document = Object.assign({}, this.document, partial);
    this.decorate();
    this.render();
  }

  decorate() {
    utils.decorateJmlIds(this, this.salt);
  }

  get rendered() {
    return utils.translateToHtml(this.document);
  }

  get diff() {
    const updates = [];
    // right now diffs the whole document
    updates.push({
      query: this.query,
      html: this.rendered.html,
    });
    return updates;
  }

  render() {
    const updates = this.diff;
    updates.forEach((update) => {
      document.querySelector(update.query).innerHTML = update.html;
    });
  }
}

module.exports = Jml;
