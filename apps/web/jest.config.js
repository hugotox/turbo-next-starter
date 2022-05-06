module.exports = require('@hugotox/config/jest.config')({
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 50,
      lines: 80,
      statements: 80,
    },
  },
})
