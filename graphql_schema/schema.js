var { buildSchema } = require('graphql')

// test schema
const test_schema = buildSchema(`
  type Query {
    hello: String
  }
`);

module.exports = {
    SCHEMA: test_schema
};