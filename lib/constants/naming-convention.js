/**
 * @file Built in filename naming convention
 * @author Huan Luo
 */

/**
 * @example hello, helloWorld
 */
export const CAMEL_CASE = '+([a-z])*([a-z0-9])*([A-Z]*([a-z0-9]))';

/**
 * @example Hello, HelloWorld
 */
export const PASCAL_CASE = '*([A-Z]*([a-z0-9]))';

/**
 * @example hello, hello_world
 */
export const SNAKE_CASE = '+([a-z])*([a-z0-9])*(_+([a-z0-9]))';

/**
 * @example hello, hello-world
 */
export const KEBAB_CASE = '+([a-z])*([a-z0-9])*(-+([a-z0-9]))';

/**
 * @example HELLO, HELLO_WORLD
 */
export const SCREAMING_SNAKE_CASE = '+([A-Z])*([A-Z0-9])*(_+([A-Z0-9]))';

/**
 * @example hello, helloworld
 */
export const FLAT_CASE = '+([a-z0-9])';
