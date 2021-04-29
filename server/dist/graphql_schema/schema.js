'use strict';

var _require = require('graphql'),
    buildSchema = _require.buildSchema;

// test schema


var test_schema = buildSchema('\n  type User {\n    id: ID!\n    name: String!\n    email: String!\n  }\n\n  type AuthPayload {\n    token: String\n    user: User\n  }\n\n  type Query {\n    hello: String\n  }\n\n  type Mutation {\n    signup(email: String!, password: String!, name: String!): AuthPayload\n    login(email: String!, password: String!): AuthPayload\n  }\n');

module.exports = {
  SCHEMA: test_schema
};