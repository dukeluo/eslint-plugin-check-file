/**
 * @fileoverview Built in filename naming convention
 * @author Duke Luo
 */
'use strict';

/**
 * @example hello, helloWorld
 */
const CAMEL_CASE = '+([a-z])*([A-Z]*([a-z0-9]))';

/**
 * @example Hello, HelloWorld
 */
const PASCAL_CASE = '*([A-Z]*([a-z0-9]))';

/**
 * @example hello, hello_world
 */
const SNAKE_CASE = '+([a-z])*([a-z0-9])*(_+([a-z0-9]))';

/**
 * @example hello, hello-world
 */
const KEBAB_CASE = '+([a-z])*([a-z0-9])*(-+([a-z0-9]))';

/**
 * @example HELLO, HELLO_WORLD
 */
const SCREAMING_SNAKE_CASE = '+([A-Z])*([A-Z0-9])*(_+([A-Z0-9]))';

/**
 * @example hello, helloworld
 */
const FLAT_CASE = '+([a-z0-9])';

module.exports = {
  CAMEL_CASE,
  PASCAL_CASE,
  SNAKE_CASE,
  KEBAB_CASE,
  SCREAMING_SNAKE_CASE,
  FLAT_CASE,
};
