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

assert.strictEqual(dicomTags.get('Overlay Rows'), '60xx0010');
assert.strictEqual(dicomTags.get('Overlay Rows', true), '60xx0010');
assert.strictEqual(dicomTags.get('Overlay Rows', false), '60xx0010');
assert.strictEqual(dicomTags.get('Overlay Rows', true, 'x'), 'x60xx0010');
assert.strictEqual(dicomTags.get('Overlay Rows', false, 'x'), 'x60xx0010');
assert.strictEqual(dicomTags.get('Overlay Rows', true, '', '00'), '60000010');
assert.strictEqual(dicomTags.get('Overlay Rows', false, '', '00'), '60000010');
assert.strictEqual(dicomTags.get('Overlay Rows', true, 'x', '00'), 'x60000010');
assert.strictEqual(dicomTags.get('Overlay Rows', false, 'x', '00'), 'x60000010');

console.log('test ok');