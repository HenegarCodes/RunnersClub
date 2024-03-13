const typeDefs = `

type User {
    _id: ID!
    username: String!
    email: String!
    bio: String
    avatar: String
    followers: [User]
    reviews: String
    wishlist: [Game]
    currentlyPlaying: [Game]
  }

type Auth {
    token: ID! 
    user: User
}
type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
}
`

module.exports = typeDefs;
