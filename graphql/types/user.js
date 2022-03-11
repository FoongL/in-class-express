const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = require('graphql');

const UsersType = new GraphQLObjectType({
    name: 'Users',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    })
});

module.exports = { UsersType }