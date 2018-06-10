import { model } from './models/users';
export const resolvers = {
  Query: {
    async onePerson(_, { id }) {
      const person = await model.getPerson(id);
      return person;
    },
    async getAllPersons(_, { id }) {
      const persons = await model.getPersons(id);
      return persons;
    }
  },
  Mutation: {
    personName: (_, { input }, context) => {
      return {
        name: input.name
      };
    }
  }
};
