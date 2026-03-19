const { parse } = require('@babel/parser');
const { transform } = require('@babel/core');

function fakeJsPlugin(babel) {
  return {
    name: 'fake-js',
    visitor: {
      Program(path) {
        // Your existing code here
      },
      // ... other visitors
    }
  };
}

module.exports = fakeJsPlugin;