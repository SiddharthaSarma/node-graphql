import { UsersDB } from '../src/models';
import logger from '../src/logger';
import casual from 'casual';

const users = [];
for (let index = 0; index < 50; index++) {
  users.push({
    name: casual.name,
    email: casual.email,
    phoneNumber: casual.phone,
    street: casual.street,
    city: casual.street,
    state: casual.state
  });
}

UsersDB.insert(users, (err, docs) => {
  if (err) {
    logger.log('error', err);
  } else {
    logger.log('info', 'seeding done successfully');
  }
});
