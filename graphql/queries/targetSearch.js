
const {
    GraphQLList,
    GraphQLInt,
    GraphQLString
} = require('graphql');

// importing Types
const { UsersType } = require('../types/user')

//importing DB
const db = require('../../models')

const targetdSearches = {
    findUserById: {
        type: UsersType,
        args: {
            user_id: { type: GraphQLInt }
        },
        resolve(parent, args) {
            return db.Users.findByPk(args.user_id)
        }
    },
    findUserByEmail: {
        type: new GraphQLList(UsersType),
        args: {
            email: { type: GraphQLString }
        },
        resolve(parent, args) {
            return db.Users.findAll({ where: { email: args.email } })
        }
    },
}

module.exports = targetdSearches