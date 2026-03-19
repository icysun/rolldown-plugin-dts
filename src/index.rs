#![allow(unused_imports)]
use oxc::ast::parse;
use oxc::transform;
use fake_js::fake_js_plugin;

pub fn process_source_code(source_code: &str) -> String {
  let ast = parse(source_code).unwrap();
  let transformed_ast = transform(ast).unwrap();
  transformed_ast.to_string() // Convert the AST back to source code
}
