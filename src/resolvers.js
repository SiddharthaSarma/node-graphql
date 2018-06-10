import { model } from './models/users';
export const resolvers = {
  Query: {
    async onePerson(_, { id }) {
      const person = await model.getPerson(id);
      return person;
    },
    async getAllUsers(_, { id }) {
      const users = await model.getPersons(id);
      return users;
    }
  },
  Mutation: {
    addUser: (_, { input }, context) => {
      return {
        name: input.name
      };
    }
  },
  User: {
    id(user) {
      return user._id;
    }
  }
};
