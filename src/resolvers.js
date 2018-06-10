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
    async addUser(_, { input }, context) {
      const user = await model.addUser(input);
      return user;
    },
    async updateUser(_, { input }, context) {
      const [user] = await model.updateUser(input);
      return user;
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
