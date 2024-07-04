/* eslint-disable no-undef */

module.exports = {
  transform: {
    '^.+\\.jsx?$': require.resolve('babel-jest'),
    '^.+\\.tsx?$': 'ts-jest',
  },
  automock: false,
  rootDir: '../',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/tests'],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '~/public/(.*)$': '<rootDir>/public/$1',
    '~/tests/(.*)$': '<rootDir>/tests/$1',
    '~(.*)$': '<rootDir>/src/$1',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/scripts/mocks/image.js',
    '\\.(css)$': '<rootDir>/scripts/mocks/cssModule.js',
  },
  coverageReporters: ['html', 'lcov', 'cobertura'],
  // setupFiles: ['<rootDir>/tests/mocks.ts'],
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/scripts/jest.setup.js',
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
}
