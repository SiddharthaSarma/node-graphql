const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

const customers = [
  {id: '1', name:'siddhartha', email: 'johndoe@gmail.com', age: 24},
  {id: '2', name:'siddhartha', email: 'johndoe@gmail.com', age: 26},
  {id: '3', name:'siddhartha', email: 'johndoe@gmail.com', age: 25},
  ];
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    age: {type: GraphQLInt}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: {type: GraphQLString}
      },
      resolve(parentValue, args) {
        return customers.filter(customer => customer.id == args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});