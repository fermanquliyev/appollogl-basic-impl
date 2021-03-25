const { gql } = require('apollo-server')

const typeDefs = gql`
"A track is a group of Modules that teaches about a specific topic"
type Query {
    tracksForHome:[Track!]!
}

type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
}

type Author {
      id: ID!
      name:String!
      photo: String
}
`;

module.exports = typeDefs;