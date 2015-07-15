var test = require("tape");
var compareTime = require("../../../app/lib/compare-time.js")

var fixtures = require("../../fixtures/data.fixture.js")
var sorted = fixtures.sortedData();
var unsorted = fixtures.unsortedData();

test("testing that compare time function", function(t) {
	unsorted.sort(compareTime)

	t.deepEqual(unsorted, sorted, "sorts correctly");
	t.end();
})