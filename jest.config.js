module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.protocols.ts',
    '!**/protocols/**'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: '@shell/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
