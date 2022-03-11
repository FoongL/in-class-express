const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = require('graphql');

const TasksType = new GraphQLObjectType({
    name: 'Tasks',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        userId: { type: GraphQLInt },
    })
});

module.exports = { TasksType }