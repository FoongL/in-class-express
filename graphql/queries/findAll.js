
const {
    GraphQLList,
} = require('graphql');

// importing Types
const { UsersType } = require('../types/user')

//importing DB
const db = require('../../models')

const globalSearch = {
    users: {
        type: new GraphQLList(UsersType),
        resolve(parent, args) {
            return db.Users.findAll({})
        }
    }
}

module.exports = globalSearch