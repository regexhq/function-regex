/**
 * function-regex <https://github.com/tunnckoCore/function-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var functionRegex = require('./index');
var fixtures = require('./fixtures');

function match(str) {
  return str.toString().match(functionRegex());
}

describe('function-regex:', function() {
  it('should match function name', function(done) {
    var actual = match(fixtures.fixtureOne().fn)[1]
    var expected = 'testing';

    assert.strictEqual(actual, expected);

    actual = match(fixtures.fixtureTwo().fn)[1]
    expected = 'typeOf';

    assert.strictEqual(actual, expected);
    done();
  });

  it('should match function arguments', function(done) {
    var actual = match(fixtures.fixtureOne().fn)[2]
    var expected = 'cmd, args, opts';

    assert.strictEqual(actual, expected);

    actual = match(fixtures.fixtureTwo().fn)[2]
    expected = 'val';

    assert.strictEqual(actual, expected);
    done();
  });

  it('should match function body', function(done) {
    var actual = match(fixtures.fixtureOne().fn)[3]
    var expected = fixtures.fixtureOne().body;

    assert.strictEqual(actual, expected);

    actual = match(fixtures.fixtureTwo().fn)[3]
    expected = fixtures.fixtureTwo().body;

    assert.strictEqual(actual, expected);
    done();
  });
});
