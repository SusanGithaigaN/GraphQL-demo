import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeSchema, queryType} from 'nexus'

// determine the query type
// t: represents type
// create a query type definition
const Query = queryType({
  definition: (t) => {
    t.string('greeting', {
      resolve: () => 'Hello world! Again',
    });
  },
});

// create a schema object
const schema = makeSchema( { types: [Query]});

// initialize apollo server
const server = new ApolloServer({ schema });
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`Server running at ${url}`);