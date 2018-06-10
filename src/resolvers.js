import { rejects } from 'assert';

export const resolvers = {
  Query: {
    async onePerson(_, { id }) {
      const person = await getPerson(id);
      return person;
    },
    async getAllPersons(_, { id }) {
      const persons = await getPersons(id);
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

async function getPerson(id) {
  return new Promise((resolve, rejects) => {
    return resolve({
      name: 'siddhartha',
      id: id
    });
  });
}
async function getPersons(id) {
  return new Promise((resolve, rejects) => {
    return resolve([
      {
        name: 'siddhartha',
        id: id
      },
      {
        name: 'siddu',
        id: id
      }
    ]);
  });
}
