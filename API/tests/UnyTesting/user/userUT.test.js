const { generateString } = require('../../../app/utils/stringGeneration');

test('test validationUUID utils', () => {
  const generateStringValue = generateString();
  expect(generateStringValue).not.toBe('Max');
});
