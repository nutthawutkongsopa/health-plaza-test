var assert = require('assert');
var getCommonPrefix = require('./index')


describe("function getCommonPrefix", () => {
    describe("Example 1", () => {
        it('should return "fl" when input ["flower","flow","flight"]', function () {
            assert.equal(getCommonPrefix(["flower", "flow", "flight"]), "fl");
        });
    })

    describe("Example 2", () => {
        it('should return "" when input ["dog","racecar","car"]', function () {
            assert.equal(getCommonPrefix(["dog", "racecar", "car"]), "");
        });
    })
})