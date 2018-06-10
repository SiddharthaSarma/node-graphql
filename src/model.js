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
};
