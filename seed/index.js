import { UsersDB } from '../src/models';
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
    console.log('Something went wrong while seeding data');
  } else {
    console.log('Database created successfully');
  }
});
