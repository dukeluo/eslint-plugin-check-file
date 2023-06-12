/**
 * @file Built in filename naming convention
 * @author Huan Luo
 */
'use strict';

/**
 * @example hello, helloWorld
 */
const CAMEL_CASE = '+([a-z])*([a-z0-9])*([A-Z]*([a-z0-9]))';

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

/**
 * @example [helpPageId]
 */
const NEXTJS_DYNAMIC_SEGMENTS = `\\[${CAMEL_CASE}\\]`;

/**
 * @example [...auth]
 */
const NEXTJS_CATCH_ALL_SEGMENTS = `\\[...${CAMEL_CASE}\\]`;

/**
 * @example [[...auth]]
 */
const NEXTJS_OPTIONAL_CATCH_ALL_SEGMENTS = `\\[\\[...${CAMEL_CASE}\\]\\]`;

/**
 * @example (auth)
 */
const NEXTJS_ROUTE_GROUPS = `\\(${KEBAB_CASE}\\)`;

/**
 * @example \@feed
 */
const NEXTJS_NAMED_SLOTS = `\\@${KEBAB_CASE}`;

/**
 * @example app, [helpPageId], [...auth], [[...auth]], (auth), \@feed
 */
const NEXTJS_ROUTE_CASE = `@(${KEBAB_CASE}|${NEXTJS_DYNAMIC_SEGMENTS}|${NEXTJS_CATCH_ALL_SEGMENTS}|${NEXTJS_OPTIONAL_CATCH_ALL_SEGMENTS}|${NEXTJS_ROUTE_GROUPS}|${NEXTJS_NAMED_SLOTS})`;

module.exports = {
  CAMEL_CASE,
  PASCAL_CASE,
  SNAKE_CASE,
  KEBAB_CASE,
  SCREAMING_SNAKE_CASE,
  FLAT_CASE,
  NEXTJS_ROUTE_CASE,
};
