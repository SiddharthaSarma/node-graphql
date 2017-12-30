const express = require('express');
const expressGraphql = require('express-graphql');
const schema = require('./schema');
const port = 4000;
const app = express();

app.use('/graphql', expressGraphql({
  schema: schema,
  graphiql: true
}));

app.listen(process.env.PORT || port, () => {
  console.log('listening....');
});