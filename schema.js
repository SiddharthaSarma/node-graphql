const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type.GraphQLString},
    email: {type.GraphQLString},
    age: {type.GraphQLInt}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  customer: {
    type: CustomerType,
    args: {
      id: {type: GraphQLString}
    },
    resolve(parentValue, args) {
      
    }
  }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});