const { gql } = require("apollo-server");

const typeDefs = gql`
  "Drinks has all the info needed for creating a drink"
  type Drinks {
    _id: ID
    name: String
    liquor: String
    style: String
    flavor: String
    strong: String
    ingredients: [String]
    directions: String
    image: String
  }
  "Questions contains the parameters that we have in the  questions seeds"
  type Questions {
    _id: ID
    question: String
    key: String
    order: Int
  }
  "SelectedOptions is the option the user has selected"
  input SelectedOptions {
    key: String
    value: String
  }
  "Options will get the available drinks and the next options for creating the drink"
  type Options {
    data: [Drinks]
    options: [String]
  }
  "Query: All the queries we need so we can fetch de data to our client"
  type Query {
    drinks: [Drinks]!
    questions: [Questions]
  }
  type Mutation {
    getOptions(selectedOptions: [SelectedOptions]!, nextKey: String): Options
  }
`;

module.exports = typeDefs;
