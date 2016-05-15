"use strict";

var Unit = require('./unit');

describe("Unit ::", function () {
  var testingUnit;
  beforeEach(function(){
    testingUnit = new Unit();
  });
  it("has a name", function () {
    expect(testingUnit.name).toBe('Unit');
  });
  it("has a codeStyle Url", function () {
    expect(typeof testingUnit.getCodeStyleUrl(6)).toBe('string');
  });
});
