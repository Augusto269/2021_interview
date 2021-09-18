const { generateString } = require('../../../app/utils/stringGeneration');

test('test generat random string utils', () => {
  const generateStringValue = generateString();
  expect(generateStringValue).not.toBe('Max');
});
