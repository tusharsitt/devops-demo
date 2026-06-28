// Simple test — no dependencies needed
const assert = require('assert');

function add(a, b) { return a + b; }

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(add(0, 0), 0);

console.log('✅ All tests passed');
