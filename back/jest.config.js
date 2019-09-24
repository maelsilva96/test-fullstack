module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  //testMatch: ["**/__tests__/**/*.spec.ts?(x)"],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.spec\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
