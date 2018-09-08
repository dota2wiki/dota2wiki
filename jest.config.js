module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 93,
      functions: 100,
      lines: 100,
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/(tests|__tests__)/**/*.ts|**/*.(spec|test).ts'],
  testURL: 'http://localhost',
  moduleDirectories: ['node_modules', 'packages'],
};
