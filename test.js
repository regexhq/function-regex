/**
 * function-regex <https://github.com/tunnckoCore/function-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var fnRegex = require('./index');
var cleanupCoverageCode = require('cleanup-coverage-code');
var fixtures = require('./fixtures');

function match(str) {
  return str.toString().match(fnRegex());
}

function hackExpected(expected) {
  expected = expected.split('var').filter(Boolean);
  expected = expected.map(function(val) {
    return val.replace(/\s+/g,'');
  }).map(function(val) {
    return val.replace(/(function|return)(?:t|f)*?(?!\{)/g,'$1 ');
  });
  expected = expected.filter(Boolean).join('var ');
  expected = 'var ' + expected;

  return expected;
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

    // hack, because the coverage tools remove whitespaces
    actual = actual.split(',').join(', ');
    assert.strictEqual(actual, expected);

    // fixtureTwo
    actual = match(fixtures.fixtureTwo().fn)[2]
    expected = 'val';

    assert.strictEqual(actual, expected);
    done();
  });

  it('should match function body (fixtureOne)', function(done) {
    var actual = match(fixtures.fixtureOne().fn)[3]
    var expected = hackExpected(fixtures.fixtureOne().body);

    // hack, because the coverage tools add some ugly code
    // like `__cov_Ejgcx$XN18CSfmeWn$f7vQ.f['2']++`
    actual = cleanupCoverageCode(actual);

    assert.strictEqual(actual, expected);
    done();
  });

  it('should match function body (fixtureTwo)', function(done) {
    var actual = match(fixtures.fixtureOne().fn)[3]
    var expected = hackExpected(fixtures.fixtureOne().body);

    // hack, because the coverage tools add some ugly code
    // like `__cov_Ejgcx$XN18CSfmeWn$f7vQ.f['2']++`
    actual = cleanupCoverageCode(actual);

    assert.strictEqual(actual, expected);
    done();
  });
});
