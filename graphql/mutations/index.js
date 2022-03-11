
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');

// importing Types
const { UsersType } = require('../types/user')

//importing DB
const db = require('../../models')

const RootMutation = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        addNewUser: {
            type: UsersType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parentValue, args) {
                const {name, email, password } = args
                return db.Users.create({ 
                    name,
                    email,
                    password
                })
            },
        },
    },
});

module.exports = RootMutation