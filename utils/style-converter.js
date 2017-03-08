const camelToDash = require('./camel-to-dash');

function styleConverter(styles, id) {
  return `
    <style>
      #${id} {
        ${Object
            .keys(styles)
            .map(atr => `${camelToDash(atr)} : ${styles[atr]}`)
            .join(';')
        }
      }
    </style>
  `;
}

module.exports = styleConverter;
