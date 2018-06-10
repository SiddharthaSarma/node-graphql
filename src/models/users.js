import { UsersDB } from './index';
export const model = {
  async getPerson(id) {
    return new Promise((resolve, rejects) => {
      return resolve({
        name: 'siddhartha',
        id: id
      });
    });
  },
  async getPersons(id) {
    return new Promise((resolve, rejects) => {
      UsersDB.find(
        {},
        {
          updatedAt: 0,
          createdAt: 0
        },
        (err, users) => {
          return resolve(users);
        }
      );
    });
  }
};
