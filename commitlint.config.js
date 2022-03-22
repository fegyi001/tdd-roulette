const ERROR = 2
const WARN = 1
const IGNORE = 0

module.exports = {
  plugins: ['@episerver/references'],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [IGNORE]
    // 'references-empty': [
    //   WARN,
    //   'never'
    // ]
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['feature/']
    }
  }
}

// test
