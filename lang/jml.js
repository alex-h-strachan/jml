const utils = {};
utils.decorateJmlIds = require('../utils/decorate-jml-ids');
utils.translateToHtml = require('../utils/translate-to-html');


class Jml {
  constructor(document) {
    this.document = Object.assign({}, document);
    this.decorate();
  }

  update(document) {
    alert('were not quite there yet');
  }

  decorate() {
    utils.decorateJmlIds(this);
  }

  render() {
    return utils.translateToHtml(this);
  }
}

module.exports = Jml;
