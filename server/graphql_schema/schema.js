var { buildSchema } = require('graphql')

// test schema
const test_schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    hello: String
  }

  type Mutation {
    signup(email: String!, password: String!, name: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }
`);

module.exports = {
    SCHEMA: test_schema
};