import { GraphQLServer } from 'graphql-yoga';
import { resolvers } from './resolvers';
import fs from 'fs';
import path from 'path';
import logger from './logger';

const filePath = path.join(__dirname, 'typedefs.graphql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

// server options
const options = {
  port: 8000,
  endpoint: '/graphql',
  playground: '/docs',
  debug: true,
  tracing: true
};

server.start(options, ({ port }) => {
  logger.log('info', `The server is running on http://localhost:${port}`);
});
