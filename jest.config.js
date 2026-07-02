module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(webm|mp4|jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot)$':
      '<rootDir>/test/__mocks__/fileMock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/']
}
