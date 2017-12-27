module.exports = {
  extends: ['airbnb'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
  },
  env: {
    es6: true
  },
  rules: {
    'valid-jsdoc': ["error",
      {
        "preferType": {
          "Boolean": "boolean",
          "Number": "number",
          "array": "Array",
          "object": "Object",
          "Integer": "int",
          "intrger": "int",
          "float": "number",
          "double": "number",
          "String": "string"
        }
      }],
    'require-jsdoc': ["error", {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true,
        "ArrowFunctionExpression": false,
        "FunctionExpression": false
      }
    }]
  }
};