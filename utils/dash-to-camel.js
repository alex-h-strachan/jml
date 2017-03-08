function dashToCamel(text) {
  return text.replace(/-./, match => match[1].toUpperCase());
}

module.exports = dashToCamel;
