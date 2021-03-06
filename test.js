// npx babel-node test.js | npx faucet
const test = require("tape");

test("A passing test", (assert) => {
  assert.pass("This test will pass.");

  assert.end();
});

test("Assertions with tape.", (assert) => {
  const expected = "something to test";
  const actual = "sonething to test";

  assert.equal(
    actual,
    expected,
    "Given two mismatched values, .equal() should produce a nice bug report"
  );

  assert.end();
});
