/**
 * @file Built in next js app router naming convention
 * @author Huan Luo
 */
'use strict';

const { CAMEL_CASE, KEBAB_CASE } = require('./naming-convention');

/**
 * @example [helpPageId]
 */
const NEXT_JS_DYNAMIC_SEGMENTS = `\\[${CAMEL_CASE}\\]`;

/**
 * @example [...auth]
 */
const NEXT_JS_CATCH_ALL_SEGMENTS = `\\[...${CAMEL_CASE}\\]`;

/**
 * @example [[...auth]]
 */
const NEXT_JS_OPTIONAL_CATCH_ALL_SEGMENTS = `\\[\\[...${CAMEL_CASE}\\]\\]`;

/**
 * @example (auth)
 */
const NEXT_JS_ROUTE_GROUPS = `\\(${KEBAB_CASE}\\)`;

/**
 * @example \@feed
 */
const NEXT_JS_NAMED_SLOTS = `\\@${KEBAB_CASE}`;

/**
 * @example app, [helpPageId], [...auth], [[...auth]], (auth), \@feed
 */
const NEXT_JS_APP_ROUTER_CASE = `@(${KEBAB_CASE}|${NEXT_JS_DYNAMIC_SEGMENTS}|${NEXT_JS_CATCH_ALL_SEGMENTS}|${NEXT_JS_OPTIONAL_CATCH_ALL_SEGMENTS}|${NEXT_JS_ROUTE_GROUPS}|${NEXT_JS_NAMED_SLOTS})`;

module.exports = {
  NEXT_JS_APP_ROUTER_CASE,
};
