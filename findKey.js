const findKey = function (object1, callback) {
  const keys = Object.keys(object1);
  for (const key of keys) {
    if (callback(object1[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;