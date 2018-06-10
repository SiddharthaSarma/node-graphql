import { UsersDB } from './index';

export const model = {
  // Get user details
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

  // Get each individual single user record
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

  // Add new user
  async addUser(input) {
    return new Promise((resolve, rejects) => {
      UsersDB.insert(
        {
          name: input.name,
          email: input.email,
          phoneNumber: input.phoneNumber,
          street: input.street,
          city: input.city,
          state: input.state
        },
        (err, user) => {
          if (err) {
            return resolve(false);
          }
          return resolve(user);
        }
      );
    });
  },

  // Update the user details
  async updateUser(input) {
    return new Promise((resolve, rejects) => {
      const { id: userId } = input;
      const { id, ...userInput } = input;
      /**
       * Didn't know that we can $set, instead sending {}(empty object)
       * in the case of the if the user didn't send any data other than id.
       * so all the fields are getting emptied only _id field is available.
       * So to fix it came up with a functionality to check if the keys are empty
       * then directly getting the details from getUser method. If you observe 
       * carefully getUser is async method which we need to call using await.
       * Directly we can't use await so to fix it, wrapped it inside async iife
       * and then return the function.
       * 
       * if (Object.keys(userInput).length === 0) {
          return (async () => {
            const user = await this.getUser(userId);
            return resolve(user);
          })();
        }
       */
      UsersDB.update(
        {
          _id: userId
        },
        {
          $set: userInput
        },
        {},
        async (err, recordNumbers) => {
          if (err) {
            return resolve(false);
          }
          const user = await this.getUser(userId);
          return resolve(user);
        }
      );
    });
  },

  // Delete the user record
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
