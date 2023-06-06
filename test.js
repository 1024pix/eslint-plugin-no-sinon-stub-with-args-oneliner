'use strict';

const rule = require('./index.js'),
  RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run('no-sinon-stub-with-args-oneliner', rule, {
  valid: [
    {
      name: 'Only stub',
      code: 'sinon.stub()',
    },
    {
      name: 'Two liners',
      code: "const stub = sinon.stub(); stub.withArgs('hello').returns('world')",
    },
  ],

  invalid: [
    {
      name: 'One liner',
      code: `const stub = sinon.stub().withArgs('hello').returns('world')`,
      errors: [
        {
          messageId: 'chainError',
        },
      ],
    },
  ],
});
