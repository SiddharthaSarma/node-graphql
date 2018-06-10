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
  },
  async deleteUser(id) {
    return new Promise((resolve, rejects) => {
      UsersDB.remove({ _id: id }, (err, number) => {
        let recordDeleted = true;
        let message = 'user record deleted successfully';
        if (err || !number) {
          recordDeleted = false;
          message = 'user record is missing';
        }
        return resolve({
          success: recordDeleted,
          message
        });
      });
    });
  }
};
