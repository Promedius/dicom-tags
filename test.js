const assert = require('assert');
const dicomTags = require('./index');

assert.strictEqual(dicomTags.get('Pixel Data'), '7FE00010');
assert.strictEqual(dicomTags.get('Pixel Data', true), '7FE00010');
assert.strictEqual(dicomTags.get('Pixel Data', false), '7fe00010');
assert.strictEqual(dicomTags.get('Pixel Data', true, 'x'), 'x7FE00010');
assert.strictEqual(dicomTags.get('Pixel Data', false, 'x'), 'x7fe00010');

assert.strictEqual(dicomTags.get('Wrong Name'), null);
assert.strictEqual(dicomTags.get('Wrong Name', true), null);
assert.strictEqual(dicomTags.get('Wrong Name', false),null);
assert.strictEqual(dicomTags.get('Wrong Name', true, 'x'), null);
assert.strictEqual(dicomTags.get('Wrong Name', false, 'x'), null);

console.log('test ok');