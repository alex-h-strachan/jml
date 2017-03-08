const styleConverter = require('./style-converter');

function translateToHtml(jml) {
  const listeners = [];

  const children = Object.keys(jml).map((key) => {
    // text already rendered
    if (key === 'listeners') {
      listeners.push(...jml.listeners);
      return '';
    }

    if (key === 'style') {
      return styleConverter(jml.style, jml.jmlid);
    }

    if (typeof (jml[key]) === 'object') {
      const child = translateToHtml(jml[key]);
      listeners.push(...child.listeners);
      return child.html;
    }

    return '';
  }).join('');

  const html = `
    <div id="${jml.jmlid}">
      ${jml.text || ''}
      ${children}
    </div>
  `;

  return {
    html,
    listeners,
  };
}

module.exports = translateToHtml;
