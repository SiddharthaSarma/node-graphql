import { UsersDB } from './index';
export const model = {
  async getUser(id) {
    return new Promise((resolve, rejects) => {
      UsersDB.find(
        { _id: id },
        {
          updatedAt: 0,
          createdAt: 0
        },
        (err, user) => {
          return resolve(user);
        }
      );
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
