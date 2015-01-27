/**
 * function-regex <https://github.com/tunnckoCore/function-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

module.exports = function functionRegex() {
  return /^function\s*([\w$]*)\s*\(([\w\s,$]*)\)\s*\{([\w\W\s\S]*)\}$/;
};
