module.exports.sum = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;

module.exports.asyncSum = (...args) => Promise.resolve(sum(...args));
module.exports.asyncSubtract = (...args) => Promise.resolve(subtract(...args));
