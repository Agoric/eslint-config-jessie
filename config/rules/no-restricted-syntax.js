module.exports = [
  'error',
  {
    selector: "BinaryExpression[operator='in']",
    message: "'in' is not allowed.",
  },
  {
    selector: "BinaryExpression[operator='instanceof']",
    message: "'instanceof' is not allowed.",
  },
  {
    selector: 'NewExpression',
    message: "'new' is not allowed.",
  },
  {
    selector: 'FunctionDeclaration[generator=true]',
    message: 'generators are not allowed.',
  },
  {
    selector: 'FunctionDeclaration[async=true]',
    message: 'async functions are not allowed.',
  },
  {
    selector: 'FunctionExpression[async=true]',
    message: 'async functions are not allowed.',
  },
  {
    selector: 'ArrowFunctionExpression[async=true]',
    message: 'async functions are not allowed.',
  },
  {
    selector: 'DoWhileStatement',
    message: 'do/while statements are not allowed.',
  },
  {
    selector: 'ThisExpression',
    message: "'this' not allowed.",
  },
  {
    selector: "UnaryExpression[operator='delete']",
    message: "'delete' not allowed.",
  },
  {
    selector: 'ForInStatement',
    message: 'for/in statements are not allowed.',
  },
  {
    selector: 'MemberExpression[computed=true]',
    message: 'computed property names are not allowed.',
  },
  {
    selector: 'Super',
    message: "'super' is not allowed.",
  },
  {
    selector: 'MetaProperty',
    message: "'MetaProperty' is not allowed.",
  },
  {
    selector: 'ClassExpression',
    message: "'ClassExpression' is not allowed.",
  },
  {
    selector: "CallExpression[callee.name='eval']",
    message: "'eval' is not allowed.",
  },
  {
    selector: "Literal[regex='true']",
    message: 'regexp literal syntax is not allowed.',
  },
];
