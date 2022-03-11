
const {
    GraphQLObjectType,
} = require('graphql');


//importing search Types
const globalSearch = require('./findAll')
const targetdSearches = require('./targetSearch')
console.log(globalSearch)

const RootQuery = new GraphQLObjectType({
    name: 'BaseQueries',
    fields: {
        ...globalSearch,
        ...targetdSearches
    }
});

module.exports = RootQuery