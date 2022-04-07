module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*'],
  env: {
    node: true,
    es6: true
  },
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        ecmaVersion: 2020,
        project: ['tsconfig.json'],
        createDefaultProgram: true
      },
      plugins: ['simple-import-sort', 'unused-imports', 'the-step-down-rule'],
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
      ],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase'
          }
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case'
          }
        ],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_'
          }
        ],
        'the-step-down-rule/the-step-down-rule': 2,
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: [
              // Index signature
              'signature',

              // Fields
              'public-static-field',
              'protected-static-field',
              'private-static-field',
              'public-decorated-field',
              'protected-decorated-field',
              'private-decorated-field',
              'public-instance-field',
              'protected-instance-field',
              'private-instance-field',
              'public-abstract-field',
              'protected-abstract-field',
              'private-abstract-field',

              // Constructors
              'public-constructor',
              'protected-constructor',
              'private-constructor',

              // Getters
              'public-static-get',
              'protected-static-get',
              'private-static-get',

              'public-decorated-get',
              'protected-decorated-get',
              'private-decorated-get',

              'public-instance-get',
              'protected-instance-get',
              'private-instance-get',

              'public-abstract-get',
              'protected-abstract-get',
              'private-abstract-get',

              'public-get',
              'protected-get',
              'private-get',

              'static-get',
              'instance-get',
              'abstract-get',

              'decorated-get',

              'get',

              // Setters
              'public-static-set',
              'protected-static-set',
              'private-static-set',

              'public-decorated-set',
              'protected-decorated-set',
              'private-decorated-set',

              'public-instance-set',
              'protected-instance-set',
              'private-instance-set',

              'public-abstract-set',
              'protected-abstract-set',
              'private-abstract-set',

              'public-set',
              'protected-set',
              'private-set',

              'static-set',
              'instance-set',
              'abstract-set',

              'decorated-set',

              'set',

              // Methods
              'public-static-method',
              'protected-static-method',
              'private-static-method',
              'public-decorated-method',
              'protected-decorated-method',
              'private-decorated-method',
              'public-instance-method',
              'protected-instance-method',
              'private-instance-method',
              'public-abstract-method',
              'protected-abstract-method',
              'private-abstract-method'
            ]
          }
        ]
      }
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {}
    }
  ]
}
