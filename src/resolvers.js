import { model } from './models/users';
export const resolvers = {
  Query: {
    async getUser(_, { id }) {
      const [user] = await model.getUser(id);
      return user;
    },
    async getAllUsers(_, { id }) {
      const users = await model.getPersons(id);
      return users;
    }
  },
  Mutation: {
    addUser(_, { input }, context) {
      return {
        name: input.name
      };
    },
    async deleteUser(_, { id }, context) {
      const result = await model.deleteUser(id);
      return result;
    }
  },
  User: {
    id(user) {
      return user._id;
    }
  }
};
