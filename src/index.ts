import { parse } from '@babel/parser';
import { transform } from '@babel/core';
import fakeJsPlugin from './fake-js';

export function processSourceCode(sourceCode) {
  const ast = parse(sourceCode, { sourceType: 'module' });
  const transformedAst = transformFromAstSync(ast, sourceCode, { plugins: [fakeJsPlugin] });
  return transformedAst.code;
}
