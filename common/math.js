module.exports.sum = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;

module.exports.asyncSum = (...args) => Promise.resolve(module.exports.sum(...args));
module.exports.asyncSubtract = (...args) => Promise.resolve(module.exports.subtract(...args));
