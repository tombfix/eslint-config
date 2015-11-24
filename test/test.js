/* eslint-env node, mocha */

(function executeTest() {
  'use strict';

  let assert = require('power-assert');
  let eslint = require('eslint');

  let eslintConfig = require('..');

  function isObject(target) {
    return typeof target === 'object' && target !== null &&
      Object.prototype.toString.call(target).slice(8, -1) === 'Object';
  }

  function trimIndent(str) {
    let indentLength = /^ +/.exec(str.split(/\r?\n/)[1])[0].length;

    return str.replace(new RegExp(`^ {${indentLength}}`, 'gm'), '').trim();
  }

  describe('basic', () => {
    it('Check eslintConfig object', () => {
      assert(isObject(eslintConfig));
      assert(isObject(eslintConfig.env));
      assert(isObject(eslintConfig.rules));
    });
  });

  let cli = new eslint.CLIEngine({
    useEslintrc: false,
    baseConfig: eslintConfig
  });

  describe('applied', () => {
    it('Validate eslintConfig', () => {
      let code = trimIndent(`
        (function executeBasic() {
          'use strict';

          let num = 0;

          return num;
        }());
      `);

      assert(cli.executeOnText(`${code}\n`).errorCount === 0);

      let res = cli.executeOnText(code);

      assert(res.errorCount === 1);
      assert(res.results[0].messages[0].ruleId === 'eol-last');
    });
  });
}());
