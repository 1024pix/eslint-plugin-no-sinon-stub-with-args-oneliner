'use strict';

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Do not chain `sinon.stub()` with the `withArgs()` method in a one-liner',
    },
    messages: {
      chainError:
        '`sinon.stub()` should not be chained with the `withArgs` method.',
    },
  },
  create: function (context) {
    return {
      'MemberExpression[property.name="withArgs"] > CallExpression > MemberExpression[property.name="stub"][object.name="sinon"]':
        function (node) {
          context.report({
            node: node,
            messageId: 'chainError',
          });
        },
    };
  },
};
