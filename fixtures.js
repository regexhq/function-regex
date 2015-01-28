
module.exports.fixtureOne = function() {
  return {
    fn: function testing(cmd, args, opts) {
      /* istanbul ignore next */
      var obj = {
        maybe: 'yea'
      };
      /* istanbul ignore next */
      var come = function come() { return true; };

      /* istanbul ignore next */
      return {
        only: 'one',
        command: cmd,
        arguments: args,
        come: come
      };
    },
    body: '\n      var obj = {\n        maybe: \'yea\'\n      };\n      var come = function come() { return true; };\n\n      return {\n        only: \'one\',\n        command: cmd,\n        arguments: args,\n        come: come\n      };\n    '
  };
}

module.exports.fixtureTwo = function() {
  return {
    fn: function typeOf(val) {
      /* istanbul ignore next */
      if (typeof val !== 'object') {
        return typeof val;
      }

      /* istanbul ignore next */
      if (Array.isArray(val)) {
        return 'array';
      }

      /* istanbul ignore next */
      return {}.toString(val).slice(8, -1).toLowerCase();
    },
    body: '\n      if (typeof val !== \'object\') {\n        return typeof val;\n      }\n\n      if (Array.isArray(val)) {\n        return \'array\';\n      }\n\n      return {}.toString(val).slice(8, -1).toLowerCase();\n    '
  };
};
